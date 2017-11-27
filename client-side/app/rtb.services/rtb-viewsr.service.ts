import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, RequestMethod, URLSearchParams } from '@angular/http';
import { RESTServiceCall } from '../rtb.services/rtb-common.service';

@Injectable()
export class RTBViewSRDetailsService {
    Url: string;
    constructor(private myRESTServiceCall: RESTServiceCall, private http: Http) {
        this.http = http;
        let headers = new Headers({ 'content-type': 'application/json', 'data-type': 'JSON' });
        let options = new RequestOptions({ headers: headers });
        this.Url = '/api/usersrdetails'; 
    }
    getUserSpendDetails(id: string) {
        console.log("view user spend details id ===> ", id);
        console.log("view user spend details id ===> ", this.Url + id);
        return this.myRESTServiceCall.restServiceCall(this.Url,"get", "", id);
    }

}