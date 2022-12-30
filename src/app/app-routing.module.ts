import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'lab',
  loadChildren: () => import("./lab/lab.module").then(m => m.LabModule),
  data: { preload: true }
}, {
  path: '',
  redirectTo: 'lab',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
