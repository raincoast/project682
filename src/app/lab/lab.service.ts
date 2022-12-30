import { Injectable } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { Lab } from '../interfaces/lab';

@Injectable({
  providedIn: 'root'
})
export class LabService {

  constructor() { }
  list: Lab[] = [{
    id: 1,
    album: "https://pbs.twimg.com/media/EInME8oWwAENtlY?format=jpg&name=4096x4096",
    name: "Lab1",
    position: "BC-010-01",
    description: "This is a test description of the lab 1, here have several seats",
    totalSeats: 20,
    availableSeats: 10,
    openHours: [{ open: "9:15", close: "12:15", day: "Monday", isToday: false }, { open: "14:00", close: "17:00", day: "Tuesday", isToday: true }],
    computerTypes: [{ id: 1, name: "MacOS" }, { id: 2, name: "Linux" }],
    seats: [{
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
  }]
  getLabInfo(id: number) {
    let lab = this.list.filter(val => val.id == id)
    return of(lab.length ? lab[0] : null)
  }
  getLabList(): Observable<Lab[]> {

    return of(this.list)
  }
}
