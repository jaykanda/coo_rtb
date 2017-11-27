import { Component,OnInit } from '@angular/core';
import { DataService } from "../rtb.services/utils-data.service";

@Component({
  moduleId:module.id,
  selector: 'my-navigation',
  templateUrl: '../rtb.templates/utils-navigation.component.html',
})
export class NavigationComponent  {
    // menu=[
    //     {display:'Home', link:'/'},
    //     {display:'Books', link:'/books'},
    //     {display:'BarChart', link:'/barchart'},
    //     {display:'Contact', link:'/contact'},       
    // ] 
    // @Output() showSideBarChange = new EventEmitter<number>();

    showSideBar:boolean;

    constructor(private data:DataService){
        
    }
    ngOnInit(){
        this.data.showSideBarCurValue.subscribe(showSideBar=>this.showSideBar=showSideBar)
    }
    showSideBarButtonClick=function(){        
        this.showSideBar=!this.showSideBar;
        this.data.showSideBarButtonClick(this.showSideBar)
        // this.showSideBarChange.emit(this.showSideBar);
        console.log(this.showSideBar);
    }
    usermenu=[
        {icon:'fa fa-user',display:'', link:'/#',submenu:[{icon:'fa fa-fw fa-user',display:'Profile', link:'/profile'},{icon:'fa fa-fw fa-envelope',display:'Inbox', link:'/inbox'},{icon:'fa fa-fw fa-gear',display:'Settings', link:'/settings'},{icon:'fa fa-fw fa-power-off',display:'Log Out', link:'/logout'},]},
        
    ] 

    alertmenu=[
        {icon:'fa fa-bell',display:'', link:'/#',submenu:[{icon:'label label-warning',display:'Normal Alert', link:'/normalalert'},{icon:'label label-danger',display:'Cretical Alert', link:'/creticalalert'},]},             
    ]  
}