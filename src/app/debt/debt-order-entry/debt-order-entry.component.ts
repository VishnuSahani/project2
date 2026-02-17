import { Component, OnInit } from '@angular/core';
import { DebtService } from '../debt.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DialogData } from 'src/app/shared/dialog-data-type';
import { DialogConfirmComponent } from 'src/app/shared/dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-debt-order-entry',
  templateUrl: './debt-order-entry.component.html',
  styleUrls: ['./debt-order-entry.component.css']
})
export class DebtOrderEntryComponent implements OnInit {

  orderDetails: any = null;
  orderId?: any;
  // form fields
  quantity: number = 0;
  eligibleShares: string = "Eligible Shares: 30";
  price: number = 0;
  offerPrice: string = "Offer Price: 60000";
  orderType: string = 'Non-Retailer';
  totalAmount: number = 0;
  isCutOffPrice: boolean = true;
  marginAvailable: number = 0;
  upId: string = '';
  upiIdName: string = '';
  upiIdNameList: string[] = [
    "@abfspay",
    "@okaxis",
    "@okhdfcbank"
  ];

  debtSeriesList: any[] = [
    {
      id: 1,
      value: "8.7 % Monthly Payout for 24 Months"
    },
    {
      id: 2,
      value: "8.7 % Monthly Payout for 24 Months"
    },
    {
      id: 3,
      value: "8.7 % Monthly Payout for 24 Months"
    },
    {
      id: 1,
      value: "8.7 % Monthly Payout for 24 Months"
    },
    {
      id: 2,
      value: "8.7 % Monthly Payout for 24 Months"
    },
    {
      id: 3,
      value: "8.7 % Monthly Payout for 24 Months"
    },
    {
      id: 1,
      value: "8.7 % Monthly Payout for 24 Months"
    },
    {
      id: 2,
      value: "8.7 % Monthly Payout for 24 Months"
    },
    {
      id: 3,
      value: "8.7 % Monthly Payout for 24 Months"
    },
  ];

  constructor(
    private debtService: DebtService,
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
    this.orderDetails = this.debtService.debtOrderData;
    this.upiIdName = this.upiIdNameList[0];
    if (!this.orderDetails) {
      this.router.navigate(['debt'])
    }
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  increasePrice() {
    this.price++;
  }

  decreasePrice() {
    if (this.price > 0) {
      this.price--;
    }
  }

  goBack() {
    this.router.navigate(['debt'])
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
        this.router.navigate(['debt'])
      }
    })
  }



}
