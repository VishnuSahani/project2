import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DebtDashboardComponent } from './debt-dashboard/debt-dashboard.component';
import { DebtOrderBookComponent } from './debt-order-book/debt-order-book.component';
import { DebtOrderEntryComponent } from './debt-order-entry/debt-order-entry.component';

const routes: Routes = [
  {
    path: "",
    component: DebtDashboardComponent
  },
  {
    path: "order-book",
    component: DebtOrderBookComponent
  },
  {
    path: "order",
    component: DebtOrderEntryComponent
  },
  {
    path: "order/:id",
    component: DebtOrderEntryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DebtRoutingModule { }
