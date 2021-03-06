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
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
require('rxjs/add/observable/forkJoin');
var RTBGridDashBoardService = (function () {
    function RTBGridDashBoardService(http, myRESTServiceCall) {
        this.http = http;
        this.myRESTServiceCall = myRESTServiceCall;
        this.Url = 'api/dashboarddata';
        this.headers = new http_1.Headers({ 'content-type': 'application/json',
            'data-type': 'JSON',
            'Authorization': 'Basic Y2c6V2lwcm9AMTIzNDU2' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    RTBGridDashBoardService.prototype.getCurrentUserData = function () {
        return this.myRESTServiceCall.restServiceCall(this.Url, "get", "", "");
    };
    ;
    RTBGridDashBoardService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, rtb_common_service_1.RESTServiceCall])
    ], RTBGridDashBoardService);
    return RTBGridDashBoardService;
}());
exports.RTBGridDashBoardService = RTBGridDashBoardService;
//# sourceMappingURL=rtb-dashboard.service.js.map