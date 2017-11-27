import {Component, OnInit,Output,EventEmitter} from '@angular/core';
import {INoOfRowsdToBeDisplayed} from '../rtb.interfaces/utils-no-of-rows-dropdown.interface';
import { NoOfRowsService } from "../rtb.services/utils-no-of-rows-dropdown.service";

@Component({
    moduleId:module.id,
    selector: 'no-of-rows-dropdown-component',
    templateUrl: '../rtb.templates/utils-no-of-rows-dropdown.component.html'
    
  })

  export class NoOfRowsDropDownComponent{
    noOfRowdToBeDisplayed : INoOfRowsdToBeDisplayed[];
    // selectedValue : NoOfRowsdToBeDisplayed;
    // selectedValue : NoOfRowsdToBeDisplayed;
    private _selectedValue : Number;
    set selectedValue(selectedValue: Number) {
      this._selectedValue = selectedValue;
      this.getSelectedRowsValue();
    }
    get selectedValue() : Number {return this._selectedValue};
    @Output() onSelected = new EventEmitter<Number>();

    constructor(private service:NoOfRowsService) { }

    ngOnInit() : void {
      
      this.noOfRowdToBeDisplayed=this.service.getAll();
      this.selectedValue = this.noOfRowdToBeDisplayed[0].id;
  }
  getSelectedRowsValue() {
    this.onSelected.emit(this.selectedValue);
  }

  
  }