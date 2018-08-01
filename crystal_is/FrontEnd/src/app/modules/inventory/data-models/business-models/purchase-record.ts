export class PurchaseRecord {

    constructor(param:any){
        this.setPrice(param.price);
        this.setDate(param.date);
        this.setQuantity(param.quantity);
    }//constructor

    //mutators
    setPrice(given_price:number):void{this.price=given_price;}
    setDate(given_date:Date):void{this.date=given_date;}
    setQuantity(given_quantity):void{this.quantity=given_quantity;}

    //accessors
    getPrice():number{return this.price;}
    getDate():Date{return this.date;}
    getQuantity():number{return this.quantity;}

    //data members
    private price:number;
    private date:Date;
    private quantity:number;
}//class ends
