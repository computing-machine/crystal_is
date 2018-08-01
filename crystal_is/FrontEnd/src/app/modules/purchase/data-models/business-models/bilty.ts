import {BiltyData} from "../json-models/bilty-data";

export class Bilty {
    
    constructor(data:BiltyData){
        this.setStatus(data.status);
        this.setRefNumber(data.ref_number);
    }//constructor

    //mutators
    setStatus(givn_staus:boolean):void{this.status=givn_staus;}
    setRefNumber(given_ref_number:number):void{this.ref_number=given_ref_number;}

    //accessors
    getStatus():boolean{return this.status;}
    getRefNumber():number{return this.ref_number;}

    //data members
    private status:boolean;
    private ref_number:number;
}//class ends
