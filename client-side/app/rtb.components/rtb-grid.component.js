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
var rtb_grid_service_1 = require('../rtb.services/rtb-grid.service');
var RTBGridComponent = (function () {
    function RTBGridComponent(service) {
        this.service = service;
        this.searchOn = '';
        this.pageHeading = 'Spending Request';
        this.desc_flag = false;
        this.s_runrequest = {};
        this.paginationValues = {};
        this.spendRequestFilter = 'All';
        this.engagement = false;
        this.actionButtons = false;
        this.showActionButtons = function () {
            if (this.actionButtons) {
                this.actionButtons = false;
            }
            else {
                this.actionButtons = true;
            }
        };
    }
    RTBGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (window.location.pathname.indexOf('engagement') !== -1) {
            this.engagement = true;
        }
        if (window.location.pathname.indexOf('engagement') === -1) {
            this.engagement = false;
        }
        this.service.getGridviewAlldata().subscribe(function (results) {
            _this.runrequests = results;
            console.log("grid view all data ===> ", _this.runrequests);
            _this.keys = Object.keys(_this.runrequests);
            //this.SupplierName = this.runrequests.BuyingOnlineSupplier;
        });
        this.paginationValues.rowCount = 5;
        this.paginationValues.rowDisplayed = 5;
        this.paginationValues.currentStartingRow = 0;
        document.getElementById('btnPrev').classList.add('disabled');
        this.runrequests = this.service.getAll(this.paginationValues.rowCount, this.paginationValues.currentStartingRow);
    };
    RTBGridComponent.prototype.onSelected = function (selectedValue) {
        console.log("test1");
        this.paginationValues.rowCount = selectedValue;
        // this.runrequests = this.service.getAll(selectedValue,this.paginationValues.currentStartingRow);
        this.runrequests = this.service.getStatus('RunStatus', this.spendRequestFilter, this.paginationValues.rowCount, this.paginationValues.currentStartingRow);
    };
    RTBGridComponent.prototype.onSpendRequestFilterSelected = function (selectedValue) {
        this.spendRequestFilter = selectedValue;
        // console.log(this.paginationValues.rowCount + ' ' + this.paginationValues.currentStartingRow);
        if (this.paginationValues.currentStartingRow < 0)
            this.paginationValues.currentStartingRow = 0;
        // console.log(this.paginationValues.rowCount + ' ' + this.paginationValues.currentStartingRow);
        this.runrequests = this.service.getStatus('RunStatus', selectedValue, this.paginationValues.rowCount, this.paginationValues.currentStartingRow);
        if (this.runrequests.length == 0) {
            this.paginationValues.currentStartingRow = 0;
            this.runrequests = this.service.getStatus('RunStatus', selectedValue, this.paginationValues.rowCount, this.paginationValues.currentStartingRow);
        }
        // this.paginationValues.currentStartingRow = this.paginationValues.currentStartingRow + this.paginationValues.rowCount;
    };
    RTBGridComponent.prototype.getGridValues = function (paginationStep) {
        console.log(paginationStep);
        if (paginationStep == "Next") {
            console.log('From next RowCount : ' + this.paginationValues.rowCount);
            console.log('From next RowCount Current Starting Row : ' + this.paginationValues.currentStartingRow);
            this.startRowCount = +this.paginationValues.rowCount;
            this.startRowCount = this.startRowCount + this.paginationValues.currentStartingRow;
            console.log('From Next in Component : ' + this.startRowCount);
            this.runrequests = this.service.getStatus('RunStatus', this.spendRequestFilter, this.paginationValues.rowCount, this.startRowCount);
            if (this.runrequests == null || this.runrequests.length == 0) {
                document.getElementById('btnNext').classList.add('disabled');
            }
            if (document.getElementById('btnPrev').classList.contains('disabled')) {
                document.getElementById('btnPrev').classList.remove('disabled');
                console.log('previous button enabled from next');
                this.paginationValues.currentStartingRow = 0;
            }
            // this.paginationValues.currentStartingRow = +this.paginationValues.currentStartingRow ;
            this.paginationValues.currentStartingRow += this.paginationValues.rowCount;
        }
        else {
            this.runrequests = this.service.getStatus('RunStatus', this.spendRequestFilter, this.paginationValues.rowCount, this.paginationValues.currentStartingRow - this.paginationValues.rowCount);
            console.log('test from previous');
            console.log('Current starting row : ' + this.paginationValues.currentStartingRow);
            console.log('Current paginationValues row : ' + this.paginationValues.rowCount);
            if (this.runrequests == null || this.runrequests.length == 0) {
                document.getElementById('btnPrev').classList.add('disabled');
            }
            if (document.getElementById('btnNext').classList.contains('disabled')) {
                document.getElementById('btnNext').classList.remove('disabled');
            }
            this.paginationValues.currentStartingRow = this.paginationValues.currentStartingRow - this.paginationValues.rowCount;
            if (this.paginationValues.currentStartingRow <= 0) {
                document.getElementById('btnPrev').classList.add('disabled');
                this.paginationValues.currentStartingRow = 0;
            }
        }
    };
    RTBGridComponent.prototype.sortGeneric = function (fieldName) {
        var fieldList = ["RunInitiativeName", "RunID", "RunDivision", "RunStatus", "RunCosts"];
        if (!this.desc_flag) {
            this.runrequests.sort(function (a, b) {
                for (var field in fieldList) {
                    var currFieldClass = document.getElementById(fieldList[field]).classList;
                    if (currFieldClass.contains('fa-sort-desc'))
                        currFieldClass.remove('fa-sort-desc');
                    if (!currFieldClass.contains('fa-sort'))
                        currFieldClass.add('fa-sort');
                }
                document.getElementById(fieldName).classList.add('fa-sort-asc');
                if (a[fieldName] < b[fieldName]) {
                    return -1;
                }
                else if (a[fieldName] > b[fieldName]) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            this.desc_flag = true;
        }
        else {
            this.runrequests.sort(function (a, b) {
                for (var field in fieldList) {
                    var currFieldClass = document.getElementById(fieldList[field]).classList;
                    if (currFieldClass.contains('fa-sort-asc'))
                        currFieldClass.remove('fa-sort-asc');
                    if (!currFieldClass.contains('fa-sort'))
                        currFieldClass.add('fa-sort');
                }
                document.getElementById(fieldName).classList.add('fa-sort-desc');
                if (a[fieldName] > b[fieldName]) {
                    return -1;
                }
                else if (a[fieldName] < b[fieldName]) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            this.desc_flag = false;
        }
        return this.runrequests;
    };
    RTBGridComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rtb-grid-component',
            templateUrl: '../rtb.templates/rtb-grid.component.html'
        }), 
        __metadata('design:paramtypes', [rtb_grid_service_1.RTBGridService])
    ], RTBGridComponent);
    return RTBGridComponent;
}());
exports.RTBGridComponent = RTBGridComponent;
//# sourceMappingURL=rtb-grid.component.js.map