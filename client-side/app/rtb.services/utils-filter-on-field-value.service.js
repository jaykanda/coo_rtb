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
require('rxjs/add/operator/map');
var dropDownValues = [
    { id: 1, value: 'All' },
    { id: 2, value: 'Renewal' },
    { id: 3, value: 'Sent For Rework' },
    { id: 4, value: 'Awaiting Approval' },
    { id: 5, value: 'Approved' },
    { id: 6, value: 'PreApproved' },
];
var FilterOnFieldValueService = (function () {
    function FilterOnFieldValueService(http) {
        this.http = http;
    }
    FilterOnFieldValueService.prototype.getAll = function () {
        return dropDownValues;
    };
    FilterOnFieldValueService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FilterOnFieldValueService);
    return FilterOnFieldValueService;
}());
exports.FilterOnFieldValueService = FilterOnFieldValueService;
//# sourceMappingURL=utils-filter-on-field-value.service.js.map