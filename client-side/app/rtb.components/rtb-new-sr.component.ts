import { Component , OnInit, Input } from '@angular/core';
import { IRTBSpendRequest } from "../rtb.interfaces/rtb-common.interface";
import { FormGroup, FormControl, FormBuilder, Validators, FormArray} from '@angular/forms';
import { RTBNewRequestService } from "../rtb.services/rtb-new-sr.service";
import { RTBTooltipService } from '../rtb.services/rtb-erf-tooltip.service';

@Component({
  moduleId:module.id,
  selector: "rtb-new-sr",
  templateUrl: '../rtb.templates/rtb-new-sr.component.html'
})
export class RTBNewSRComponent implements OnInit { 
  public newSRForm:any;
  public submitted: boolean = true;
  public events: any[] = [];
  newRequestFlag: boolean;
  AmountSpendList: any[];
  RTBSpendRequest: IRTBSpendRequest;
  DivisionList: any[];
  SpendType: any[];
  BusinessUnitList: any[];
  StringFormatOfRTBSpendRequest: string;
  CategoryList:any[];  
  VatList:number[];
  AreaList:any[];
  public counter = 0;
  public rows:any[] = [];
  public fincounter = 0;
  public finrows:any[] = [];
  public spendVal: string;
  public selectedOption: string;
  public divisionItems = {};
  public filteredStr:any[] = [];
  public buName: string;
  public headName: string;
  public Results:any[] = [];
  emailRegex:any = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
  passRegex:any = '^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$';
  specialChar:any = '^[a-zA-Z][a-zA-Z0-9]*(?:\s+[a-zA-Z][a-zA-Z0-9]+)?$';
  numberOnly:any = '^[0-9]*$';

  constructor(private _fb: FormBuilder,private myRTBNewRequestService:RTBNewRequestService, private toolTipservice: RTBTooltipService) {
      // this.validatenewRTBForm();
  }
  ngOnInit() : void {
    this.VatList=this.myRTBNewRequestService.getVatList();
    this.CategoryList=this.myRTBNewRequestService.getCategoryList();    
    this.AmountSpendList=this.myRTBNewRequestService.getAmountSpendList();   
    this.DivisionList=this.myRTBNewRequestService.getDivisionList();        
    this.RTBSpendRequest=this.myRTBNewRequestService.getEmptyRTBSpendRequest()[0];
    this.AreaList=this.myRTBNewRequestService.getAreaList();
    this.SpendType = this.myRTBNewRequestService.getSpendType();

    this.newSRForm = this._fb.group({
        reqTitle : ['', Validators.compose([Validators.required, Validators.pattern(this.specialChar)])],
        amountSpend : ['', Validators.required],
        cioDivision : ['', Validators.required],
        cioBU : ['', Validators.required],
        headSysFunc : [{disabled: true}, Validators.required],
        reqName : ['', [Validators.required,  Validators.pattern(this.specialChar)]],
        reqEmail : [ '', Validators.compose([Validators.required, Validators.pattern(this.emailRegex)])],
        reqContact : ['', Validators.compose([Validators.required, Validators.maxLength(11), Validators.pattern(this.numberOnly)])],
        amiPartEng : ['', Validators.required],
        cioContact : ['', Validators.required],
        techAcquiGate : ['', Validators.required],
        techAcquiGateEmail : ['', Validators.required],
        tacPresenter : ['', Validators.required],
        itemquestion1:[''],
        itemquestion2:[''],
        itemquestion3:[''],
        itemquestion4:[''],
        itemquestion5:[''],
        FinancialSummary:[''],
        FinanceQuestion1:[''],       
        FinanceQuestion2:[''],
        FinanceQuestion3:[''],
        FinanceQuestion4:[''],
        FinanceQuestion5:[''],
        costForum : ['', Validators.required],
        gcmc : ['', Validators.required],
        sourcingEng : ['', Validators.required],
        sourcespendType : ['', Validators.required],
        pricingTerms : ['', Validators.required],
        manufacturer : ['', Validators.required],
        annuMaint : ['', Validators.required],
        rpiRadio : ['', Validators.required],
        buyingOnline : ['', Validators.required],
        thirdPartyRadio : ['', Validators.required],
        necessServiceRadio : ['', Validators.required],
        financeContact : ['', Validators.required],
        projectName : ['', Validators.required],
        programTitle : ['', Validators.required],
        budgetType : ['', Validators.required],
        budgetSubType : ['', Validators.required],
        costCentre : ['', Validators.required],
        prn : ['', Validators.required],
        spendGL : ['', Validators.required],
        wbsvalidation : ['', Validators.required],
        headSys : ['', Validators.required],
        contractDivest : ['', Validators.required],
        area : ['', Validators.required],
        headsys : [{disabled: true}, Validators.required],
        budgetThreat : ['', Validators.required],
        vat : ['', Validators.required],
        dynstakeHolderFields : this._fb.array([
            this.dynStakeHolderSection(),
        ]),
        dynFinanceInfoFields : this._fb.array([
            this.dynFinanceInfoSection(),
        ])  
      });
    this.newRequestFlag= true;    
  }
  calTotalAmount(){
    var totalCost:number=0;
    for (var item of this.RTBSpendRequest.ItemDetails) {
        totalCost=totalCost+item.Costs;        
    }
    this.RTBSpendRequest.TotalSpendAmount=totalCost;
    if(this.RTBSpendRequest.Vat!=null) {
      var tva:number=0;
      tva=this.RTBSpendRequest.TotalSpendAmount*this.RTBSpendRequest.Vat;
      if(tva!=0) {
        tva=tva/100
      }
      this.RTBSpendRequest.TotalVatAmount=tva;
      this.RTBSpendRequest.TotalSpendAmount+=this.RTBSpendRequest.TotalVatAmount;
    }  
    console.log("calTotalAmount"+totalCost);
  }
  calTotalVatAmount(){
    this.calTotalAmount();
    var tva:number=0;
    tva=this.RTBSpendRequest.TotalSpendAmount*this.RTBSpendRequest.Vat;
    if(tva!=0) {
      tva=tva/100
    }
    this.RTBSpendRequest.TotalVatAmount=tva;
    this.RTBSpendRequest.TotalSpendAmount+=this.RTBSpendRequest.TotalVatAmount;
    console.log("calTotalVatAmount"+tva);
  }
  setBusinessUnit() {
    this.BusinessUnitList=this.myRTBNewRequestService.getBusinessUnitList(this.RTBSpendRequest.Division.Id);
  }
  setHeadOfSystem() {
    if(this.RTBSpendRequest.BusinessUnit.Id=="GroupIT")this.RTBSpendRequest.HeadOfSystem={"Id":"Mark","Name":"Mark"};
    else if(this.RTBSpendRequest.BusinessUnit.Id=="bu1")this.RTBSpendRequest.HeadOfSystem={"Id":"Jhon","Name":"Jhon"};
    else this.RTBSpendRequest.HeadOfSystem={"Id":"Harry","Name":"Harry"};
  }
  setAreaHeadOfSystem() {
    if(this.RTBSpendRequest.Area.Id=="Infra") {
      this.RTBSpendRequest.AreaHeadOfSystem={"Id":"Ranjan.Kumar","Name":"Ranjan Kumar"};
    }
    else {
      this.RTBSpendRequest.AreaHeadOfSystem={"Id":"Sridhar.Kumar","Name":"Sridhar Kumar"};
    }
    console.log(this.RTBSpendRequest.Area.Id);   
  }  

