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
var NavigationComponent = (function () {
    function NavigationComponent(data) {
        this.data = data;
        this.showSideBarButtonClick = function () {
            this.showSideBar = !this.showSideBar;
            this.data.showSideBarButtonClick(this.showSideBar);
            // this.showSideBarChange.emit(this.showSideBar);
            console.log(this.showSideBar);
        };
        this.usermenu = [
            { icon: 'fa fa-user', display: '', link: '/#', submenu: [{ icon: 'fa fa-fw fa-user', display: 'Profile', link: '/profile' }, { icon: 'fa fa-fw fa-envelope', display: 'Inbox', link: '/inbox' }, { icon: 'fa fa-fw fa-gear', display: 'Settings', link: '/settings' }, { icon: 'fa fa-fw fa-power-off', display: 'Log Out', link: '/logout' },] },
        ];
        this.alertmenu = [
            { icon: 'fa fa-bell', display: '', link: '/#', submenu: [{ icon: 'label label-warning', display: 'Normal Alert', link: '/normalalert' }, { icon: 'label label-danger', display: 'Cretical Alert', link: '/creticalalert' },] },
        ];
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.showSideBarCurValue.subscribe(function (showSideBar) { return _this.showSideBar = showSideBar; });
    };
    NavigationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-navigation',
            templateUrl: '../rtb.templates/utils-navigation.component.html',
        }), 
        __metadata('design:paramtypes', [utils_data_service_1.DataService])
    ], NavigationComponent);
    return NavigationComponent;
}());
exports.NavigationComponent = NavigationComponent;
//# sourceMappingURL=utils-navigation.component.js.map