
export class Advantages{

    //API
    constructor(advantages:any){

        this.setSales(advantages.sales);
        this.setCommission(advantages.commission);

    }//method
    

    //mutators
    setSales(given_sales:number):void{
        this.sales=given_sales;
    }//method

    setCommission(given_commission:number):void{
        this.commission=given_commission;
    }//method




    //accessors
    getSales():number{
        return this.sales;
    }//method
    getCommission():number{
        return this.commission;
    }//method
    


    private sales:number;
    private commission:number;
}
