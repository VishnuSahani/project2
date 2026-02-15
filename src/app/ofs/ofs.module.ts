import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfsRoutingModule } from './ofs-routing.module';
import { OfsDashboardComponent } from './ofs-dashboard/ofs-dashboard.component';
import { OfsDetailsComponent } from './ofs-details/ofs-details.component';
import { OfsOrderBookComponent } from './ofs-order-book/ofs-order-book.component';
import { OfsOrderEntryComponent } from './ofs-order-entry/ofs-order-entry.component';
import { MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [OfsDashboardComponent, OfsDetailsComponent, OfsOrderBookComponent, OfsOrderEntryComponent],
  imports: [
    CommonModule,
    OfsRoutingModule,

    MatIconModule,
    MatDialogModule,
    FormsModule,
    SharedModule
  ]
})
export class OfsModule { }