  discardRequest(){ 
    if(this.RTBSpendRequest.RequestID!=null||this.RTBSpendRequest.RequestID!="") {
      this.myRTBNewRequestService.deleteRTBRequest(this.RTBSpendRequest.RequestID);
    }
    console.log("discardRequest");               
  }

  saveRequestAsDraft(){
    if(this.RTBSpendRequest.RequestID!=null||this.RTBSpendRequest.RequestID!="") {
        this.myRTBNewRequestService.createRTBRequest(this.StringFormatOfRTBSpendRequest);
    }
    else {
        this.myRTBNewRequestService.updateRTBRequest(this.StringFormatOfRTBSpendRequest,this.RTBSpendRequest.RequestID);
    }
    console.log("saveRequestAsDraft");
  }

  submitRequest() {
    console.log("front end ===>", this.StringFormatOfRTBSpendRequest);
    this.myRTBNewRequestService.createRTBRequest(this.StringFormatOfRTBSpendRequest);
  }

  // submitRequest() {
  //   let RTBChiragFormat={
  //     "Amount" : this.RTBSpendRequest.AmountToSpend.Name,
  //     "Title" : this.RTBSpendRequest.RequestTitle,
  //     "CategoryID" : "1",
  //     "Created_By" : this.RTBSpendRequest.Requestor.Email,
  //     "Created_Date" : "\/Date(2000+0000)\/",
  //     "DivisionID" : this.RTBSpendRequest.Division.Id,
  //     "DivisionBUID" : this.RTBSpendRequest.BusinessUnit.Id,
  //     "Requestor_Name" : "1",
  //     "Requestor_EmailId" : "1",
  //     "AMIPartnerEngaged_Name" : "1",
  //     "AMIPartnerEngaged_Email" : this.RTBSpendRequest.AMIPartnerEngaged.Email,
  //     "TechAcquisitionGatePresenter_Name" : "1",
  //     "TechAcquisitionGatePresenter_Email" : this.RTBSpendRequest.TechnologyAcquisitionGatePresenter.Email,
  //     "ExecutiveSummary" : "1",
  //     "IsDraft" : "false",
  //     "RequestorContactNo" : "1",
  //     "SourcingContactName" : "1",
  //     "SourcingContactEmail" : "1",
  //     "SourcingSpendTypeID" : 1,
  //     "SourcingPricingTerms" : 11,
  //     "BuyersOnlineID" : 1,
  //     "Manufacturer" : "1",
  //     "AnnualMaintenance" : 1,
  //     "FinanceRequestContactName" : "1",
  //     "FinanceRequestContactEmail" : "1",
  //     "ProjectName" : "1",
  //     "PRN" : 1,
  //     "SupplyArea" : "1",
  //     "SupplyHoS" : "1",
  //     "WBSValidationCheck" : "1"
  //     }
      
