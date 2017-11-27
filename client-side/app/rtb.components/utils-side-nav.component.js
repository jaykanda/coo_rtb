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
var utils_data_service_1 = require("../rtb.services/utils-data.service");
var SideNavComponent = (function () {
    function SideNavComponent(data) {
        this.data = data;
        this.sidemenu = [
            { icon: 'fa fa-fw fa-dashboard', display: 'Dashboard', link: '/dashboard' },
            { icon: 'fa fa-fw fa-users', display: 'Spending Request', link: '/spendingrequests' },
        ];
    }
    SideNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.showSideBarCurValue.subscribe(function (showSideBar) { return _this.showSideBar = showSideBar; });
    };
    SideNavComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-side-nav',
            templateUrl: '../rtb.templates/utils-side-nav.component.html',
        }), 
        __metadata('design:paramtypes', [utils_data_service_1.DataService])
    ], SideNavComponent);
    return SideNavComponent;
}());
exports.SideNavComponent = SideNavComponent;
//# sourceMappingURL=utils-side-nav.component.js.map