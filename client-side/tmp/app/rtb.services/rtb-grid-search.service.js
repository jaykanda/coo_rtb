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
var RTBGridSearchService = (function () {
    function RTBGridSearchService(http) {
        this.http = http;
    }
    RTBGridSearchService.prototype.contains = function (main, searchOn) {
        var erorrMsg;
        var returnMsg;
        try {
            returnMsg = main.toLowerCase().indexOf(searchOn.toLowerCase()) >= 0;
        }
        catch (error) {
            returnMsg = main.toString().indexOf(searchOn.toString()) >= 0;
        }
        return returnMsg;
    };
    RTBGridSearchService.prototype.searchEverything = function (spendingrequest, searchOn) {
        var _this = this;
        var prop = Object.getOwnPropertyNames(spendingrequest);
        var returnArr;
        prop.forEach(function (element) {
            returnArr = returnArr || _this.contains(spendingrequest[element], searchOn);
        });
        return returnArr;
    };
    RTBGridSearchService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RTBGridSearchService);
    return RTBGridSearchService;
}());
exports.RTBGridSearchService = RTBGridSearchService;
