import { Component, Input } from '@angular/core';
import { Lab } from 'src/app/interfaces/lab';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent {
  @Input() lab: Lab = {
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
}
