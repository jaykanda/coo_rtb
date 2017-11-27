import { Injectable } from "@angular/core";

import { Http, Response, Headers, RequestOptions, RequestMethod, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/map';

import {INoOfRowsdToBeDisplayed} from '../rtb.interfaces/utils-no-of-rows-dropdown.interface';

const NoOfRows : INoOfRowsdToBeDisplayed[] = [
    {id:5,value:'5 items'},
    {id:10,value:'10 items'},
    {id:20,value:'20 items'},
    {id:50,value:'50 items'},
]

@Injectable()
export class NoOfRowsService { 

    constructor (private http: Http) {} 
    getAll() : INoOfRowsdToBeDisplayed[] {       
        return NoOfRows;
    }

    
}