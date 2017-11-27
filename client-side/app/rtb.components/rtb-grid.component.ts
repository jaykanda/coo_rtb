import { Component, OnInit } from "@angular/core";
import { RTBGridSearchService }from '../rtb.services/rtb-grid-search.service';
import { RTBGridService }from '../rtb.services/rtb-grid.service';
import { IRunRequest, IPagination, IRunRequestService } from "../rtb.interfaces/rtb-grid.interface";

@Component({
    moduleId:module.id,
    selector: 'rtb-grid-component',
    templateUrl: '../rtb.templates/rtb-grid.component.html'    
})

export class RTBGridComponent implements OnInit {
    searchOn:string='';    
    pageHeading:string='Spending Request'; 
    desc_flag:boolean=false;
    runrequests: IRunRequest[]; 
    s_runrequest:IRunRequest= <IRunRequest>{};
    paginationValues : IPagination = <IPagination>{};
    spendRequestFilter : string = 'All';
    startRowCount : number;
    engagement : boolean = false;
    actionButtons : boolean = false;
    keys: any[];

    constructor(private service:RTBGridService) { }
  
    ngOnInit() : void {
        if(window.location.pathname.indexOf('engagement') !== -1) {
            this.engagement = true;
        }
        if(window.location.pathname.indexOf('engagement') === -1) {
            this.engagement = false;
        }

        this.service.getGridviewAlldata().subscribe((results: any) => {
            this.runrequests = results;
            console.log("grid view all data ===> ", this.runrequests);
            this.keys = Object.keys(this.runrequests);
            //this.SupplierName = this.runrequests.BuyingOnlineSupplier;
        });

        this.paginationValues.rowCount =5;
        this.paginationValues.rowDisplayed =5;
        this.paginationValues.currentStartingRow = 0;
        document.getElementById('btnPrev').classList.add('disabled');
        this.runrequests = this.service.getAll(this.paginationValues.rowCount,this.paginationValues.currentStartingRow);
    }
    onSelected(selectedValue : number){
        console.log("test1");
        this.paginationValues.rowCount = selectedValue;
        // this.runrequests = this.service.getAll(selectedValue,this.paginationValues.currentStartingRow);
        this.runrequests = this.service.getStatus('RunStatus',this.spendRequestFilter,this.paginationValues.rowCount,this.paginationValues.currentStartingRow);
    }
    onSpendRequestFilterSelected(selectedValue : string){
        this.spendRequestFilter = selectedValue;
        // console.log(this.paginationValues.rowCount + ' ' + this.paginationValues.currentStartingRow);
        if(this.paginationValues.currentStartingRow < 0)
            this.paginationValues.currentStartingRow = 0;
        // console.log(this.paginationValues.rowCount + ' ' + this.paginationValues.currentStartingRow);
        this.runrequests = this.service.getStatus('RunStatus',selectedValue,this.paginationValues.rowCount,this.paginationValues.currentStartingRow);
        if(this.runrequests.length == 0)
            {
                this.paginationValues.currentStartingRow = 0;
                this.runrequests = this.service.getStatus('RunStatus',selectedValue,this.paginationValues.rowCount,this.paginationValues.currentStartingRow);
            }
            // this.paginationValues.currentStartingRow = this.paginationValues.currentStartingRow + this.paginationValues.rowCount;
    }
    showActionButtons = function () {
        if(this.actionButtons) {
            this.actionButtons = false;
        } else {
            this.actionButtons = true;
        }
    }
    getGridValues(paginationStep : string) : void{
        console.log(paginationStep);
        if(paginationStep=="Next"){
            console.log('From next RowCount : ' + this.paginationValues.rowCount);
            console.log('From next RowCount Current Starting Row : ' + this.paginationValues.currentStartingRow);
            this.startRowCount  = +this.paginationValues.rowCount ;
            this.startRowCount = this.startRowCount+this.paginationValues.currentStartingRow;
            console.log('From Next in Component : ' + this.startRowCount);
            this.runrequests = this.service.getStatus('RunStatus',this.spendRequestFilter,this.paginationValues.rowCount,this.startRowCount);
            if(this.runrequests == null || this.runrequests.length == 0){
                document.getElementById('btnNext').classList.add('disabled');
            }
            if(document.getElementById('btnPrev').classList.contains('disabled')){
                document.getElementById('btnPrev').classList.remove('disabled');
                console.log('previous button enabled from next');
                this.paginationValues.currentStartingRow = 0;
            }
            // this.paginationValues.currentStartingRow = +this.paginationValues.currentStartingRow ;
            this.paginationValues.currentStartingRow +=this.paginationValues.rowCount;
            
            
        }
        else{
            this.runrequests = this.service.getStatus('RunStatus',this.spendRequestFilter,this.paginationValues.rowCount,this.paginationValues.currentStartingRow - this.paginationValues.rowCount);
            console.log('test from previous');
            console.log('Current starting row : ' + this.paginationValues.currentStartingRow);
            console.log('Current paginationValues row : ' + this.paginationValues.rowCount);
            if(this.runrequests == null || this.runrequests.length == 0){
                document.getElementById('btnPrev').classList.add('disabled');
            }
            if(document.getElementById('btnNext').classList.contains('disabled')){
                document.getElementById('btnNext').classList.remove('disabled');
                // this.paginationValues.currentStartingRow = 0;
            }
            this.paginationValues.currentStartingRow = this.paginationValues.currentStartingRow - this.paginationValues.rowCount;
            if(this.paginationValues.currentStartingRow <= 0)
            { 
                document.getElementById('btnPrev').classList.add('disabled');
                this.paginationValues.currentStartingRow = 0;
            }
            
                
           
        }
    }
  
    sortGeneric(fieldName : string){
        let fieldList : string[]  = ["RunInitiativeName", "RunID","RunDivision","RunStatus","RunCosts"];
        if(!this.desc_flag) {
        this.runrequests.sort((a:  any, b: any) => {
            for(var field in fieldList)
                {
                    var currFieldClass = document.getElementById(fieldList[field]).classList;
                    if(currFieldClass.contains('fa-sort-desc'))
                        currFieldClass.remove('fa-sort-desc');
                    if(!currFieldClass.contains('fa-sort'))
                        currFieldClass.add('fa-sort');
                }
            document.getElementById(fieldName).classList.add('fa-sort-asc');
            if (a[fieldName] < b[fieldName]) {
                return -1;
            } else if (a[fieldName] > b[fieldName]) {
                return 1;
            } else {
                return 0;
            }
        });
        this.desc_flag=true;
    }
    else{
        this.runrequests.sort((a: any, b: any) => {
            for(var field in fieldList)
                {
                    var currFieldClass = document.getElementById(fieldList[field]).classList;
                    if(currFieldClass.contains('fa-sort-asc'))
                        currFieldClass.remove('fa-sort-asc');
                    if(!currFieldClass.contains('fa-sort'))
                        currFieldClass.add('fa-sort');
                }
                document.getElementById(fieldName).classList.add('fa-sort-desc');
            if (a[fieldName] > b[fieldName]) {
                return -1;
            } else if (a[fieldName] < b[fieldName]) {
                return 1;
            } else {
                return 0;
            }
        });
        this.desc_flag=false;
        }
        return this.runrequests;
    }
    
}       