import { Component, OnInit } from '@angular/core';
import { RTBViewSRDetailsService } from '../rtb.services/rtb-viewsr.service';

@Component({
  moduleId:module.id,
  selector: "rtb-view-sr",
  templateUrl: '../rtb.templates/rtb-view-sr.component.html',
})
export class RTBViewSRComponent implements OnInit  { 
  userSRData: any = {};
  divisionName : string;
  accExecName : string;
  srStatus : string;
  id: string;

  constructor(private service: RTBViewSRDetailsService) {
    this.id = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1];
   }
  ngOnInit(): void {    
    console.log("id from the front end fetched from the router ===>", this.id);
    this.service.getUserSpendDetails(this.id).subscribe((results: any) => {
        this.userSRData = results;
        this.divisionName = this.userSRData.Division.Name;
        this.accExecName = this.userSRData.AreaHeadOfSystem.Name;
        this.srStatus = this.userSRData.Status.id;
        console.log("this.userSRData ===>", this.userSRData);
    });
}
}
