import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { PhillipsService } from 'src/app/phillips.service';
import { DialogConfirmComponent } from 'src/app/shared/dialog-confirm/dialog-confirm.component';
import { DialogData } from 'src/app/shared/dialog-data-type';

@Component({
  selector: 'app-ipo-order-entry',
  templateUrl: './ipo-order-entry.component.html',
  styleUrls: ['./ipo-order-entry.component.css']
})
export class IpoOrderEntryComponent implements OnInit {

  // template driven form
  lot1?: number;
  rate1?: number;
  maxAllowedQty1?: number;
  cutoffflag1: boolean = false;
  totalAmount1?: number;

  lot2?: number;
  rate2?: number;
  maxAllowedQty2?: number;
  cutoffflag2: boolean = false;
  totalAmount2?: number;

  lot3?: number;
  rate3?: number;
  maxAllowedQty3?: number;
  cutoffflag3: boolean = false;
  totalAmount3?: number;

  upiId?: string;
  upiIdName?: string;
  upiIdNameList: string[] = [
    "@abfspay",
    "@okaxis",
    "@okhdfcbank"
  ];

  orderDetails: any = null;
  orderId?: any;

  applyAs?: string;

  constructor(
    private phillipsService: PhillipsService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {
    this.route.queryParams.subscribe(params => {
      this.orderId = params['id'];
      console.log(this.orderId);
    });
  }


  ngOnInit(): void {
    this.orderDetails = this.phillipsService.ipoOrderData;
    this.upiIdName = this.upiIdNameList[0];
    if (!this.orderDetails) {
      this.router.navigate(['ipo'])
    }

  }

  goBack() {
    this.router.navigate(['ipo'])
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
      image: '/assets/img/order-img.png',
      type: 'info'
    }

    if (this.orderId) {
      dialogData.message = 'Your order has been modified successfully';
    } else {
      dialogData.message = 'Your order has been submitted successfully';
    }

    this.dialogOpen(dialogData).then((result) => {
      if (result) {
        this.router.navigate(['ipo'])
      }
    })
  }


}
