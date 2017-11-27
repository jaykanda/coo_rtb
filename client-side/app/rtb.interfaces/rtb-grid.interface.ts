export interface IRunRequest{
    RunInitiativeName:string,
    RunID:string;  
    RunDivision:string;
    RunAcctExec:string;
    RunStatus:string;
    RunCosts:string;  
    ActionName:string;
    ActionURL:string; 
        
}
export interface IPagination {
    currentStartingRow : number;
    rowCount : number;
    rowDisplayed : number;
}
export interface IRunRequestService {
    getAll: (count:number,start:number) => IRunRequest[];   
    getStatus(fieldName : string, fieldValue: string, count:number, start:number): IRunRequest[];
}