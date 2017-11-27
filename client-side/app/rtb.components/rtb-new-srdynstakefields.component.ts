import { Component , Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';


@Component({
  moduleId:module.id,
  selector: "dyn-stake-fields",
  templateUrl: '../rtb.templates/rtb-new-srdynstakefields.component.html'
})

export class DynStakeHolderFieldsComponent { 
    @Input ('group')
    public dynStakeholderFormsection : FormGroup;
}