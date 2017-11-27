import { Component } from '@angular/core';
import { DataService } from "../rtb.services/utils-data.service";

@Component({
  moduleId:module.id,
  selector: 'my-side-nav',
  templateUrl: '../rtb.templates/utils-side-nav.component.html',
})
export class SideNavComponent  {

    
    showSideBar:boolean;
    sidemenu=[
        {icon:'fa fa-fw fa-dashboard',display:'Dashboard', link:'/dashboard'},
        {icon:'fa fa-fw fa-users',display:'Spending Request', link:'/spendingrequests'},               
    ] 

    constructor(private data:DataService){
        
    }

    ngOnInit(){
        this.data.showSideBarCurValue.subscribe(showSideBar=>this.showSideBar=showSideBar)
    }  
}