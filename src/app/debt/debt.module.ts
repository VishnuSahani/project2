import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DebtRoutingModule } from './debt-routing.module';
import { DebtDashboardComponent } from './debt-dashboard/debt-dashboard.component';
import { DebtDetailsComponent } from './debt-details/debt-details.component';
import { DebtOrderBookComponent } from './debt-order-book/debt-order-book.component';
import { DebtOrderEntryComponent } from './debt-order-entry/debt-order-entry.component';
import { MatDialogModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DebtDashboardComponent, DebtDetailsComponent, DebtOrderBookComponent, DebtOrderEntryComponent],
  imports: [
    CommonModule,
    DebtRoutingModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    SharedModule

  ]
})
export class DebtModule { }
