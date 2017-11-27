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
var RTBPrnComponent = (function () {
    function RTBPrnComponent(_fb) {
        this._fb = _fb;
        this.pageHeading = 'Enter Project ID';
        this.specialChar = '^[a-zA-Z][a-zA-Z0-9]*(?:\s+[a-zA-Z][a-zA-Z0-9]+)?$';
    }
    RTBPrnComponent.prototype.ngOnInit = function () {
        this.prnFormGroup = this._fb.group({
            prnInputText1: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern(this.specialChar)])]
        });
    };
    RTBPrnComponent.prototype.isFieldValid = function (field) {
        return !this.prnFormGroup.controls[field].valid && this.prnFormGroup.controls[field].touched;
    };
    RTBPrnComponent.prototype.displayFieldCss = function (field) {
        return {
            'has-error': this.isFieldValid(field),
            'has-feedback': this.isFieldValid(field)
        };
    };
    RTBPrnComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "prn-component",
            templateUrl: '../rtb.templates/rtb-prn.component.html',
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], RTBPrnComponent);
    return RTBPrnComponent;
}());
exports.RTBPrnComponent = RTBPrnComponent;
//# sourceMappingURL=rtb-prn.component.js.map