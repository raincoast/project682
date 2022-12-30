import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Lab } from 'src/app/interfaces/lab';

@Component({
  selector: 'app-lab-basic-info',
  templateUrl: './lab-basic-info.component.html',
  styleUrls: ['./lab-basic-info.component.css']
})
export class LabBasicInfoComponent {
  @Input() labInfo!: Lab;
}
