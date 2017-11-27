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
var forms_1 = require('@angular/forms');
var rtb_new_sr_service_1 = require("../rtb.services/rtb-new-sr.service");
var rtb_erf_tooltip_service_1 = require('../rtb.services/rtb-erf-tooltip.service');
var RTBNewSRComponent = (function () {
    function RTBNewSRComponent(_fb, myRTBNewRequestService, toolTipservice) {
        this._fb = _fb;
        this.myRTBNewRequestService = myRTBNewRequestService;
        this.toolTipservice = toolTipservice;
        this.submitted = true;
        this.events = [];
        this.counter = 0;
        this.rows = [];
        this.fincounter = 0;
        this.finrows = [];
        this.divisionItems = {};
        this.filteredStr = [];
        this.Results = [];
        this.emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
        this.passRegex = '^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$';
        this.specialChar = '^[a-zA-Z][a-zA-Z0-9]*(?:\s+[a-zA-Z][a-zA-Z0-9]+)?$';
        this.numberOnly = '^[0-9]*$';
        // this.validatenewRTBForm();
    }
    RTBNewSRComponent.prototype.ngOnInit = function () {
        this.VatList = this.myRTBNewRequestService.getVatList();
        this.CategoryList = this.myRTBNewRequestService.getCategoryList();
        this.AmountSpendList = this.myRTBNewRequestService.getAmountSpendList();
        this.DivisionList = this.myRTBNewRequestService.getDivisionList();
        this.RTBSpendRequest = this.myRTBNewRequestService.getEmptyRTBSpendRequest()[0];
        this.AreaList = this.myRTBNewRequestService.getAreaList();
        this.SpendType = this.myRTBNewRequestService.getSpendType();
        this.newSRForm = this._fb.group({
            reqTitle: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern(this.specialChar)])],
            amountSpend: ['', forms_1.Validators.required],
            cioDivision: ['', forms_1.Validators.required],
            cioBU: ['', forms_1.Validators.required],
            headSysFunc: [{ disabled: true }, forms_1.Validators.required],
            reqName: ['', [forms_1.Validators.required, forms_1.Validators.pattern(this.specialChar)]],
            reqEmail: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern(this.emailRegex)])],
            reqContact: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(11), forms_1.Validators.pattern(this.numberOnly)])],
            amiPartEng: ['', forms_1.Validators.required],
            cioContact: ['', forms_1.Validators.required],
            techAcquiGate: ['', forms_1.Validators.required],
            techAcquiGateEmail: ['', forms_1.Validators.required],
            tacPresenter: ['', forms_1.Validators.required],
            itemquestion1: [''],
            itemquestion2: [''],
            itemquestion3: [''],
            itemquestion4: [''],
            itemquestion5: [''],
            FinancialSummary: [''],
            FinanceQuestion1: [''],
            FinanceQuestion2: [''],
            FinanceQuestion3: [''],
            FinanceQuestion4: [''],
            FinanceQuestion5: [''],
            costForum: ['', forms_1.Validators.required],
            gcmc: ['', forms_1.Validators.required],
            sourcingEng: ['', forms_1.Validators.required],
            sourcespendType: ['', forms_1.Validators.required],
            pricingTerms: ['', forms_1.Validators.required],
            manufacturer: ['', forms_1.Validators.required],
            annuMaint: ['', forms_1.Validators.required],
            rpiRadio: ['', forms_1.Validators.required],
            buyingOnline: ['', forms_1.Validators.required],
            thirdPartyRadio: ['', forms_1.Validators.required],
            necessServiceRadio: ['', forms_1.Validators.required],
            financeContact: ['', forms_1.Validators.required],
            projectName: ['', forms_1.Validators.required],
            programTitle: ['', forms_1.Validators.required],
            budgetType: ['', forms_1.Validators.required],
            budgetSubType: ['', forms_1.Validators.required],
            costCentre: ['', forms_1.Validators.required],
            prn: ['', forms_1.Validators.required],
            spendGL: ['', forms_1.Validators.required],
            wbsvalidation: ['', forms_1.Validators.required],
            headSys: ['', forms_1.Validators.required],
            contractDivest: ['', forms_1.Validators.required],
            area: ['', forms_1.Validators.required],
            headsys: [{ disabled: true }, forms_1.Validators.required],
            budgetThreat: ['', forms_1.Validators.required],
            vat: ['', forms_1.Validators.required],
            dynstakeHolderFields: this._fb.array([
                this.dynStakeHolderSection(),
            ]),
            dynFinanceInfoFields: this._fb.array([
                this.dynFinanceInfoSection(),
            ])
        });
        this.newRequestFlag = true;
    };
    RTBNewSRComponent.prototype.calTotalAmount = function () {
        var totalCost = 0;
        for (var _i = 0, _a = this.RTBSpendRequest.ItemDetails; _i < _a.length; _i++) {
            var item = _a[_i];
            totalCost = totalCost + item.Costs;
        }
        this.RTBSpendRequest.TotalSpendAmount = totalCost;
        if (this.RTBSpendRequest.Vat != null) {
            var tva = 0;
            tva = this.RTBSpendRequest.TotalSpendAmount * this.RTBSpendRequest.Vat;
            if (tva != 0) {
                tva = tva / 100;
            }
            this.RTBSpendRequest.TotalVatAmount = tva;
            this.RTBSpendRequest.TotalSpendAmount += this.RTBSpendRequest.TotalVatAmount;
        }
        console.log("calTotalAmount" + totalCost);
    };
    RTBNewSRComponent.prototype.calTotalVatAmount = function () {
        this.calTotalAmount();
        var tva = 0;
        tva = this.RTBSpendRequest.TotalSpendAmount * this.RTBSpendRequest.Vat;
        if (tva != 0) {
            tva = tva / 100;
        }
        this.RTBSpendRequest.TotalVatAmount = tva;
        this.RTBSpendRequest.TotalSpendAmount += this.RTBSpendRequest.TotalVatAmount;
        console.log("calTotalVatAmount" + tva);
    };
    RTBNewSRComponent.prototype.setBusinessUnit = function () {
        this.BusinessUnitList = this.myRTBNewRequestService.getBusinessUnitList(this.RTBSpendRequest.Division.Id);
    };
    RTBNewSRComponent.prototype.setHeadOfSystem = function () {
        if (this.RTBSpendRequest.BusinessUnit.Id == "GroupIT")
            this.RTBSpendRequest.HeadOfSystem = { "Id": "Mark", "Name": "Mark" };
        else if (this.RTBSpendRequest.BusinessUnit.Id == "bu1")
            this.RTBSpendRequest.HeadOfSystem = { "Id": "Jhon", "Name": "Jhon" };
        else
            this.RTBSpendRequest.HeadOfSystem = { "Id": "Harry", "Name": "Harry" };
    };
    RTBNewSRComponent.prototype.setAreaHeadOfSystem = function () {
        if (this.RTBSpendRequest.Area.Id == "Infra") {
            this.RTBSpendRequest.AreaHeadOfSystem = { "Id": "Ranjan.Kumar", "Name": "Ranjan Kumar" };
        }
        else {
            this.RTBSpendRequest.AreaHeadOfSystem = { "Id": "Sridhar.Kumar", "Name": "Sridhar Kumar" };
        }
        console.log(this.RTBSpendRequest.Area.Id);
    };
    RTBNewSRComponent.prototype.discardRequest = function () {
        if (this.RTBSpendRequest.RequestID != null || this.RTBSpendRequest.RequestID != "") {
            this.myRTBNewRequestService.deleteRTBRequest(this.RTBSpendRequest.RequestID);
        }
        console.log("discardRequest");
    };
    RTBNewSRComponent.prototype.saveRequestAsDraft = function () {
        if (this.RTBSpendRequest.RequestID != null || this.RTBSpendRequest.RequestID != "") {
            this.myRTBNewRequestService.createRTBRequest(this.StringFormatOfRTBSpendRequest);
        }
        else {
            this.myRTBNewRequestService.updateRTBRequest(this.StringFormatOfRTBSpendRequest, this.RTBSpendRequest.RequestID);
        }
        console.log("saveRequestAsDraft");
    };
    RTBNewSRComponent.prototype.submitRequest = function () {
        console.log("front end ===>", this.StringFormatOfRTBSpendRequest);
        this.myRTBNewRequestService.createRTBRequest(this.StringFormatOfRTBSpendRequest);
    };
    // submitRequest() {
    //   let RTBChiragFormat={
    //     "Amount" : this.RTBSpendRequest.AmountToSpend.Name,
    //     "Title" : this.RTBSpendRequest.RequestTitle,
    //     "CategoryID" : "1",
    //     "Created_By" : this.RTBSpendRequest.Requestor.Email,
    //     "Created_Date" : "\/Date(2000+0000)\/",
    //     "DivisionID" : this.RTBSpendRequest.Division.Id,
    //     "DivisionBUID" : this.RTBSpendRequest.BusinessUnit.Id,
    //     "Requestor_Name" : "1",
    //     "Requestor_EmailId" : "1",
    //     "AMIPartnerEngaged_Name" : "1",
    //     "AMIPartnerEngaged_Email" : this.RTBSpendRequest.AMIPartnerEngaged.Email,
    //     "TechAcquisitionGatePresenter_Name" : "1",
    //     "TechAcquisitionGatePresenter_Email" : this.RTBSpendRequest.TechnologyAcquisitionGatePresenter.Email,
    //     "ExecutiveSummary" : "1",
    //     "IsDraft" : "false",
    //     "RequestorContactNo" : "1",
    //     "SourcingContactName" : "1",
    //     "SourcingContactEmail" : "1",
    //     "SourcingSpendTypeID" : 1,
    //     "SourcingPricingTerms" : 11,
    //     "BuyersOnlineID" : 1,
    //     "Manufacturer" : "1",
    //     "AnnualMaintenance" : 1,
    //     "FinanceRequestContactName" : "1",
    //     "FinanceRequestContactEmail" : "1",
    //     "ProjectName" : "1",
    //     "PRN" : 1,
    //     "SupplyArea" : "1",
    //     "SupplyHoS" : "1",
    //     "WBSValidationCheck" : "1"
    //     }
    //   let RTBChiragFormatString=JSON.stringify(RTBChiragFormat);
    //   if(this.RTBSpendRequest.RequestID!=null||this.RTBSpendRequest.RequestID!="") {
    //     this.myRTBNewRequestService.createRTBRequest(this.StringFormatOfRTBSpendRequest);
    //   }
    //   else {
    //     this.myRTBNewRequestService.updateRTBRequest(this.StringFormatOfRTBSpendRequest,this.RTBSpendRequest.RequestID);
    //   }
    //   console.log("submitRequest");
    // }
    RTBNewSRComponent.prototype.dynStakeHolderSection = function () {
        return this._fb.group({
            dynDesc: [''],
            dynCat: [''],
            dynStDate: [''],
            dynEnddate: [''],
            dynCost: ['']
        });
    };
    RTBNewSRComponent.prototype.dynFinanceInfoSection = function () {
        return this._fb.group({
            dynYear: [''],
            dynBudget: [''],
            dynFrCst: [''],
            dynThrtBen: [''],
            dynOppIdent: ['']
        });
    };
    RTBNewSRComponent.prototype.isFieldValid = function (field) {
        return !this.newSRForm.controls[field].valid && this.newSRForm.controls[field].touched && this.newRequestFlag;
    };
    RTBNewSRComponent.prototype.displayFieldCss = function (field) {
        return {
            'has-error': this.isFieldValid(field),
            'has-feedback': this.isFieldValid(field)
        };
    };
    RTBNewSRComponent.prototype.reviewRequest = function () {
        this.newRequestFlag = false;
        this.StringFormatOfRTBSpendRequest = JSON.stringify(this.RTBSpendRequest);
        console.log("reviewRequest:" + this.StringFormatOfRTBSpendRequest);
    };
    ;
    RTBNewSRComponent.prototype.modifyRequest = function () {
        this.newRequestFlag = true;
        console.log("modifyRequest");
    };
    ;
    RTBNewSRComponent.prototype.addRow = function () {
        var control = this.newSRForm.controls['dynstakeHolderFields'];
        control.push(this.dynStakeHolderSection());
        this.RTBSpendRequest.ItemDetails.push({
            "Description": "",
            "Category": { "Id": "", "Name": "" },
            "StartDate": "",
            "EndDate": "",
            "Costs": null,
            "Vat": null
        });
        console.log(JSON.stringify(this.RTBSpendRequest.ItemDetails));
    };
    ;
    RTBNewSRComponent.prototype.deleteRow = function (id) {
        var control = this.newSRForm.controls['dynstakeHolderFields'];
        control.removeAt(id);
        this.RTBSpendRequest.ItemDetails.splice(id, 1);
        this.calTotalVatAmount();
        console.log(JSON.stringify(this.RTBSpendRequest.ItemDetails));
    };
    ;
    RTBNewSRComponent.prototype.addFinanceRow = function () {
        var control = this.newSRForm.controls['dynFinanceInfoFields'];
        control.push(this.dynFinanceInfoSection());
        this.RTBSpendRequest.FinancialInformation.push({
            "Year": null,
            "Budget": null,
            "Forecast": null,
            "Threat": null,
            "Opportunity": null
        });
    };
    ;
    RTBNewSRComponent.prototype.deleteFinanceRow = function (finId) {
        var control = this.newSRForm.controls['dynFinanceInfoFields'];
        control.removeAt(finId);
    };
    ;
    RTBNewSRComponent.prototype.onChangeFields = function () {
        this.selectedOption = this.RTBSpendRequest.AmountToSpend.Name;
        console.log(this.selectedOption);
    };
    ;
    RTBNewSRComponent.prototype.onChangeSpendType = function () {
        this.selectedOption = this.RTBSpendRequest.SpendType.Name;
        console.log(this.selectedOption);
    };
    ;
    RTBNewSRComponent.prototype.autoSuggest = function (keycode, keyupVal) {
        var trimmedStr = "";
        if (keycode === 32) {
            this.filteredStr.push(keyupVal);
            // console.log(filteredStr);
            if (this.filteredStr.length > 0) {
                trimmedStr = this.filteredStr.join(' ').trim();
            }
            for (var i = 0; i <= this.divisionItems['Results'].length; i++) {
                if (this.divisionItems['Results'][i].division.indexOf(trimmedStr) !== -1) {
                    console.log('Value exist');
                    this.buName = this.divisionItems['Results'][i].bu;
                    this.headName = this.divisionItems['Results'][i].head;
                    break;
                }
                else {
                    console.log('No !!');
                }
            }
        }
    };
    RTBNewSRComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "rtb-new-sr",
            templateUrl: '../rtb.templates/rtb-new-sr.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, rtb_new_sr_service_1.RTBNewRequestService, rtb_erf_tooltip_service_1.RTBTooltipService])
    ], RTBNewSRComponent);
    return RTBNewSRComponent;
}());
exports.RTBNewSRComponent = RTBNewSRComponent;
