import { Pipe, PipeTransform } from '@angular/core';
import { IRunRequest } from "../rtb.interfaces/rtb-grid.interface";

@Pipe({
    name: 'RTBGridSearch'
})

export class RTBGridSearchPipe implements PipeTransform {

    contains(main: String, searchOn: String): boolean {
        console.log(`main ${main} term ${searchOn}`);
        return main.toLowerCase().indexOf(searchOn.toLowerCase()) >= 0;
    }

    searchEverything(spendingrequest:any,searchOn:string): boolean {
         return this.contains(spendingrequest.RunInitiativeName, searchOn) ||
             this.contains(spendingrequest.RunID, searchOn) ||
             this.contains(spendingrequest.RunDivision, searchOn)||
             this.contains(spendingrequest.RunAcctExec, searchOn)||
             this.contains(spendingrequest.RunStatus, searchOn);
    }

    transform(value: any, ...args: any[]): any {

        var spendingrequests: any[] = <any[]>value;
                
        var searchOn='' ;
        if(args.length>=1)
            searchOn=args[0];

        console.log("working....");        

        if (searchOn=='')   
            return spendingrequests; 
        else 
            return spendingrequests.filter (spendingrequest => this.searchEverything(spendingrequest,searchOn));         
    }    
}