import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './lab-routing.module';
import { MainComponent } from './main/main.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { LabBasicInfoComponent } from './lab-basic-info/lab-basic-info.component';


@NgModule({
  declarations: [
    MainComponent,
    InfoCardComponent,
    ListComponent,
    DetailComponent,
    LabBasicInfoComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class LabModule { }
