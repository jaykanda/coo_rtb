import { Injectable } from "@angular/core";

import { Http, Response, Headers, RequestOptions, RequestMethod, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/map';
import {IFilterOnFieldValue} from '../rtb.interfaces/utils-filter-on-field-value.interface';

const dropDownValues : IFilterOnFieldValue[] = [
    {id:1,value:'All'},
    {id:2,value:'Renewal'},
    {id:3,value:'Sent For Rework'},
    {id:4,value:'Awaiting Approval'},
    {id:5,value:'Approved'},
    {id:6,value:'PreApproved'},
]

@Injectable()
export class FilterOnFieldValueService { 

    constructor (private http: Http) {} 
    getAll() : IFilterOnFieldValue[] {       
        return dropDownValues;         
    }

    
}