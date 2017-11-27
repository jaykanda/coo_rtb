import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, RequestMethod, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RTBTooltipService {    
    headers : Headers;
    options : RequestOptions;
    processID : string;
    processObservableID : Observable<any[]>;
    public jsonFileloc: string = "../app/rtb.data/rtb-erftooltip-data.json";
    constructor (private http: Http) {
        this.headers = new Headers({'content-type': 'application/json',
        'data-type': 'JSON'
    });
        this.options = new RequestOptions({headers : this.headers});
    } 
    public getRTBTooltipData() : Observable<any[]> { 
        return this.http.get(this.jsonFileloc,this.options).map(data1 => data1.json());
    };

}
