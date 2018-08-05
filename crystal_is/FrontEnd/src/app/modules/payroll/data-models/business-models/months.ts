import {List} from "../collection-models/list";
import {Day} from "./day";
import { MonthData } from "../json-models/month-data";

export class Month{

    //API
    constructor(month_data:MonthData){

        this.days=new List<Day>();
        this.setMonthNumber(month_data.month_number);
        
        for(let day_data of month_data.days){
            this.days.add(new Day(day_data));
        }//for

    }//method

    //mutators
    setMonthNumber(given_number:Number):void{
        this.month_number=given_number;
    }//method

    //accessors
    getMonthNumber():Number{
        return this.month_number;
    }//method
    getDays():List<Day>{
        return this.days;
    }//method
    


    //data members
    private month_number:Number;
    private days: List<Day>;
}
