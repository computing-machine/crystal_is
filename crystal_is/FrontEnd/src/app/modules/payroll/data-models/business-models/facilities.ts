
export class Facilities{

    //API
    constructor(facilities:any){

        this.setBasic(facilities.basic);
        this.setHomeAllowance(facilities.home_allowance);
        this.setConveyanceAllowance(facilities.constructor);
        this.setIncrement(facilities.increment);

    }//method
    

    //mutators
    setBasic(given_basic:Number):void{
        this.basic=given_basic;
    }//method

    setHomeAllowance(given_home_allowance:Number):void{
        this.home_allowance=given_home_allowance;
    }//method

    setConveyanceAllowance(given_conveyance_allowance:Number):void{
        this.conveyance_allowance=given_conveyance_allowance;
    }//method

    setIncrement(given_increment:any):void{
        this.increment=given_increment;
    }//method




    //accessors
    getNumber():Number{
        return this.basic;
    }//method
    getHomeAllowance():Number{
        return this.home_allowance;
    }//method
    getConveyanceAllowance():Number{
        return this.conveyance_allowance;
    }//method
    getIncrement():String{
        return this.increment;
    }//method


    //data members
    //private bom:BOM;
    private basic:Number;
    private home_allowance:Number;
    private conveyance_allowance:Number;
    private increment:any;
}
