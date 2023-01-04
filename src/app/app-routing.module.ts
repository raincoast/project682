import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [{
  path: 'lab',
  loadChildren: () => import("./lab/lab.module").then(m => m.LabModule),
  data: { preload: true }
}, {
  path: '',
  redirectTo: 'lab',
  pathMatch: 'full'
}, {
  path: '**',
  component: NotfoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
