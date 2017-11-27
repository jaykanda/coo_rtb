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
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/catch';
require('rxjs/add/operator/map');
var RUNREQUESTS = [
    { RunInitiativeName: 'Initiative #1', RunID: 'F780026', RunDivision: 'Apple', RunAcctExec: 'Jenifer Smith', RunStatus: 'Sent for rework', RunCosts: '56000', ActionName: "Resolve", ActionURL: '/spendingrequest/resolve' },
    { RunInitiativeName: 'Initiative #2', RunID: 'F928654', RunDivision: 'Dell', RunAcctExec: 'Jhon Betty', RunStatus: 'Awaiting approval', RunCosts: '14000', ActionName: "", ActionURL: '' },
    { RunInitiativeName: 'Initiative #2', RunID: 'F928654', RunDivision: 'Dell', RunAcctExec: 'Jhon Betty', RunStatus: 'Renew', RunCosts: '14000', ActionName: "Renew", ActionURL: '/spendingrequest/renew' },
    { RunInitiativeName: 'Initiative #3', RunID: 'F587467', RunDivision: 'Google', RunAcctExec: 'Jenifer Smith', RunStatus: 'Preapproved', RunCosts: '186000', ActionName: "Start GCMC", ActionURL: '/spendingrequest/pregcmc' },
    { RunInitiativeName: 'Initiative #4', RunID: 'F839402', RunDivision: 'IBM', RunAcctExec: 'Jhon Betty', RunStatus: 'Approved', RunCosts: '64000', ActionName: "View", ActionURL: '/spendingrequest/veiwapproved' },
    { RunInitiativeName: 'Initiative #1', RunID: 'F780026', RunDivision: 'Apple1', RunAcctExec: 'Jenifer Smith', RunStatus: 'Sent for rework', RunCosts: '56000', ActionName: "Resolve", ActionURL: '/spendingrequest/resolve' },
    { RunInitiativeName: 'Initiative #2', RunID: 'F928654', RunDivision: 'Dell1', RunAcctExec: 'Jhon Betty', RunStatus: 'Awaiting approval', RunCosts: '14000', ActionName: "", ActionURL: '' },
    { RunInitiativeName: 'Initiative #3', RunID: 'F587467', RunDivision: 'Google1', RunAcctExec: 'Jenifer Smith', RunStatus: 'Preapproved', RunCosts: '186000', ActionName: "Start GCMC", ActionURL: '/spendingrequest/pregcmc' },
    { RunInitiativeName: 'Initiative #4', RunID: 'F839402', RunDivision: 'IBM1', RunAcctExec: 'Jhon Betty', RunStatus: 'Approved', RunCosts: '64000', ActionName: "View", ActionURL: '/spendingrequest/veiwapproved' },
    { RunInitiativeName: 'Initiative #1', RunID: 'F780026', RunDivision: 'Apple2', RunAcctExec: 'Jenifer Smith', RunStatus: 'Sent for rework', RunCosts: '56000', ActionName: "Resolve", ActionURL: '/spendingrequest/resolve' },
    { RunInitiativeName: 'Initiative #2', RunID: 'F928654', RunDivision: 'Dell2', RunAcctExec: 'Jhon Betty', RunStatus: 'Awaiting approval', RunCosts: '14000', ActionName: "", ActionURL: '' },
    { RunInitiativeName: 'Initiative #3', RunID: 'F587467', RunDivision: 'Google2', RunAcctExec: 'Jenifer Smith', RunStatus: 'Preapproved', RunCosts: '186000', ActionName: "Start GCMC", ActionURL: '/spendingrequest/pregcmc' },
    { RunInitiativeName: 'Initiative #4', RunID: 'F839402', RunDivision: 'IBM2', RunAcctExec: 'Jhon Betty', RunStatus: 'Approved', RunCosts: '64000', ActionName: "View", ActionURL: '/spendingrequest/veiwapproved' }
];
var RTBGridService = (function () {
    function RTBGridService(http, myRESTServiceCall) {
        this.http = http;
        this.myRESTServiceCall = myRESTServiceCall;
        this.total = 0;
        this.countLocal = 0;
        this.Url = "/api/gridsrdata";
    }
    RTBGridService.prototype.getStatus = function (fieldName, fieldValue, count, start) {
        if (fieldValue != 'All')
            return RUNREQUESTS.filter(function (x) { return x[fieldName].trim().toUpperCase() === fieldValue.trim().toUpperCase(); })
                .slice(start, Number(start) + Number(count));
        else {
            this.total = 0;
            // this.count = 
            console.log('From RunRequest Service ' + start);
            console.log('From RunRequest Service Count ' + count);
            if (start < 0)
                start = 0;
            console.log('From RunRequest Service total start ' + this.total);
            this.total += Number(this.total) + Number(start);
            console.log('From RunRequest Service total intermediate ' + this.total);
            count = parseInt(count.toString(), 0);
            this.total = Number(this.total) + Number(count);
            console.log('From RunRequest Service total ' + this.total);
            return RUNREQUESTS.slice(start, Number(count) + Number(start));
        }
    };
    RTBGridService.prototype.getAll = function (count, start) {
        return RUNREQUESTS.slice(start, start + count);
    };
    RTBGridService.prototype.getGridviewAlldata = function () {
        return this.myRESTServiceCall.restServiceCall(this.Url, "get", "", "");
    };
    ;
    RTBGridService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, rtb_common_service_1.RESTServiceCall])
    ], RTBGridService);
    return RTBGridService;
}());
exports.RTBGridService = RTBGridService;
