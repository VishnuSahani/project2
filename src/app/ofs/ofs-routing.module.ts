import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfsDashboardComponent } from './ofs-dashboard/ofs-dashboard.component';
import { OfsOrderEntryComponent } from './ofs-order-entry/ofs-order-entry.component';
import { OfsOrderBookComponent } from './ofs-order-book/ofs-order-book.component';

const routes: Routes = [
  {
    path: '',
    component: OfsDashboardComponent
  },
  {
    path: 'order-book',
    component: OfsOrderBookComponent
  },
  {
    path: 'order',
    component: OfsOrderEntryComponent
  }, {
    path: 'order/:id',
    component: OfsOrderEntryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfsRoutingModule { }
