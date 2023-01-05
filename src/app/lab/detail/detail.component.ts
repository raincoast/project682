import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Lab } from 'src/app/interfaces/lab';
import { LabService } from '../lab.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private labService: LabService) { }
  labInfo: Partial<Lab> = {
    id: -1,
    album: "",
    name: "",
    position: "",
    description: "",
    totalSeats: 0,
    availableSeats: 0,
    openHours: [],
    computerTypes: [],
    seats: []
  }
  ngOnInit(): void {
    this.route.paramMap.pipe(switchMap((param: ParamMap) => {
      return this.labService.getLabInfo(parseInt(param.get("id")!))
    })).subscribe((value: Partial<Lab>) => {
      value.album = "https://pbs.twimg.com/media/EInME8oWwAENtlY?format=jpg&name=4096x4096"
      value.description = "This is a test description of the lab"
      value.totalSeats = 20;
      value.availableSeats = 10;
      value.openHours = [{ open: "9:15", close: "12:15", day: "Monday", isToday: false }, { open: "14:00", close: "17:00", day: "Tuesday", isToday: true }];
      value.computerTypes = [{ id: 1, name: "MacOS" }, { id: 2, name: "Linux" }];
      value.seats = [{
        id: 1,
        alias: 'C-1',
        computerType: { id: 1, name: "MacOS" },
        isAvailable: true
      },
      {
        id: 2,
        alias: 'C-2',
        computerType: { id: 2, name: "Linux" },
        isAvailable: false
      },
      {
        id: 3,
        alias: 'C-3',
        computerType: { id: 2, name: "Linux" },
        isAvailable: true
      }]
      this.labInfo = value;
    })
  }

}
