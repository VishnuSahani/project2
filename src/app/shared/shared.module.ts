import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';

@NgModule({
  declarations: [
    DialogConfirmComponent
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
    DialogConfirmComponent   // 🔥 REQUIRED in Angular 7 for dialog
  ]
})
export class SharedModule { }
