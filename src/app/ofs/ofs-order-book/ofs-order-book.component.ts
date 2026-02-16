import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { OfsService } from '../ofs.service';
import { DialogData } from 'src/app/shared/dialog-data-type';
import { DialogConfirmComponent } from 'src/app/shared/dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-ofs-order-book',
  templateUrl: './ofs-order-book.component.html',
  styleUrls: ['./ofs-order-book.component.css']
})
export class OfsOrderBookComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private ofsService: OfsService
  ) { }

  ngOnInit() {
  }

  openDialog(title: string, message: string, type: 'action' | 'info', image: string = ''): Promise<any> {
    return new Promise((resolve, reject) => {
      const dialogData: DialogData = {
        title: title,
        message: message,
        image: image,
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


  modifyOrder(order: any): void {
    // redirect to ipo order page
    if (order.id) {
      this.ofsService.ofsOrderData = order;
      this.router.navigate(['/ofs/order'], { queryParams: { id: order.id } });
    }
  }

  cancelOrder(order: any): void {
    this.openDialog("Cancel Order", "Are you sure you want to cancel this order?", "action").then((result) => {
      console.log(result);
    });
  }

  ofsOrderList: any[] = [
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

}
