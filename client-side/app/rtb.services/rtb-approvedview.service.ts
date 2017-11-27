import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, RequestMethod, URLSearchParams } from '@angular/http';
import { RESTServiceCall } from '../rtb.services/rtb-common.service';

@Injectable()
export class RTBApprovedViewSRDetailsService {
    public Url : string;
    constructor(private http: Http, private myRESTServiceCall: RESTServiceCall) {
        let headers = new Headers({ 'content-type': 'application/json', 'data-type': 'JSON' });
        let options = new RequestOptions({ headers: headers });
        this.Url = '/api/usersrdetails'; 
    }
    getApprovedViewSRData(id: string) {
        console.log("view user spend details id ===> ", id);
        console.log("view user spend details id ===> ", this.Url + id);
        return this.myRESTServiceCall.restServiceCall(this.Url,"get", "", id);
    };
}