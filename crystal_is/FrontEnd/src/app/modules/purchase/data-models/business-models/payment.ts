import { PaymentData } from "../json-models/payment-data";

export class Payment {

    constructor(data : PaymentData){
        this.setDate(data.date);
        this.setAmount(data.amount);
        this.setRecieptNumber(data.reciept_number);
        this.setNote(data.note);
    }//constructor

    //mutators
    setDate(given_Date:Date):void{this.date=given_Date;}//method
    setAmount(given_Amount:Number):void{this.amount=given_Amount;}//methods
    setRecieptNumber(given_number:number):void{this.reciept_number=given_number;}
    setNote(given_note:string):void{this.note=given_note;}
    
    //accessors
    getDate():Date{return this.date;}//method
    getAmount():Number{return this.amount;}
    getRecieptNumber():number{return this.reciept_number;}
    getNote():string{return this.note;}
    
    //data members
    private date:Date;
    private amount:Number;
    private reciept_number:number;
    private note:string;

}//class ends
