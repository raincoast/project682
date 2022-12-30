import { Component, OnInit } from '@angular/core';
import { Lab } from 'src/app/interfaces/lab';
import { LabService } from '../lab.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  labList!: Lab[]
  constructor(private labService: LabService) { }
  ngOnInit(): void {
    this.getLabList(null)
  }
  getLabList(filter: string | undefined | null) {
    if (filter == null) {
      this.labService.getLabList().subscribe((val: Lab[]) => {
        this.labList = val
        console.log(val)
      })
    }
  }

}
