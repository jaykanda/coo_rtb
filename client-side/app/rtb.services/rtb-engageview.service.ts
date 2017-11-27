import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, RequestMethod, URLSearchParams } from '@angular/http';
import { RESTServiceCall } from '../rtb.services/rtb-common.service';

@Injectable()
export class RTBEngageviewService {
    Url : string;
    pdfService : string;
    approvalStatusUrl : string;
    approvalDetails: any = {};   

    constructor(private http: Http, private myRESTServiceCall: RESTServiceCall) {
        let headers = new Headers({ 'content-type': 'application/json', 'data-type': 'JSON' });
        let options = new RequestOptions({ headers: headers });
        this.Url = '/api/usersrdetails'; 
        this.pdfService = '/api/generatePDF';
        this.approvalStatusUrl = '/api/approvedsrstatus';
    }
    getEngagementViewSRData(id: string) {
        console.log("view user spend details id ===> ", id);
        console.log("view user spend details id ===> ", this.Url + id);
        return this.myRESTServiceCall.restServiceCall(this.Url,"get", "", id);
    };
    sendApproval(id: string) {
        this.approvalDetails = {
            id : id,
            status : "Approved"
        }
        return this.myRESTServiceCall.restServiceCall(this.approvalStatusUrl, "post", this.approvalDetails, id);
    }
    exportPDFdata(id: string, data: any) {
        return this.myRESTServiceCall.restServiceCall(this.pdfService, "post", data, id);
    }   
}