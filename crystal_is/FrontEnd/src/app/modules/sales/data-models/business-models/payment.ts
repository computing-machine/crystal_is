

export class Payment {
    //private members
    private date : any;
    private amount : number
    //constructor
    constructor(payment_data:any){
        this.setDate(payment_data.date);
        this.setAmount(payment_data.amount);
    }//constructor
    setDate(date:any){
        this.date = date;
    }//setDate
    setAmount(amount:number){
        this.amount = amount;
    }//setAmount
    getDate():any{
        return this.date;
    }//getDate
    getAmount():number{
        return this.amount;
    }//getAmount

}
