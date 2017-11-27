import {NgModule} from '@angular/core';

import {BrowserModule} from "@angular/platform-browser";
import {RouterModule,Route} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

import {UtilsModule} from '../utils.module/utils.module';

import {RTBGridSearchService}from '../rtb.services/rtb-grid-search.service';
import {RTBGridService}from '../rtb.services/rtb-grid.service';
import { RTBTooltipService } from '../rtb.services/rtb-erf-tooltip.service';
import { RESTServiceCall } from "../rtb.services/rtb-common.service";
import { RTBNewRequestService } from "../rtb.services/rtb-new-sr.service";
import { RTBViewSRDetailsService } from "../rtb.services/rtb-viewsr.service";
import {RTBGridDashBoardService} from '../rtb.services/rtb-dashboard.service';
import {RTBEngageviewService} from '../rtb.services/rtb-engageview.service';
import {RTBApprovedViewSRDetailsService} from '../rtb.services/rtb-approvedview.service';

import { RTBPreGCMCSRComponent } from "../rtb.components/rtb-pregcmc-sr.component";
import {RTBGridComponent} from '../rtb.components/rtb-grid.component';
import {RTBDashboardComponent} from '../rtb.components/rtb-dashboard.component';
import {RTBPrnComponent} from '../rtb.components/rtb-prn.component';
import {RTBNewSRComponent} from '../rtb.components/rtb-new-sr.component';
import {RTBViewSRComponent} from '../rtb.components/rtb-view-sr.component';
import {RTBEngageviewSRComponent} from '../rtb.components/rtb-engviewer.component';

import { HoveredContent } from '../rtb.components/rtb.tooltipcontent.component';
import { ToolTipComponent } from '../rtb.components/rtb.tooltip.component';
import { DynStakeHolderFieldsComponent } from '../rtb.components/rtb-new-srdynstakefields.component';
import {RTBResolveSRComponent} from '../rtb.components/rtb-resolve-sr.component';
import {RTBRenewSRComponent} from '../rtb.components/rtb-renew-sr.component';
import {RTBApprovedSRComponent} from '../rtb.components/rtb-approved-sr.component';
import {TestComponent} from '../rtb.components/test.component';


import {RTBGridSearchPipe} from "../rtb.pipes/rtb-grid-search.pipe";

 var routes:Route[]=[  
        {path: 'spendingrequest/test' , component:TestComponent},
        {path: 'spendingrequest/pregcmc' , component:RTBPreGCMCSRComponent},
        {path: 'spendingrequest/veiwapproved' , component:RTBApprovedSRComponent},
        {path: 'spendingrequest/veiwapproved/:id', component:RTBApprovedSRComponent },        
        {path: 'spendingrequest/renew' , component:RTBRenewSRComponent},
        {path: 'spendingrequest/resolve' , component:RTBResolveSRComponent},  
        {path: 'spendingrequest/view/:id' , component:RTBViewSRComponent},  
        {path: 'spendingrequest/new' , component:RTBNewSRComponent},
        {path: 'spendingrequest/prn' , component:RTBPrnComponent},  
        {path: 'spendingrequests' , component:RTBGridComponent},
        {path: 'engagementsr/view' , component:RTBGridComponent},
        {path: 'engviewsr/view/:id', component: RTBEngageviewSRComponent },
        {path: 'dashboard' , component:RTBDashboardComponent},              
 ];

@NgModule({
    imports: [        
        BrowserModule,      
        RouterModule.forChild(routes), 
        HttpModule,        
        FormsModule,
        UtilsModule,FormsModule,ReactiveFormsModule
    ],
    exports: [          
        RTBDashboardComponent,        
        RTBPrnComponent,
        RTBNewSRComponent,
        RTBGridComponent,   
        RTBViewSRComponent,
        RTBGridSearchPipe,
        ToolTipComponent,
        RTBResolveSRComponent,
        RTBRenewSRComponent,
        RTBApprovedSRComponent,
        RTBPreGCMCSRComponent,
        RTBEngageviewSRComponent,
        TestComponent
    ],
    declarations: [
        RTBDashboardComponent,        
        RTBPrnComponent,
        RTBNewSRComponent, 
        RTBGridComponent, 
        RTBViewSRComponent,  
        RTBGridSearchPipe,
        HoveredContent,
        ToolTipComponent,
        DynStakeHolderFieldsComponent,
        RTBResolveSRComponent,
        RTBRenewSRComponent,
        RTBApprovedSRComponent,
        RTBPreGCMCSRComponent,
        RTBEngageviewSRComponent,
        TestComponent
    ],
    entryComponents: [HoveredContent],
    providers: [
        RTBGridSearchService,
        RTBGridService,
        RESTServiceCall,
        RTBNewRequestService,
        RTBViewSRDetailsService,
        RTBTooltipService,
        RTBGridDashBoardService,
        RTBEngageviewService,
        RTBApprovedViewSRDetailsService
    ],
})
export class RTBModule { }