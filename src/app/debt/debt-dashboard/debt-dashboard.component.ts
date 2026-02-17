import { Component, OnInit } from '@angular/core';
import { DebtService } from '../debt.service';

@Component({
  selector: 'app-debt-dashboard',
  templateUrl: './debt-dashboard.component.html',
  styleUrls: ['./debt-dashboard.component.css']
})
export class DebtDashboardComponent implements OnInit {

  constructor(
    public debtService: DebtService
  ) { }

  ngOnInit() {
  }

}
