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
  labInfo: Lab = {
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
    })).subscribe(val => {
      if (val == null) {
        this.router.navigate(['/list'])
      } else {
        this.labInfo = val as Lab
      }
    })
  }

}
