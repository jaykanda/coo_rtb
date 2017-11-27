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
        this.keys = [];
    }
    RTBApprovedSRComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1];
        console.log("id from the front end fetched from the router ===>", this.id);
        this.service.getApprovedViewSRData(this.id).subscribe(function (results) {
            _this.approvedViewData = results;
            //this.keys = Object.keys(this.approvedViewData);
            console.log("this.approvedViewData ===>", _this.approvedViewData);
            _this.amountSpend = _this.approvedViewData.AmountToSpend.Name;
            _this.division = _this.approvedViewData.Division.Name;
            _this.bu = _this.approvedViewData.BusinessUnit.Name;
            _this.hos = _this.approvedViewData.AreaHeadOfSystem.Name;
            _this.requestorName = _this.approvedViewData.Requestor.Name;
            _this.requestorEmail = _this.approvedViewData.Requestor.Email;
            _this.requestorContNumber = _this.approvedViewData.Requestor.ContactNumber;
            _this.amiPartner = _this.approvedViewData.AMIPartnerEngaged.Name;
            _this.CIOEngaged = _this.approvedViewData.CIOContactEngaged.Name;
            _this.tacPresenter = _this.approvedViewData.TACPresenter.Name;
            _this.tagPresenter = _this.approvedViewData.TechnologyAcquisitionGatePresenter.Name;
            _this.gcmcPresenter = _this.approvedViewData.GCMCPresenter.Name;
            _this.costForumPresenter = _this.approvedViewData.CostForumPresenter.Name;
            _this.srcContactEng = _this.approvedViewData.SourcingContactEngaged.Name;
            _this.pricingTerms = _this.approvedViewData.PricingTerms.Name;
            _this.buyOnlineSupplier = _this.approvedViewData.BuyingOnlineSupplier.Name;
            _this.financeConEngaged = _this.approvedViewData.FinanceContactEngaged.Name;
            _this.projectName = _this.approvedViewData.Project.Name;
            _this.spendType = _this.approvedViewData.SpendType.Name;
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
