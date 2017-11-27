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
var rtb_common_service_1 = require('../rtb.services/rtb-common.service');
var RTBNewRequestService = (function () {
    function RTBNewRequestService(myRESTServiceCall) {
        this.myRESTServiceCall = myRESTServiceCall;
        this.Url = '/api/newsrdata';
    }
    RTBNewRequestService.prototype.getAreaList = function () {
        //return this.myRESTServiceCall.restServiceCall(this.Url,"get","","");
        return [
            { "Id": "Infra", "Name": "Infra Project" },
            { "Id": "Ntw", "Name": "Network Project" }
        ];
    };
    RTBNewRequestService.prototype.getVatList = function () {
        //return this.myRESTServiceCall.restServiceCall(this.Url,"get","","");
        return [
            0, 10, 20
        ];
    };
    RTBNewRequestService.prototype.getCategoryList = function () {
        //return this.myRESTServiceCall.restServiceCall(this.Url,"get","","");
        return [
            { "Id": "SW", "Name": "Software" },
            { "Id": "HW", "Name": "Hardware" }
        ];
    };
    RTBNewRequestService.prototype.getAmountSpendList = function () {
        //return this.myRESTServiceCall.restServiceCall(this.Url,"get","","");
        return [
            { 'id': 'Under50K', 'Name': 'Under £50K' },
            { 'id': '50KTo250K', 'Name': '£50K to < £250K' },
            { 'id': '250KTo1M', 'Name': '£250K to < £1M' },
            { 'id': '1MTo2M', 'Name': '£1M to < £2M' },
            { 'id': '2MTo10M', 'Name': '£2M to < £10M' },
            { 'id': '10Mandabove', 'Name': '£10M and above' },
        ];
    };
    RTBNewRequestService.prototype.getBusinessUnitList = function (id) {
        //return this.myRESTServiceCall.restServiceCall(this.Url,"get","","");
        return [
            { "Id": "GroupIT", "Name": "Group IT" },
            { "Id": "bu1", "Name": "Business Unit1" },
            { "Id": "bu2", "Name": "Business Unit2" }
        ];
    };
    RTBNewRequestService.prototype.getDivisionList = function () {
        //return this.myRESTServiceCall.restServiceCall(this.Url,"get","","");
        return [
            { "Id": "GCA", "Name": "GCA" },
            { "Id": "Div1", "Name": "Division One" },
            { "Id": "Div2", "Name": "Division Two" },
            { "Id": "Div3", "Name": "Division Three" },
        ];
    };
    RTBNewRequestService.prototype.getSpendType = function () {
        //return this.myRESTServiceCall.restServiceCall(this.Url,"get","","");
        return [
            { 'Id': 'hw', 'Name': 'Hardware' },
            { 'Id': 'nt', 'Name': 'Networks' },
            { 'Id': 'sw', 'Name': 'Software' },
            { 'Id': 'itrs', 'Name': 'IT services / Resource Augmentation' }
        ];
    };
    ;
    RTBNewRequestService.prototype.getRTBSpendRequest = function (id) {
        //return this.myRESTServiceCall.restServiceCall(this.Url,"get","",id);
        return [{
                "RequestID": "FK1GHK",
                "RequestTitle": "Initiative1",
                "AmountToSpend": { 'id': '250KTo1M', 'Name': '£250K to < £1M' },
                "Status": {
                    "id": "",
                    "url": ""
                },
                "Division": { "Id": "GCA", "Name": "GCA" },
                "BusinessUnit": { "Id": "GroupIT", "Name": "Group IT" },
                "HeadOfSystem": { "Id": "Dvd", "Name": "David Smith" },
                "Requestor": { "Id": "Julie.Smith", "Name": "Julie Smith", "Email": "Julie.Smith@lloydsbanking.com", "ContactNumber": "8987654567" },
                "AMIPartnerEngaged": { "Id": "Chandra.Shekhar", "Name": "Chandra Shekhar" },
                "CIOContactEngaged": { "Id": "Prasanta.Kumar", "Name": "Prasanta.Routh@wipro.com" },
                "TechnologyAcquisitionGatePresenter": { "Id": "Santosh.Kumar", "Name": "Santosh Kumar" },
                "TACPresenter": { "Id": "Goutam.Kumar", "Name": "Goutam Kumar" },
                "GCMCPresenter": { "Id": "Faiz.Mohamad", "Name": "Faiz Mohamad" },
                "CostForumPresenter": { "Id": "Koti Kumar", "Name": "Koti Kumar" },
                "ItemDetails": [
                    {
                        "Description": "Software Request",
                        "Category": { "Id": "SW", "Name": "Software" },
                        "StartDate": "01/01/2017",
                        "EndDate": "12/31/2017",
                        "Costs": 20000,
                        "Vat": null
                    }
                ],
                "Vat": 20,
                "TotalVatAmount": 4000,
                "TotalSpendAmount": 24000,
                "ItemQuestion1": "Answer1....",
                "ItemQuestion2": "Answe2r....",
                "ItemQuestion3": "Answer3....",
                "ItemQuestion4": "Answer4....",
                "ItemQuestion5": "Answer5....",
                "SourcingContactEngaged": { "Id": "Sourcing1", "Name": "Sourcing1" },
                "SpendType": "Software",
                "PricingTerms": { "Id": "FPC", "Name": "Fixed Price Contract" },
                "BuyingOnlineSupplier": { "Id": "Microsoft", "Name": "Microsoft" },
                "Manufacturer": "N/A",
                "AMC": "N/A",
                "RPIQuestion": "No",
                "LBGQuestion": "No",
                "TierAQuestion": "N/A",
                "FinanceContactEngaged": { "Id": "F780026", "Name": "FinanceContact1" },
                "Project": { "Id": "p1", "Name": "LBG COO-Vanilla" },
                "ProgrammeTitle": "LRM",
                "BudgetType": "Run",
                "BudgetSubtype": "RTB Regulatory",
                "CostCentre": 827394,
                "PRN": "TL728",
                "SpendGLCode": 827394,
                "WBSValidationCheck": "C/OG2837-P2-JF",
                "IsDivestmentProgramme": "No",
                "Area": { "Id": "Area1", "Name": "Area1" },
                "AreaHeadOfSystem": { "Id": "Ranjan.Kumar", "Name": "Ranjan Kumar" },
                "FinancialInformation": [
                    {
                        "Year": 2017,
                        "Budget": 19000,
                        "Forecast": 21000,
                        "Threat": 1000,
                        "Opportunity": 500
                    }
                ],
                "FinancialSummary": "Summary.....",
                "FinanceQuestion1": "Answer1...",
                "FinanceQuestion2": "Answer2...",
                "FinanceQuestion3": "Answer3...",
                "FinanceQuestion4": "Answer4...",
                "FinanceQuestion5": "Answer5..."
            }];
    };
    RTBNewRequestService.prototype.getEmptyRTBSpendRequest = function () {
        return [{
                "RequestID": "",
                "RequestTitle": "",
                "AmountToSpend": { "Id": "", "Name": "" },
                "Status": {
                    "id": "",
                    "url": ""
                },
                "Division": { "Id": "", "Name": "" },
                "BusinessUnit": { "Id": "", "Name": "" },
                "HeadOfSystem": { "Id": "", "Name": "" },
                "Requestor": { "Id": "", "Name": "", "Email": "", "ContactNumber": "" },
                "AMIPartnerEngaged": { "Id": "", "Name": "" },
                "CIOContactEngaged": { "Id": "", "Name": "" },
                "TechnologyAcquisitionGatePresenter": { "Id": "", "Name": "", },
                "TACPresenter": { "Id": "", "Name": "", },
                "GCMCPresenter": { "Id": "", "Name": "" },
                "CostForumPresenter": { "Id": "", "Name": "" },
                "ItemDetails": [
                    {
                        "Description": "",
                        "Category": { "Id": "", "Name": "" },
                        "StartDate": "",
                        "EndDate": "",
                        "Costs": null,
                        "Vat": null
                    }
                ],
                "Vat": null,
                "TotalVatAmount": null,
                "TotalSpendAmount": null,
                "ItemQuestion1": "",
                "ItemQuestion2": "",
                "ItemQuestion3": "",
                "ItemQuestion4": "",
                "ItemQuestion5": "",
                "SourcingContactEngaged": { "Id": "", "Name": "" },
                "SpendType": "",
                "PricingTerms": { "Id": "", "Name": "" },
                "BuyingOnlineSupplier": { "Id": "", "Name": "" },
                "Manufacturer": "",
                "AMC": "",
                "RPIQuestion": "",
                "LBGQuestion": "",
                "TierAQuestion": "",
                "FinanceContactEngaged": { "Id": "", "Name": "" },
                "Project": { "Id": "", "Name": "" },
                "ProgrammeTitle": "",
                "BudgetType": "",
                "BudgetSubtype": "",
                "CostCentre": null,
                "PRN": "",
                "SpendGLCode": null,
                "WBSValidationCheck": "",
                "IsDivestmentProgramme": "",
                "Area": { "Id": "", "Name": "" },
                "AreaHeadOfSystem": { "Id": "", "Name": "" },
                "FinancialInformation": [
                    {
                        "Year": null,
                        "Budget": null,
                        "Forecast": null,
                        "Threat": null,
                        "Opportunity": null
                    }
                ],
                "FinancialSummary": "",
                "FinanceQuestion1": "",
                "FinanceQuestion2": "",
                "FinanceQuestion3": "",
                "FinanceQuestion4": "",
                "FinanceQuestion5": ""
            }];
    };
    //private ChiragURL="https://hub-app-sqlsvr2:8889/SmartObjectServices/rest/HUB/SmartObjects/COOIT.HUB.Request.SMO/InsertRequestDetails";
    RTBNewRequestService.prototype.createRTBRequest = function (data) {
        return this.myRESTServiceCall.restServiceCall(this.Url, "post", data, "");
    };
    RTBNewRequestService.prototype.readRTBRequest = function (id) {
        return this.myRESTServiceCall.restServiceCall(this.Url, "get", "", id);
    };
    RTBNewRequestService.prototype.updateRTBRequest = function (data, id) {
        return this.myRESTServiceCall.restServiceCall(this.Url, "post", data, id);
    };
    RTBNewRequestService.prototype.deleteRTBRequest = function (id) {
        return this.myRESTServiceCall.restServiceCall(this.Url, "delete", "", id);
    };
    RTBNewRequestService.prototype.discardRTBRequest = function (id) {
        return this.myRESTServiceCall.restServiceCall(this.Url, "delete", "", id);
    };
    RTBNewRequestService.prototype.modifyRTBRequest = function (id) {
        return this.myRESTServiceCall.restServiceCall(this.Url, "post", "", id);
    };
    RTBNewRequestService.prototype.saveRTBRequestAsDraft = function (id) {
        return this.myRESTServiceCall.restServiceCall(this.Url, "post", "", id);
    };
    RTBNewRequestService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [rtb_common_service_1.RESTServiceCall])
    ], RTBNewRequestService);
    return RTBNewRequestService;
}());
exports.RTBNewRequestService = RTBNewRequestService;
//# sourceMappingURL=rtb-new-sr.service.js.map