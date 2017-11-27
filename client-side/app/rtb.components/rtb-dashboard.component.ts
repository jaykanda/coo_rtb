import { Component, OnInit } from '@angular/core';
import { RTBGridDashBoardService } from '../rtb.services/rtb-dashboard.service';
import { IRunRequest, IPagination, IRunRequestService } from "../rtb.interfaces/rtb-grid.interface";

@Component({
  moduleId:module.id,
  selector: "rtb-dashboard",
  templateUrl: '../rtb.templates/rtb-dashboard.component.html'
})
export class RTBDashboardComponent implements OnInit {
  pageHeading = 'Dashboard';
  runrequests: any[]; 
  processId : string;

  constructor(private service:RTBGridDashBoardService) { 
  }

  ngOnInit(): void {
    this.service.getCurrentUserData().subscribe((results: any) => {
        this.runrequests = results;
      });
  }
}