import { Injectable } from "@angular/core";
import{BehaviorSubject}from "rxjs/BehaviorSubject"

@Injectable()
export class DataService {
    
    private showSideBar=new BehaviorSubject<boolean>(false);
    showSideBarCurValue=this.showSideBar.asObservable();

    constructor(){}

    showSideBarButtonClick=function(value:boolean){
        this.showSideBar.next(value);
    }

}