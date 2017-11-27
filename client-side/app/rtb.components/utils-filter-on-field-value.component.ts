import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {IFilterOnFieldValue} from '../rtb.interfaces/utils-filter-on-field-value.interface';
import {FilterOnFieldValueService} from '../rtb.services/utils-filter-on-field-value.service';

@Component({
    moduleId:module.id,
    selector: 'filter-on-field-value-component',
    templateUrl: '../rtb.templates/utils-filter-on-field-value.component.html'
})

export class FilterOnFieldValueComponent{
    spendRequestStatus : IFilterOnFieldValue[];
    private _selectedValue : String;
    set selectedValue(selectedValue: String) {
      this._selectedValue = selectedValue;
      this.onSelectedSpendRequestStatus();
    }
    get selectedValue() : String {return this._selectedValue};
    @Output() onSpendRequestFilterSelected = new EventEmitter<String>();

    constructor(private service:FilterOnFieldValueService) { }

    ngOnInit() : void {      
      this.spendRequestStatus=this.service.getAll();
      this.selectedValue = this.spendRequestStatus[0].value;
    }
    onSelectedSpendRequestStatus() {
      this.onSpendRequestFilterSelected.emit(this.selectedValue);
    }
}