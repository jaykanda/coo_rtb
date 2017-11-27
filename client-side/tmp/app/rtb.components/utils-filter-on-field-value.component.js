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
var utils_filter_on_field_value_service_1 = require('../rtb.services/utils-filter-on-field-value.service');
var FilterOnFieldValueComponent = (function () {
    function FilterOnFieldValueComponent(service) {
        this.service = service;
        this.onSpendRequestFilterSelected = new core_1.EventEmitter();
    }
    Object.defineProperty(FilterOnFieldValueComponent.prototype, "selectedValue", {
        get: function () { return this._selectedValue; },
        set: function (selectedValue) {
            this._selectedValue = selectedValue;
            this.onSelectedSpendRequestStatus();
        },
        enumerable: true,
        configurable: true
    });
    ;
    FilterOnFieldValueComponent.prototype.ngOnInit = function () {
        this.spendRequestStatus = this.service.getAll();
        this.selectedValue = this.spendRequestStatus[0].value;
    };
    FilterOnFieldValueComponent.prototype.onSelectedSpendRequestStatus = function () {
        this.onSpendRequestFilterSelected.emit(this.selectedValue);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FilterOnFieldValueComponent.prototype, "onSpendRequestFilterSelected", void 0);
    FilterOnFieldValueComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'filter-on-field-value-component',
            templateUrl: '../rtb.templates/utils-filter-on-field-value.component.html'
        }), 
        __metadata('design:paramtypes', [utils_filter_on_field_value_service_1.FilterOnFieldValueService])
    ], FilterOnFieldValueComponent);
    return FilterOnFieldValueComponent;
}());
exports.FilterOnFieldValueComponent = FilterOnFieldValueComponent;
