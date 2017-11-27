"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var rtb_approvedview_service_1 = require("../rtb.services/rtb-approvedview.service");
var RTBApprovedSRComponent = (function () {
    function RTBApprovedSRComponent(service) {
        this.service = service;
        this.approvedViewData = {};
        var id = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1];
    }
    RTBApprovedSRComponent.prototype.ngOnInit = function () {
        var id = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1];
        console.log("id from the front end fetched from the router ===>", id);
        this.service.getEngagementViewSRData(id).subscribe(results => {
            this.approvedViewData = results;
            this.keys = Object.keys(this.approvedViewData);
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
            this.costForumPresenter = this.approvedViewData.CostForumPresenter.Name;
            this.pricingTerms = this.approvedViewData.PricingTerms.Name;   
            this.buyOnlineSupplier = this.approvedViewData.BuyingOnlineSupplier.Name;
            this.financeConEngaged = this.approvedViewData.FinanceContactEngaged.Name;
            this.projectName = this.approvedViewData.Project.Name;
            this.spendType = this.approvedViewData.SpendType.Name;
        });    
    };
    RTBApprovedSRComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "rtb-new-sr",
            templateUrl: '../rtb.templates/rtb-approved-sr.component.html'
        }), 
        __metadata('design:paramtypes', [rtb_approvedview_service_1.RTBApprovedViewSRDetailsService])
    ], RTBApprovedSRComponent);
    return RTBApprovedSRComponent;
}());
exports.RTBApprovedSRComponent = RTBApprovedSRComponent;
//# sourceMappingURL=rtb-approved-sr.component - Copy.js.map