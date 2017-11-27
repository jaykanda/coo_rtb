import {NgModule} from '@angular/core';

import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from '@angular/router';

import { FormsModule } from "@angular/forms";

import {NavigationComponent} from '../rtb.components/utils-navigation.component';
import {SideNavComponent} from '../rtb.components/utils-side-nav.component';
import {NoOfRowsDropDownComponent} from '../rtb.components/utils-no-of-rows-dropdown.component';
import {FilterOnFieldValueComponent} from '../rtb.components/utils-filter-on-field-value.component';

import {DataService} from "../rtb.services/utils-data.service";
import {NoOfRowsService} from "../rtb.services/utils-no-of-rows-dropdown.service";
import {FilterOnFieldValueService} from '../rtb.services/utils-filter-on-field-value.service';

@NgModule({
    imports: [        
        BrowserModule,      
        RouterModule,  
        FormsModule,      
    ],
    exports: [
        NavigationComponent,
        SideNavComponent,
        NoOfRowsDropDownComponent,  
        FilterOnFieldValueComponent,      
    ],
    declarations: [
        NavigationComponent,  
        SideNavComponent,
        NoOfRowsDropDownComponent, 
        FilterOnFieldValueComponent,   
    ],
    providers: [
       DataService,
       NoOfRowsService,
       FilterOnFieldValueService,
    ],
})
export class UtilsModule { }