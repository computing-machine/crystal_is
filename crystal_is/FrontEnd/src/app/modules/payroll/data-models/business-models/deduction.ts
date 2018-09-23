import { DeductionData } from "../json-models/deduction-data";
import { List } from "../../../../app-data-models/collection-models/list";
import { Payment } from "../../../purchase/data-models/business-models/payment";

export class Deduction{

    //API
    constructor(deduction_data:DeductionData){

        this.setCategoryId(deduction_data.category_id);
        this.setTotalAmount(deduction_data.total_amount);
        this.setDeductionPerMonth(deduction_data.deduction_per_month);
        this.setRemainingBalance(deduction_data.remaining_balance);
        this.payments=new List<Payment>();
        for(let payment of deduction_data.payments){
            this.payments.add(new Payment(payment));
        }//for

    }//method
    

    //mutators
    setCategoryId(given_category_id:object):void{this.category_id=given_category_id;}//method
    setTotalAmount(given_total_amount:number):void{this.total_amount=given_total_amount;}//method
    setDeductionPerMonth(given_deduction_per_month):void{this.deduction_per_month=given_deduction_per_month;}
    setRemainingBalance(given_remaining_balance:number):void{this.remaining_balance=given_remaining_balance;}

    //accessors
    getCategoryId():object{return this.category_id;}//method
    getTotalAmount():number{return this.total_amount;}//method

    //data members
    private category_id:object;
    private total_amount:number;
    private deduction_per_month:number;
    private remaining_balance:number;
    private payments:List<Payment>;
    
}//class ends
