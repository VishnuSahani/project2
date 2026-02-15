import { Component, OnInit } from '@angular/core';
import { OfsService } from '../ofs.service';

@Component({
  selector: 'app-ofs-dashboard',
  templateUrl: './ofs-dashboard.component.html',
  styleUrls: ['./ofs-dashboard.component.css']
})
export class OfsDashboardComponent implements OnInit {

  constructor(
    public ofsService: OfsService
  ) { }

  ngOnInit() {
  }

}
