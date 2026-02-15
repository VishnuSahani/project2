import { Component, OnInit } from '@angular/core';
import { OfsService } from '../ofs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ofs-details',
  templateUrl: './ofs-details.component.html',
  styleUrls: ['./ofs-details.component.css']
})
export class OfsDetailsComponent implements OnInit {

  constructor(
    public ofsService: OfsService,
    public router: Router
  ) { }

  ngOnInit() {
    if (this.ofsService.ofsActive == 'ongoing') {
      console.log('ongoing');
      // this.getOfsList();
    }
  }

  ofsBtnClick(ofsActive: 'ongoing'): void {
    this.ofsService.ofsActive = ofsActive;
  }

  applyOfs(data: any): void {
    if (data) {
      this.ofsService.ofsOrderData = data;
      this.router.navigate(['/ofs/order']);
    }
  }

  getOfsList() {
    this.ofsService.getOfs().subscribe({
      next: (respo) => {
        console.log(respo);

      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  activeOfsList = [{ "name": "AYE FINANCE LIMITED", "category": ["IND"], "ceilingprice": "129.00", "closedatetime": "11-02-2026 17:00:00", "cuttoff": "129.00", "discounttype": "1", "discountvalue": "0.00", "floorprice": "122.00", "isin": "INE501X01029", "issuesize": "45532785.0000", "issuetype": "BB", "maxbidqty": "20696720", "maxvalue": "500000.0000", "minbidqty": "116", "minvalue": "14152.0000", "opendatetime": "09-02-2026 10:00:00", "symbol": "AYE", "tickprice": "1.00", "tplusmodificationfrom": "12-02-2026 10:00:00", "tplusmodificationto": "12-02-2026 13:00:00", "tradinglot": "116", "exch": "BSE", "subcategory": "", "logo": "", "pdf": "", "report_link": "" }, { "name": "BIOPOL CHEMICALS LIMITED", "category": ["IND"], "ceilingprice": "108.0", "closedatetime": "10-02-2026 17:00:00", "cuttoff": "108.0", "discounttype": "", "discountvalue": "", "floorprice": "102.0", "isin": "INE0XW001014", "issuesize": "2894400", "issuetype": "EQUITY", "maxbidqty": "2400", "maxvalue": "259200", "minbidqty": "2400", "minvalue": "244800", "opendatetime": "06-02-2026 10:00:00", "symbol": "BIOPOL", "tickprice": "1.0", "tplusmodificationfrom": " 10:00:00", "tplusmodificationto": " 13:00:00", "tradinglot": "1200", "exch": "NSE", "subcategory": "SME", "logo": "", "pdf": "", "report_link": "" }, { "name": "FRACTAL ANALYTICS LIMITED", "category": ["IND", "EMP"], "ceilingprice": "900.00", "closedatetime": "11-02-2026 17:00:00", "cuttoff": "900.00", "discounttype": "1", "discountvalue": "0.00", "floorprice": "857.00", "isin": "INE212S01015", "issuesize": "18579360.0000", "issuetype": "BB", "maxbidqty": "8091888", "maxvalue": "500000.0000", "minbidqty": "16", "minvalue": "13712.0000", "opendatetime": "09-02-2026 10:00:00", "symbol": "FRACTAL", "tickprice": "1.00", "tplusmodificationfrom": "12-02-2026 10:00:00", "tplusmodificationto": "12-02-2026 13:00:00", "tradinglot": "16", "exch": "BSE", "subcategory": "", "logo": "", "pdf": "", "report_link": "" }, { "name": "MARUSHIKA TECHNOLOGY LIMITED", "category": ["IND"], "ceilingprice": "117.0", "closedatetime": "16-02-2026 17:00:00", "cuttoff": "117.0", "discounttype": "", "discountvalue": "", "floorprice": "111.0", "isin": "INE0X7G01013", "issuesize": "2305200", "issuetype": "EQUITY", "maxbidqty": "2400", "maxvalue": "280800", "minbidqty": "2400", "minvalue": "266400", "opendatetime": "12-02-2026 10:00:00", "symbol": "MARUSHIKA", "tickprice": "1.0", "tplusmodificationfrom": " 10:00:00", "tplusmodificationto": " 13:00:00", "tradinglot": "1200", "exch": "NSE", "subcategory": "SME", "logo": "", "pdf": "", "report_link": "" }, { "name": "PAN HR SOLUTION LIMITED", "category": ["IND"], "ceilingprice": "78.00", "closedatetime": "10-02-2026 17:00:00", "cuttoff": "78.00", "discounttype": "1", "discountvalue": "0.00", "floorprice": "74.00", "isin": "INE1N9E01015", "issuesize": "1646400.0000", "issuetype": "FP", "maxbidqty": "907200", "maxvalue": "500000.0000", "minbidqty": "3200", "minvalue": "236800.0000", "opendatetime": "06-02-2026 10:00:00", "symbol": "PANHR", "tickprice": "1.00", "tplusmodificationfrom": "11-02-2026 10:00:00", "tplusmodificationto": "11-02-2026 13:00:00", "tradinglot": "1600", "exch": "BSE", "subcategory": "", "logo": "", "pdf": "", "report_link": "" }]


}
