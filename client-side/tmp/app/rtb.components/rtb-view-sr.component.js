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
var rtb_viewsr_service_1 = require('../rtb.services/rtb-viewsr.service');
var RTBViewSRComponent = (function () {
    function RTBViewSRComponent(service) {
        this.service = service;
        this.userSRData = {};
        this.id = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1];
    }
    RTBViewSRComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("id from the front end fetched from the router ===>", this.id);
        this.service.getUserSpendDetails(this.id).subscribe(function (results) {
            _this.userSRData = results;
            _this.divisionName = _this.userSRData.Division.Name;
            _this.accExecName = _this.userSRData.AreaHeadOfSystem.Name;
            _this.srStatus = _this.userSRData.Status.id;
            console.log("this.userSRData ===>", _this.userSRData);
        });
    };
    RTBViewSRComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "rtb-view-sr",
            templateUrl: '../rtb.templates/rtb-view-sr.component.html',
        }), 
        __metadata('design:paramtypes', [rtb_viewsr_service_1.RTBViewSRDetailsService])
    ], RTBViewSRComponent);
    return RTBViewSRComponent;
}());
exports.RTBViewSRComponent = RTBViewSRComponent;