  //   let RTBChiragFormatString=JSON.stringify(RTBChiragFormat);

  //   if(this.RTBSpendRequest.RequestID!=null||this.RTBSpendRequest.RequestID!="") {
  //     this.myRTBNewRequestService.createRTBRequest(this.StringFormatOfRTBSpendRequest);
  //   }
  //   else {
  //     this.myRTBNewRequestService.updateRTBRequest(this.StringFormatOfRTBSpendRequest,this.RTBSpendRequest.RequestID);
  //   }
  //   console.log("submitRequest");
  // }

  dynStakeHolderSection() {
    return this._fb.group({
    dynDesc : [''],
    dynCat : [''],
    dynStDate : [''],
    dynEnddate : [''],
    dynCost : ['']
    });
  }
  dynFinanceInfoSection() {
    return this._fb.group({
        dynYear : [''],
        dynBudget : [''],
        dynFrCst : [''],
        dynThrtBen : [''],
        dynOppIdent : ['']
        });
  }
  isFieldValid(field: string) {
    return !this.newSRForm.controls[field].valid && this.newSRForm.controls[field].touched && this.newRequestFlag;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  reviewRequest(){ 
    this.newRequestFlag = false;
    this.StringFormatOfRTBSpendRequest=JSON.stringify(this.RTBSpendRequest);
    console.log("reviewRequest:"+this.StringFormatOfRTBSpendRequest);               
  };
  modifyRequest(){ 
    this.newRequestFlag = true;
    console.log("modifyRequest");               
  };
 
  addRow() {
    const control = <FormArray>this.newSRForm.controls['dynstakeHolderFields'];
    control.push(this.dynStakeHolderSection());
    this.RTBSpendRequest.ItemDetails.push({
        "Description":"",
        "Category":{"Id":"","Name":""},
        "StartDate":"",
        "EndDate":"",
        "Costs":null,
        "Vat":null
    });
   console.log(JSON.stringify(this.RTBSpendRequest.ItemDetails));
   };
   deleteRow(id:number) {
    const control = <FormArray>this.newSRForm.controls['dynstakeHolderFields'];
    control.removeAt(id);
    this.RTBSpendRequest.ItemDetails.splice(id, 1);
    this.calTotalVatAmount();
    console.log(JSON.stringify(this.RTBSpendRequest.ItemDetails));
   };
   addFinanceRow(){
    const control = <FormArray>this.newSRForm.controls['dynFinanceInfoFields'];
    control.push(this.dynFinanceInfoSection());
    this.RTBSpendRequest.FinancialInformation.push({
      "Year":null,
      "Budget":null,
      "Forecast":null,
      "Threat":null,
      "Opportunity":null      
    });
   };
   deleteFinanceRow(finId:number) {
    const control = <FormArray>this.newSRForm.controls['dynFinanceInfoFields'];
    control.removeAt(finId);
   };
   onChangeFields() {      
      this.selectedOption = this.RTBSpendRequest.AmountToSpend.Name;
      console.log(this.selectedOption);
   };
   onChangeSpendType() {
    this.selectedOption = this.RTBSpendRequest.SpendType.Name;
    console.log(this.selectedOption);
  };
   autoSuggest(keycode:any, keyupVal: string) {
        let trimmedStr:string = "";
        if(keycode === 32) {
           this.filteredStr.push(keyupVal);
           // console.log(filteredStr);
              if(this.filteredStr.length > 0) {
                  trimmedStr = this.filteredStr.join(' ').trim();
              }
            for( let i = 0; i <= this.divisionItems['Results'].length; i++) {
            if(this.divisionItems['Results'][i].division.indexOf(trimmedStr) !== -1) {
                console.log('Value exist');
                this.buName = this.divisionItems['Results'][i].bu;
                this.headName = this.divisionItems['Results'][i].head;
                break;
            }
            else {
                console.log('No !!');
            }
          }
    }
    }
}