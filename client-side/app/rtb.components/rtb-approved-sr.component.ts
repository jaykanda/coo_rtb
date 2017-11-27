import { Component , OnInit } from '@angular/core';
import { RTBApprovedViewSRDetailsService } from "../rtb.services/rtb-approvedview.service";


@Component({
  moduleId:module.id,
  selector: "rtb-new-sr",
  templateUrl: '../rtb.templates/rtb-approved-sr.component.html'
})
export class RTBApprovedSRComponent implements OnInit { 
    approvedViewData : any = {};    
    keys: any[] = [];
    id: string;
    amountSpend: string;
    division: string;
    bu: string;
    hos: string;
    requestorName: string;
    requestorEmail: string;
    requestorContNumber: string;
    amiPartner: string;
    CIOEngaged: string;
    tacPresenter: string;
    tagPresenter: string;
    gcmcPresenter: string;
    costForumPresenter: string;
    srcContactEng: string;
    pricingTerms: string;
    buyOnlineSupplier: string;
    financeConEngaged: string;
    projectName: string;
    spendType: string;

    constructor(private service: RTBApprovedViewSRDetailsService) {}
    ngOnInit() : void {
      this.id = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1];
      console.log("id from the front end fetched from the router ===>", this.id);
      this.service.getApprovedViewSRData(this.id).subscribe((results: any) => {
          this.approvedViewData = results;
          //this.keys = Object.keys(this.approvedViewData);
          console.log("this.approvedViewData ===>", this.approvedViewData);
          this.amountSpend = this.approvedViewData.AmountToSpend.Name;
          this.division = this.approvedViewData.Division.Name;
          this.bu = this.approvedViewData.BusinessUnit.Name;
          this.hos = this.approvedViewData.AreaHeadOfSystem.Name;
          this.requestorName = this.approvedViewData.Requestor.Name;
          this.requestorEmail = this.approvedViewData.Requestor.Email;
          this.requestorContNumber = this.approvedViewData.Requestor.ContactNumber;
          this.amiPartner = this.approvedViewData.AMIPartnerEngaged.Name;
          this.CIOEngaged = this.approvedViewData.CIOContactEngaged.Name;
          this.tacPresenter = this.approvedViewData.TACPresenter.Name;
          this.tagPresenter = this.approvedViewData.TechnologyAcquisitionGatePresenter.Name;
          this.gcmcPresenter = this.approvedViewData.GCMCPresenter.Name;
          this.costForumPresenter = this.approvedViewData.CostForumPresenter.Name;
          this.srcContactEng = this.approvedViewData.SourcingContactEngaged.Name;
          this.pricingTerms = this.approvedViewData.PricingTerms.Name;   
          this.buyOnlineSupplier = this.approvedViewData.BuyingOnlineSupplier.Name;
          this.financeConEngaged = this.approvedViewData.FinanceContactEngaged.Name;
          this.projectName = this.approvedViewData.Project.Name;
          this.spendType = this.approvedViewData.SpendType.Name;
 
    });
  }
}