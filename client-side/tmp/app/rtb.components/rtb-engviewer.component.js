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
var core_1 = require("@angular/core");
var rtb_engageview_service_1 = require("../rtb.services/rtb-engageview.service");
var RTBEngageviewSRComponent = (function () {
    function RTBEngageviewSRComponent(service) {
        this.service = service;
        this.engagementViewData = {};
    }
    RTBEngageviewSRComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1];
        console.log("id from the front end fetched from the router ===>", this.id);
        this.service.getEngagementViewSRData(this.id).subscribe(function (results) {
            _this.engagementViewData = results;
            _this.keys = Object.keys(_this.engagementViewData);
            console.log("this.engagementViewData ===>", _this.engagementViewData);
            _this.amountSpend = _this.engagementViewData.AmountToSpend.Name;
            _this.division = _this.engagementViewData.Division.Name;
            _this.bu = _this.engagementViewData.BusinessUnit.Name;
            _this.hos = _this.engagementViewData.AreaHeadOfSystem.Name;
            _this.requestorName = _this.engagementViewData.Requestor.Name;
            _this.requestorEmail = _this.engagementViewData.Requestor.Email;
            _this.requestorContNumber = _this.engagementViewData.Requestor.ContactNumber;
            _this.amiPartner = _this.engagementViewData.AMIPartnerEngaged.Name;
            _this.CIOEngaged = _this.engagementViewData.CIOContactEngaged.Name;
            _this.tacPresenter = _this.engagementViewData.TACPresenter.Name;
            _this.tagPresenter = _this.engagementViewData.TechnologyAcquisitionGatePresenter.Name;
            _this.gcmcPresenter = _this.engagementViewData.GCMCPresenter.Name;
            _this.costForumPresenter = _this.engagementViewData.CostForumPresenter.Name;
            _this.srcContactEng = _this.engagementViewData.SourcingContactEngaged.Name;
            _this.pricingTerms = _this.engagementViewData.PricingTerms.Name;
            _this.buyOnlineSupplier = _this.engagementViewData.BuyingOnlineSupplier.Name;
            _this.financeConEngaged = _this.engagementViewData.FinanceContactEngaged.Name;
            _this.projectName = _this.engagementViewData.Project.Name;
            _this.spendType = _this.engagementViewData.SpendType.Name;
        });
    };
    RTBEngageviewSRComponent.prototype.tableauOn = function () {
        window.open('http://52.236.161.147/views/PoC/Graph?:embed=y&:showAppBanner=false&:showShareOptions=true&:display_count=no&:showVizHome=no&:tabs=no&:toolbar=no#19', 'blank');
    };
    RTBEngageviewSRComponent.prototype.approveRequest = function () {
        this.id = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1];
        this.service.sendApproval(this.id);
    };
    RTBEngageviewSRComponent.prototype.exportPDF = function () {
        console.log("export PDF data ===>", this.engagementViewData);
        this.id = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1];
        this.service.exportPDFdata(this.id, this.engagementViewData);
    };
    RTBEngageviewSRComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "rtb-engview",
            templateUrl: '../rtb.templates/rtb-engview-sr.component.html'
        }), 
        __metadata('design:paramtypes', [rtb_engageview_service_1.RTBEngageviewService])
    ], RTBEngageviewSRComponent);
    return RTBEngageviewSRComponent;
}());
exports.RTBEngageviewSRComponent = RTBEngageviewSRComponent;
