import { Component, OnInit } from "@angular/core";
import { RTBEngageviewService } from "../rtb.services/rtb-engageview.service";

@Component({
  moduleId:module.id,
  selector: "rtb-engview",
  templateUrl: '../rtb.templates/rtb-engview-sr.component.html'
})

export class RTBEngageviewSRComponent implements OnInit {
    public engagementViewData : any = {};
    id: string;
    keys: any[];
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
   
    constructor(private service: RTBEngageviewService) {}

 ngOnInit(): void {
  		this.id = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1];
        console.log("id from the front end fetched from the router ===>", this.id);
        this.service.getEngagementViewSRData(this.id).subscribe((results: any) => {
            this.engagementViewData = results;
            this.keys = Object.keys(this.engagementViewData);
            console.log("this.engagementViewData ===>", this.engagementViewData);
            this.amountSpend = this.engagementViewData.AmountToSpend.Name;
            this.division = this.engagementViewData.Division.Name;
            this.bu = this.engagementViewData.BusinessUnit.Name;
            this.hos = this.engagementViewData.AreaHeadOfSystem.Name;
            this.requestorName = this.engagementViewData.Requestor.Name;
            this.requestorEmail = this.engagementViewData.Requestor.Email;
            this.requestorContNumber = this.engagementViewData.Requestor.ContactNumber;
            this.amiPartner = this.engagementViewData.AMIPartnerEngaged.Name;
            this.CIOEngaged = this.engagementViewData.CIOContactEngaged.Name;
            this.tacPresenter = this.engagementViewData.TACPresenter.Name;
            this.tagPresenter = this.engagementViewData.TechnologyAcquisitionGatePresenter.Name;
            this.gcmcPresenter = this.engagementViewData.GCMCPresenter.Name;
            this.costForumPresenter = this.engagementViewData.CostForumPresenter.Name;
            this.srcContactEng = this.engagementViewData.SourcingContactEngaged.Name;
            this.pricingTerms = this.engagementViewData.PricingTerms.Name;   
            this.buyOnlineSupplier = this.engagementViewData.BuyingOnlineSupplier.Name;
            this.financeConEngaged = this.engagementViewData.FinanceContactEngaged.Name;
            this.projectName = this.engagementViewData.Project.Name;
            this.spendType = this.engagementViewData.SpendType.Name;
        });
  }
  tableauOn() {
    window.open('http://52.236.161.147/views/PoC/Graph?:embed=y&:showAppBanner=false&:showShareOptions=true&:display_count=no&:showVizHome=no&:tabs=no&:toolbar=no#19', 'blank');
  }
  approveRequest() {
        this.id = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1];
        this.service.sendApproval(this.id);
  }
  exportPDF() {
        console.log("export PDF data ===>", this.engagementViewData);
        this.id = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1];
        this.service.exportPDFdata(this.id, this.engagementViewData);
    }
	
}

