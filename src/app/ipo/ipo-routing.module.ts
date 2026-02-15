import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IpoDashboardComponent } from './ipo-dashboard/ipo-dashboard.component';
import { IpoOrderEntryComponent } from './ipo-order-entry/ipo-order-entry.component';

const routes: Routes = [
  {
    path: '',
    component: IpoDashboardComponent
  },
  {
    path: 'order',
    component: IpoOrderEntryComponent
  },
  {
    path: 'order/:id',
    component: IpoOrderEntryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IpoRoutingModule { }
