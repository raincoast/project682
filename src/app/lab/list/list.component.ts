import { Component, OnInit } from '@angular/core';
import { Lab } from 'src/app/interfaces/lab';
import { LabService } from '../lab.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  labList: Partial<Lab>[] = [];
  constructor(private labService: LabService) { }
  ngOnInit(): void {
    this.getLabList(null)
  }
  getLabList(filter: string | undefined | null, searchContent: String = "") {
    console.log("call the get lab list", searchContent.valueOf());
    if (filter == null) {
      if (searchContent == "") {
        this.labService.getLabList().subscribe((val: Partial<Lab>[]) => {
          val.forEach(value => {
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
          })

          console.log(val);
          this.labList = val;
        })
      } else {
        this.labList = this.labList.filter((value: Partial<Lab>) => {
          console.log(value.name?.indexOf(searchContent.valueOf()))
          console.log(searchContent);
          return value.name?.indexOf(searchContent.valueOf()) != -1
        })
      }
    }

  }
}



