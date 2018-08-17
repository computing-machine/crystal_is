import { List } from "../../../../app-data-models/collection-models/list";
import { Payment } from "./payment";
import { InvoiceData } from "../json-models/invoice-data";

export class Invoice {
    
    constructor(data : InvoiceData){
        this.setRefNumber(data.ref_number);
        this.setPayments(new List<Payment>());

        for(let payment_data of data.payments){
            this.getPayments().add(new Payment(payment_data));
        }//for
    }//constructor
    
   setRefNumber(given_ref_number:number):void{this.ref_number=given_ref_number;}//method
   setPayments(given_payments):void{this.payments=given_payments;}

    //accessors
    getRefNumber():Number{return this.ref_number;}//method     
    getPayments():List<Payment>{return this.payments;}//method

    //data members
    private ref_number:number;
    private payments:List<Payment>;
     
}//Invoice
