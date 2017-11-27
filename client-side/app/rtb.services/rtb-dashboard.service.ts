import { Injectable } from "@angular/core";
import { IRunRequest } from "../rtb.interfaces/rtb-grid.interface";
import { Http, Response, Headers, RequestOptions, RequestMethod, URLSearchParams } from '@angular/http';
import { RESTServiceCall } from '../rtb.services/rtb-common.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/forkJoin';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RTBGridDashBoardService { 
   
    headers : Headers;
    options : RequestOptions;
    processID : string;
    Url: string;
    processObservableID : Observable<any[]>;
    constructor (private http: Http, private myRESTServiceCall: RESTServiceCall) {
        this.Url = 'api/dashboarddata';
        this.headers = new Headers({'content-type': 'application/json',
        'data-type': 'JSON',
        'Authorization': 'Basic Y2c6V2lwcm9AMTIzNDU2'});
        this.options = new RequestOptions({headers : this.headers});        
    } 
    public getCurrentUserData() { 
        return this.myRESTServiceCall.restServiceCall(this.Url, "get", "", "");
    };

}
