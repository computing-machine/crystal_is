import { PurchaseOrderStatusRecordData } from "../json-models/purchase-order-status-record-data";

export class PurchaseOrderStatusRecord {

    constructor(data:PurchaseOrderStatusRecordData){
        this.setDate(data.date);
        this.setStatus(data.status);
    }//status
    
    //mutators
    setStatus(given_status:string):void{this.status=given_status;}
    setDate(given_date):void{this.date=given_date;}

    //accessors
    getStatus():string{return this.status;}
    getDate():Date{return this.date;}

    //data memebrs
    private status:string;
    private date:Date;
}//class ends
