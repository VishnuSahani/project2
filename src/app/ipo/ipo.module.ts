import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IpoRoutingModule } from './ipo-routing.module';
import { IpoDashboardComponent } from './ipo-dashboard/ipo-dashboard.component';
import { IpoDetailsComponent } from './ipo-details/ipo-details.component';
import { IpoOrderBookComponent } from './ipo-order-book/ipo-order-book.component';
import { IpoOrderEntryComponent } from './ipo-order-entry/ipo-order-entry.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogConfirmComponent } from '../shared/dialog-confirm/dialog-confirm.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    IpoDashboardComponent,
    IpoDetailsComponent,
    IpoOrderBookComponent,
    IpoOrderEntryComponent,
  ],
  imports: [
    CommonModule,
    IpoRoutingModule,
    FormsModule,

    // material
    MatIconModule,
    MatDialogModule,

    //shared module
    SharedModule

  ]
})
export class IpoModule { }
