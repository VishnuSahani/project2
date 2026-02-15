import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhillipsService } from 'src/app/phillips.service';

@Component({
  selector: 'app-ipo-dashboard',
  templateUrl: './ipo-dashboard.component.html',
  styleUrls: ['./ipo-dashboard.component.css']
})
export class IpoDashboardComponent implements OnInit {

  constructor(
    public phillipsService: PhillipsService
  ) { }

  ngOnInit() { }



}
