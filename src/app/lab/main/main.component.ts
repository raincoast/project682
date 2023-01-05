import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Lab } from 'src/app/interfaces/lab';
import { LabService } from '../lab.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @ViewChild(RouterOutlet) outlet!: RouterOutlet;
  public search(event: any, content: string) {
    if (this.outlet.component instanceof ListComponent) {
      (this.outlet.component as ListComponent).getLabList(null, content);
    }
  }
}
