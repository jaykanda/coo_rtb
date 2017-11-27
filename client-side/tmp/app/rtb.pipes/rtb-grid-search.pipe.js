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
var RTBGridSearchPipe = (function () {
    function RTBGridSearchPipe() {
    }
    RTBGridSearchPipe.prototype.contains = function (main, searchOn) {
        console.log("main " + main + " term " + searchOn);
        return main.toLowerCase().indexOf(searchOn.toLowerCase()) >= 0;
    };
    RTBGridSearchPipe.prototype.searchEverything = function (spendingrequest, searchOn) {
        return this.contains(spendingrequest.RunInitiativeName, searchOn) ||
            this.contains(spendingrequest.RunID, searchOn) ||
            this.contains(spendingrequest.RunDivision, searchOn) ||
            this.contains(spendingrequest.RunAcctExec, searchOn) ||
            this.contains(spendingrequest.RunStatus, searchOn);
    };
    RTBGridSearchPipe.prototype.transform = function (value) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var spendingrequests = value;
        var searchOn = '';
        if (args.length >= 1)
            searchOn = args[0];
        console.log("working....");
        if (searchOn == '')
            return spendingrequests;
        else
            return spendingrequests.filter(function (spendingrequest) { return _this.searchEverything(spendingrequest, searchOn); });
    };
    RTBGridSearchPipe = __decorate([
        core_1.Pipe({
            name: 'RTBGridSearch'
        }), 
        __metadata('design:paramtypes', [])
    ], RTBGridSearchPipe);
    return RTBGridSearchPipe;
}());
exports.RTBGridSearchPipe = RTBGridSearchPipe;
