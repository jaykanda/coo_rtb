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
var RTBApprovedViewSRDetailsService = (function () {
    function RTBApprovedViewSRDetailsService(http, myRESTServiceCall) {
        this.http = http;
        this.myRESTServiceCall = myRESTServiceCall;
        var headers = new http_1.Headers({ 'content-type': 'application/json', 'data-type': 'JSON' });
        var options = new http_1.RequestOptions({ headers: headers });
        this.Url = '/api/usersrdetails';
    }
    RTBApprovedViewSRDetailsService.prototype.getApprovedViewSRData = function (id) {
        console.log("view user spend details id ===> ", id);
        console.log("view user spend details id ===> ", this.Url + id);
        return this.myRESTServiceCall.restServiceCall(this.Url, "get", "", id);
    };
    ;
    RTBApprovedViewSRDetailsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, rtb_common_service_1.RESTServiceCall])
    ], RTBApprovedViewSRDetailsService);
    return RTBApprovedViewSRDetailsService;
}());
exports.RTBApprovedViewSRDetailsService = RTBApprovedViewSRDetailsService;
//# sourceMappingURL=rtb-approvedview.service.js.map