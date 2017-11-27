import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, RequestMethod, URLSearchParams } from '@angular/http';
import { IRunRequest,IRunRequestService } from "../rtb.interfaces/rtb-grid.interface";
import { RESTServiceCall } from '../rtb.services/rtb-common.service';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

const RUNREQUESTS : IRunRequest[] = [
    {RunInitiativeName: 'Initiative #1', RunID: 'F780026', RunDivision: 'Apple',RunAcctExec:'Jenifer Smith',RunStatus:'Sent for rework',RunCosts:'56000',ActionName:"Resolve",ActionURL:'/spendingrequest/resolve'},
    {RunInitiativeName: 'Initiative #2', RunID: 'F928654', RunDivision: 'Dell',RunAcctExec:'Jhon Betty',RunStatus:'Awaiting approval',RunCosts:'14000',ActionName:"",ActionURL:''},
    {RunInitiativeName: 'Initiative #2', RunID: 'F928654', RunDivision: 'Dell',RunAcctExec:'Jhon Betty',RunStatus:'Renew',RunCosts:'14000',ActionName:"Renew",ActionURL:'/spendingrequest/renew'},
    {RunInitiativeName: 'Initiative #3', RunID: 'F587467', RunDivision: 'Google',RunAcctExec:'Jenifer Smith',RunStatus:'Preapproved',RunCosts:'186000',ActionName:"Start GCMC",ActionURL:'/spendingrequest/pregcmc'},
    {RunInitiativeName: 'Initiative #4', RunID: 'F839402', RunDivision: 'IBM',RunAcctExec:'Jhon Betty',RunStatus:'Approved',RunCosts:'64000',ActionName:"View",ActionURL:'/spendingrequest/veiwapproved'},
    {RunInitiativeName: 'Initiative #1', RunID: 'F780026', RunDivision: 'Apple1',RunAcctExec:'Jenifer Smith',RunStatus:'Sent for rework',RunCosts:'56000',ActionName:"Resolve",ActionURL:'/spendingrequest/resolve'},
    {RunInitiativeName: 'Initiative #2', RunID: 'F928654', RunDivision: 'Dell1',RunAcctExec:'Jhon Betty',RunStatus:'Awaiting approval',RunCosts:'14000',ActionName:"",ActionURL:''},
    {RunInitiativeName: 'Initiative #3', RunID: 'F587467', RunDivision: 'Google1',RunAcctExec:'Jenifer Smith',RunStatus:'Preapproved',RunCosts:'186000',ActionName:"Start GCMC",ActionURL:'/spendingrequest/pregcmc'},
    {RunInitiativeName: 'Initiative #4', RunID: 'F839402', RunDivision: 'IBM1',RunAcctExec:'Jhon Betty',RunStatus:'Approved',RunCosts:'64000',ActionName:"View",ActionURL:'/spendingrequest/veiwapproved'},
    {RunInitiativeName: 'Initiative #1', RunID: 'F780026', RunDivision: 'Apple2',RunAcctExec:'Jenifer Smith',RunStatus:'Sent for rework',RunCosts:'56000',ActionName:"Resolve",ActionURL:'/spendingrequest/resolve'},
    {RunInitiativeName: 'Initiative #2', RunID: 'F928654', RunDivision: 'Dell2',RunAcctExec:'Jhon Betty',RunStatus:'Awaiting approval',RunCosts:'14000',ActionName:"",ActionURL:''},
    {RunInitiativeName: 'Initiative #3', RunID: 'F587467', RunDivision: 'Google2',RunAcctExec:'Jenifer Smith',RunStatus:'Preapproved',RunCosts:'186000',ActionName:"Start GCMC",ActionURL:'/spendingrequest/pregcmc'},
    {RunInitiativeName: 'Initiative #4', RunID: 'F839402', RunDivision: 'IBM2',RunAcctExec:'Jhon Betty',RunStatus:'Approved',RunCosts:'64000',ActionName:"View",ActionURL:'/spendingrequest/veiwapproved'}
    ];

@Injectable()
export class RTBGridService implements IRunRequestService {    
    private total : number = 0;
    countLocal : number = 0;
    Url: string;
    constructor (private http: Http, private myRESTServiceCall: RESTServiceCall) {
        this.Url = "/api/gridsrdata";
    } 
    getStatus(fieldName : string , fieldValue: string,count:number,start:number): IRunRequest[]{
            if(fieldValue != 'All')
                return RUNREQUESTS.filter(x=>x[fieldName].trim().toUpperCase() === fieldValue.trim().toUpperCase())
                                        .slice(start , Number(start) + Number(count));
            else
                {
                    this.total = 0;
                    // this.count = 
                    console.log('From RunRequest Service ' + start);
                    console.log('From RunRequest Service Count ' + count);
                    if(start < 0)
                        start = 0;
                    console.log('From RunRequest Service total start ' + this.total);
                    this.total +=Number(this.total) + Number(start);
                    console.log('From RunRequest Service total intermediate ' + this.total);
                    count = parseInt(count.toString(),0);
                    this.total = Number(this.total) +Number(count) ;
                    console.log('From RunRequest Service total ' + this.total);
                    return RUNREQUESTS.slice(start , Number(count) + Number(start));
                }
    }
    getAll(count:number,start:number) : IRunRequest[] {       
        return RUNREQUESTS.slice(start , start + count);
    } 
    getGridviewAlldata() { 
        return this.myRESTServiceCall.restServiceCall(this.Url, "get", "", "");
    };
}