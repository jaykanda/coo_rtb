import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, RequestMethod, URLSearchParams } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { IRESTServiceCall } from "../rtb.interfaces/rtb-common.interface";

@Injectable()
export class RESTServiceCall implements IRESTServiceCall { 
    constructor (private http: Http) {} 
    restServiceCall(url:string,method:string,data:string,id:string):any {
        if(method=="get"){
            let fullUrl = url + "/" + id;
            if((id == "" || id == null ) && (data == "" || data == null)) {
                console.log("from common service get call..");
                return this.http.get(url).map((res: Response) => res.json());             
            }
            else if ( data == "" || data == null ){
                console.log("from common service get call from else part...");
                return this.http.get(fullUrl).map((res: Response) => res.json());             
            }            
        }
        else if(method=="post") {
            let headers = new Headers({ 'Content-Type': 'application/json'});  
            let options = new RequestOptions({ headers: headers });
            let body = new URLSearchParams();
            body.append('', JSON.stringify(data));
            return this.http.post(url, data, options).map((res: Response) => res.json()).subscribe();
        }
        else if(method=="put") {
            let headers = new Headers({ 'Content-Type':'application/x-www-form-urlencoded'});  
            let options = new RequestOptions({ headers: headers });
            let body = new URLSearchParams();
            body.append('', JSON.stringify(data));
            return this.http.put(url, body, options).map((res: Response) => res.json());
        }
        else if(method=="delete") {
            return this.http.delete (url+"/"+id).map((res: Response) => res.json());
        }  
    }
}