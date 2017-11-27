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
var http_1 = require('@angular/http');
var rtb_common_service_1 = require('../rtb.services/rtb-common.service');
var RTBEngageviewService = (function () {
    function RTBEngageviewService(http, myRESTServiceCall) {
        this.http = http;
        this.myRESTServiceCall = myRESTServiceCall;
        this.approvalDetails = {};
        var headers = new http_1.Headers({ 'content-type': 'application/json', 'data-type': 'JSON' });
        var options = new http_1.RequestOptions({ headers: headers });
        this.Url = '/api/usersrdetails';
        this.pdfService = '/api/generatePDF';
        this.approvalStatusUrl = '/api/approvedsrstatus';
    }
    RTBEngageviewService.prototype.getEngagementViewSRData = function (id) {
        console.log("view user spend details id ===> ", id);
        console.log("view user spend details id ===> ", this.Url + id);
        return this.myRESTServiceCall.restServiceCall(this.Url, "get", "", id);
    };
    ;
    RTBEngageviewService.prototype.sendApproval = function (id) {
        this.approvalDetails = {
            id: id,
            status: "Approved"
        };
        return this.myRESTServiceCall.restServiceCall(this.approvalStatusUrl, "post", this.approvalDetails, id);
    };
    RTBEngageviewService.prototype.exportPDFdata = function (id, data) {
        return this.myRESTServiceCall.restServiceCall(this.pdfService, "post", data, id);
    };
    RTBEngageviewService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, rtb_common_service_1.RESTServiceCall])
    ], RTBEngageviewService);
    return RTBEngageviewService;
}());
exports.RTBEngageviewService = RTBEngageviewService;
