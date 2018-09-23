import {List} from "../../../../app-data-models/collection-models/list";
import {Payment} from './payment';
import {Builty} from './builty';


export class Invoice {
    //private members
    private payments : List<Payment>;
    private builty : Builty;

    //constructor
    constructor(invoice_data ?:any){
        if(invoice_data!=undefined){
            this.setBuilty(invoice_data.builty);
            this.setPayments(invoice_data.payment);
        }//if
    }
   
    setPayments(payments_data? : any){
        //this.payments = new List<Payment>();
        //this.payments = payments_data;
        if(payments_data!=undefined){
            this.payments = new List<Payment>();
            for(let payment_data of payments_data){
                let payment = new Payment(payment_data);
                this.payments.add(payment);
            }//for
        }//if
    }//setPayments
    setBuilty(builty : any){
        this.builty = new Builty(builty);
    }//setBuilty
    
    getPayments():List<Payment>{
        return this.payments;
    }//getPayments
    getBuilty():Builty{
        return this.builty;
    }//getBuilty
    
}
