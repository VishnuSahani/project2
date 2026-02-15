import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { PhillipsService } from 'src/app/phillips.service';
import { DialogConfirmComponent } from 'src/app/shared/dialog-confirm/dialog-confirm.component';
import { DialogData } from 'src/app/shared/dialog-data-type';

@Component({
  selector: 'app-ipo-order-book',
  templateUrl: './ipo-order-book.component.html',
  styleUrls: ['./ipo-order-book.component.css']
})

export class IpoOrderBookComponent implements OnInit {
  expendedIndex: number = -1;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private phillipsService: PhillipsService
  ) { }

  ngOnInit(): void {
    // this.openDialog("test title", "test message").then((result) => {
    //   console.log(result);
    // });
  }

  openDialog(title: string, message: string, type: 'action' | 'info'): Promise<any> {
    return new Promise((resolve, reject) => {
      const dialogData: DialogData = {
        title: title,
        message: message,
        image: '',
        type: type
      };
      const dialogRef = this.dialog.open(DialogConfirmComponent, {
        width: '40%',
        data: dialogData,
        disableClose: true,
        hasBackdrop: true,
      });

      dialogRef.afterClosed().subscribe(result => {
        resolve(result);
      });
    });
  }

  iopExpend(index: number): void {
    this.expendedIndex = this.expendedIndex === index ? -1 : index;
  }

  modifyOrder(order: any): void {
    // redirect to ipo order page
    if (order.id) {
      this.phillipsService.ipoOrderData = order;
      this.router.navigate(['/ipo/order'], { queryParams: { id: order.id } });
    }
  }

  cancelOrder(order: any): void {
    this.openDialog("Cancel Order", "Are you sure you want to cancel this order?", "action").then((result) => {
      console.log(result);
    });
  }

  ipoOrderList: any[] = [
    {
      id: 1,
      name: 'IPO Name',
      opendatetime: '2022-01-01',
      minvalue: 1000,
      tradinglot: 10,
      floorprice: 100,
      cuttoff: 200,
      exch: 'NSE',
      issuetype: 'IPO',
      issuesize: 1000,
      freshissue: 1000,
      offerforsale: 1000,
      listingat: 'NSE',
      status: 'Not Alloted',
      applicationStatus: 'Rejected'
    },
    {
      id: 2,
      name: 'IPO Name',
      opendatetime: '2022-01-01',
      minvalue: 1000,
      tradinglot: 10,
      floorprice: 100,
      cuttoff: 200,
      exch: 'NSE',
      issuetype: 'IPO',
      issuesize: 1000,
      freshissue: 1000,
      offerforsale: 1000,
      listingat: 'NSE',
      status: 'Alloted',
      applicationStatus: 'Completed'
    },
    {
      id: 3,
      name: 'IPO Name',
      opendatetime: '2022-01-01',
      minvalue: 1000,
      tradinglot: 10,
      floorprice: 100,
      cuttoff: 200,
      exch: 'NSE',
      issuetype: 'IPO',
      issuesize: 1000,
      freshissue: 1000,
      offerforsale: 1000,
      listingat: 'NSE',
      status: 'Pending',
      applicationStatus: 'Pending'
    },
  ];

  timeLineList = [
    {
      title: 'Open Date',
      date: '04 Feb 26',
      status: 'active'
    },
    {
      title: 'Close Date',
      date: '06 Feb 26',
      status: 'active'
    },
    {
      title: 'Allotment Date',
      date: '09 Feb 26',
      status: ''
    },
    {
      title: 'Refund Date',
      date: '10 Feb 26',
      status: ''
    },
    {
      title: 'Transfer to Demat A/c',
      date: '10 Feb 26',
      status: ''
    },
    {
      title: 'Listing Date',
      date: '10 Feb 26',
      status: ''
    }
  ]
}
