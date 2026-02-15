import { Component, OnInit } from '@angular/core';
import { OfsService } from '../ofs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DialogData } from 'src/app/shared/dialog-data-type';
import { DialogConfirmComponent } from 'src/app/shared/dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-ofs-order-entry',
  templateUrl: './ofs-order-entry.component.html',
  styleUrls: ['./ofs-order-entry.component.css']
})
export class OfsOrderEntryComponent implements OnInit {

  orderDetails: any = null;
  orderId?: any;

  constructor(
    private ofsService: OfsService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {
    this.route.queryParams.subscribe(params => {
      this.orderId = params['id'];
      console.log(this.orderId);
    });
  }

  ngOnInit() {
    this.orderDetails = this.ofsService.ofsOrderData;
    if (!this.orderDetails) {
      this.router.navigate(['ofs'])
    }
  }

  goBack() {
    this.router.navigate(['ofs'])
  }

  dialogOpen(dialogData: DialogData): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.dialog.open(DialogConfirmComponent, {
        width: '40%',
        data: dialogData,
        disableClose: true,
        hasBackdrop: true,
      }).afterClosed().subscribe((result) => {
        resolve(result);
      });
    })
  }

  applyOrder() {
    let dialogData: DialogData = {
      title: 'Info',
      message: '',
      image: '',
      type: 'info'
    }

    if (this.orderId) {
      dialogData.message = 'Your order has been modified successfully';
    } else {
      dialogData.message = 'Your order has been submitted successfully';
    }

    this.dialogOpen(dialogData).then((result) => {
      if (result) {
        this.router.navigate(['ofs'])
      }
    })
  }


}
