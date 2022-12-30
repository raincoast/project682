import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [{
  path: '',
  component: MainComponent,
  children: [{
    path: '',
    component: ListComponent
  }, {
    path: ':id',
    component: DetailComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
