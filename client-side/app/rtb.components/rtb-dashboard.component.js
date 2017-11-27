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
var rtb_dashboard_service_1 = require('../rtb.services/rtb-dashboard.service');
var RTBDashboardComponent = (function () {
    function RTBDashboardComponent(service) {
        this.service = service;
        this.pageHeading = 'Dashboard';
    }
    RTBDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getCurrentUserData().subscribe(function (results) {
            _this.runrequests = results;
        });
    };
    RTBDashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "rtb-dashboard",
            templateUrl: '../rtb.templates/rtb-dashboard.component.html'
        }), 
        __metadata('design:paramtypes', [rtb_dashboard_service_1.RTBGridDashBoardService])
    ], RTBDashboardComponent);
    return RTBDashboardComponent;
}());
exports.RTBDashboardComponent = RTBDashboardComponent;
//# sourceMappingURL=rtb-dashboard.component.js.map