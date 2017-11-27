import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray} from '@angular/forms';

@Component({
  moduleId:module.id,
  selector: "prn-component",
  templateUrl: '../rtb.templates/rtb-prn.component.html',
})
export class RTBPrnComponent  {
  pageHeading='Enter Project ID'
  prnFormGroup:any;
  specialChar:any = '^[a-zA-Z][a-zA-Z0-9]*(?:\s+[a-zA-Z][a-zA-Z0-9]+)?$';
  prnInputText1:string;

  constructor(private _fb: FormBuilder){}

  ngOnInit() : void {
    this.prnFormGroup = this._fb.group({
      prnInputText1 : ['', Validators.compose([Validators.required, Validators.pattern(this.specialChar)])]
    });
  }

  isFieldValid(field: string) {
    return !this.prnFormGroup.controls[field].valid && this.prnFormGroup.controls[field].touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }
}