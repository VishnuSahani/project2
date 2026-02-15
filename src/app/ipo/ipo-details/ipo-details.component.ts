import { Component, OnInit } from '@angular/core';
import { PhillipsService } from '../../phillips.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ipo-details',
  templateUrl: './ipo-details.component.html',
  styleUrls: ['./ipo-details.component.css']
})
export class IpoDetailsComponent implements OnInit {

  expendedIndex: number = -1;
  constructor(
    public phillipsService: PhillipsService,
    public router: Router
  ) { }

  ngOnDestroy(): void {

    // this.phillipsService.ipoOrderData = null; // make order entry variable null
  }

  ngOnInit(): void {
    if (this.phillipsService.ipoActive == 'ongoing') {
      console.log('ongoing');
      this.getIPOList();
    }
    else if (this.phillipsService.ipoActive == 'upcoming') {
      console.log('upcoming');
      this.getIPOList();
    }
    else if (this.phillipsService.ipoActive == 'closed') {
      console.log('closed');
      this.getIPOList();
    }
  }

  getIPOList() {
    this.phillipsService.getIPO().subscribe({
      next: (respo) => {
        console.log(respo);

      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  iopExpend(index: number): void {
    this.expendedIndex = this.expendedIndex === index ? -1 : index;
  }
  ipoBtnClick(ipoActive: 'ongoing' | 'upcoming' | 'closed'): void {
    this.phillipsService.ipoActive = ipoActive;
    this.expendedIndex = -1;
  }

  applyIPO(data: any): void {
    if (data) {
      this.phillipsService.ipoOrderData = data;
      this.router.navigate(['/ipo/order']);
    }
  }

  activeIpoList = [{ "name": "AYE FINANCE LIMITED", "category": ["IND"], "ceilingprice": "129.00", "closedatetime": "11-02-2026 17:00:00", "cuttoff": "129.00", "discounttype": "1", "discountvalue": "0.00", "floorprice": "122.00", "isin": "INE501X01029", "issuesize": "45532785.0000", "issuetype": "BB", "maxbidqty": "20696720", "maxvalue": "500000.0000", "minbidqty": "116", "minvalue": "14152.0000", "opendatetime": "09-02-2026 10:00:00", "symbol": "AYE", "tickprice": "1.00", "tplusmodificationfrom": "12-02-2026 10:00:00", "tplusmodificationto": "12-02-2026 13:00:00", "tradinglot": "116", "exch": "BSE", "subcategory": "", "logo": "", "pdf": "", "report_link": "" }, { "name": "BIOPOL CHEMICALS LIMITED", "category": ["IND"], "ceilingprice": "108.0", "closedatetime": "10-02-2026 17:00:00", "cuttoff": "108.0", "discounttype": "", "discountvalue": "", "floorprice": "102.0", "isin": "INE0XW001014", "issuesize": "2894400", "issuetype": "EQUITY", "maxbidqty": "2400", "maxvalue": "259200", "minbidqty": "2400", "minvalue": "244800", "opendatetime": "06-02-2026 10:00:00", "symbol": "BIOPOL", "tickprice": "1.0", "tplusmodificationfrom": " 10:00:00", "tplusmodificationto": " 13:00:00", "tradinglot": "1200", "exch": "NSE", "subcategory": "SME", "logo": "", "pdf": "", "report_link": "" }, { "name": "FRACTAL ANALYTICS LIMITED", "category": ["IND", "EMP"], "ceilingprice": "900.00", "closedatetime": "11-02-2026 17:00:00", "cuttoff": "900.00", "discounttype": "1", "discountvalue": "0.00", "floorprice": "857.00", "isin": "INE212S01015", "issuesize": "18579360.0000", "issuetype": "BB", "maxbidqty": "8091888", "maxvalue": "500000.0000", "minbidqty": "16", "minvalue": "13712.0000", "opendatetime": "09-02-2026 10:00:00", "symbol": "FRACTAL", "tickprice": "1.00", "tplusmodificationfrom": "12-02-2026 10:00:00", "tplusmodificationto": "12-02-2026 13:00:00", "tradinglot": "16", "exch": "BSE", "subcategory": "", "logo": "", "pdf": "", "report_link": "" }, { "name": "MARUSHIKA TECHNOLOGY LIMITED", "category": ["IND"], "ceilingprice": "117.0", "closedatetime": "16-02-2026 17:00:00", "cuttoff": "117.0", "discounttype": "", "discountvalue": "", "floorprice": "111.0", "isin": "INE0X7G01013", "issuesize": "2305200", "issuetype": "EQUITY", "maxbidqty": "2400", "maxvalue": "280800", "minbidqty": "2400", "minvalue": "266400", "opendatetime": "12-02-2026 10:00:00", "symbol": "MARUSHIKA", "tickprice": "1.0", "tplusmodificationfrom": " 10:00:00", "tplusmodificationto": " 13:00:00", "tradinglot": "1200", "exch": "NSE", "subcategory": "SME", "logo": "", "pdf": "", "report_link": "" }, { "name": "PAN HR SOLUTION LIMITED", "category": ["IND"], "ceilingprice": "78.00", "closedatetime": "10-02-2026 17:00:00", "cuttoff": "78.00", "discounttype": "1", "discountvalue": "0.00", "floorprice": "74.00", "isin": "INE1N9E01015", "issuesize": "1646400.0000", "issuetype": "FP", "maxbidqty": "907200", "maxvalue": "500000.0000", "minbidqty": "3200", "minvalue": "236800.0000", "opendatetime": "06-02-2026 10:00:00", "symbol": "PANHR", "tickprice": "1.00", "tplusmodificationfrom": "11-02-2026 10:00:00", "tplusmodificationto": "11-02-2026 13:00:00", "tradinglot": "1600", "exch": "BSE", "subcategory": "", "logo": "", "pdf": "", "report_link": "" }]
  upcomingIpoList = [
    {
      name: "IPO Name 1",
      date: "2022-01-01",
      price: "100",
      lotSize: "10",
      minInvestment: "1000",
      maxInvestment: "10000",
      status: "open"
    },
    {
      name: "IPO Name 2",
      date: "2022-01-02",
      price: "200",
      lotSize: "20",
      minInvestment: "2000",
      maxInvestment: "20000",
      status: "open"
    }
  ]
  closedIpoList = [
    {
      name: "IPO Name 1",
      date: "2022-01-01",
      price: "100",
      lotSize: "10",
      minInvestment: "1000",
      maxInvestment: "10000",
      status: "open"
    },
    {
      name: "IPO Name 2",
      date: "2022-01-02",
      price: "200",
      lotSize: "20",
      minInvestment: "2000",
      maxInvestment: "20000",
      status: "open"
    }
  ]

}
