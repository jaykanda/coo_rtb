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
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require('@angular/router');
var forms_1 = require("@angular/forms");
var utils_navigation_component_1 = require('../rtb.components/utils-navigation.component');
var utils_side_nav_component_1 = require('../rtb.components/utils-side-nav.component');
var utils_no_of_rows_dropdown_component_1 = require('../rtb.components/utils-no-of-rows-dropdown.component');
var utils_filter_on_field_value_component_1 = require('../rtb.components/utils-filter-on-field-value.component');
var utils_data_service_1 = require("../rtb.services/utils-data.service");
var utils_no_of_rows_dropdown_service_1 = require("../rtb.services/utils-no-of-rows-dropdown.service");
var utils_filter_on_field_value_service_1 = require('../rtb.services/utils-filter-on-field-value.service');
var UtilsModule = (function () {
    function UtilsModule() {
    }
    UtilsModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule,
                forms_1.FormsModule,
            ],
            exports: [
                utils_navigation_component_1.NavigationComponent,
                utils_side_nav_component_1.SideNavComponent,
                utils_no_of_rows_dropdown_component_1.NoOfRowsDropDownComponent,
                utils_filter_on_field_value_component_1.FilterOnFieldValueComponent,
            ],
            declarations: [
                utils_navigation_component_1.NavigationComponent,
                utils_side_nav_component_1.SideNavComponent,
                utils_no_of_rows_dropdown_component_1.NoOfRowsDropDownComponent,
                utils_filter_on_field_value_component_1.FilterOnFieldValueComponent,
            ],
            providers: [
                utils_data_service_1.DataService,
                utils_no_of_rows_dropdown_service_1.NoOfRowsService,
                utils_filter_on_field_value_service_1.FilterOnFieldValueService,
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], UtilsModule);
    return UtilsModule;
}());
exports.UtilsModule = UtilsModule;
//# sourceMappingURL=utils.module.js.map