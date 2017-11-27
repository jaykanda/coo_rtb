import { Injectable } from "@angular/core";

import { Http, Response, Headers, RequestOptions, RequestMethod, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class RTBGridSearchService { 

    constructor (private http: Http) {} 

    private contains(main: String, searchOn: String): boolean {
        var erorrMsg : string ;
        var returnMsg : boolean ;
        try {
            returnMsg = main.toLowerCase().indexOf(searchOn.toLowerCase()) >= 0
        } catch (error) {
            returnMsg = main.toString().indexOf(searchOn.toString()) >= 0
        }
        return returnMsg;
    }

    searchEverything(spendingrequest:any,searchOn:string): boolean {
        
         var prop = Object.getOwnPropertyNames(spendingrequest);
         var returnArr : any;
         prop.forEach(element => {
             returnArr = returnArr || this.contains(spendingrequest[element],searchOn)
         });
        return returnArr;
        
     }

}