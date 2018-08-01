import {List} from "../collection-models/list";
import {Days} from "./days";

export class Month{

    //API
    constructor(months:any){

       
        this.setNumber(months.number);
        this.setDays(months.days);


    }//method


    //mutators
    setNumber(given_number:Number):void{
        this.number=given_number;
    }//method
    setDays(given_days:List<Days>):void{
        this.days=given_days;
    }//method





    //accessors
    getNumber():Number{
        return this.number;
    }//method
    getDays():List<Days>{
        return this.days;
    }//method
    


    //data members
    //private bom:BOM;
    private number:Number;
    private days: List<Days>;
}
