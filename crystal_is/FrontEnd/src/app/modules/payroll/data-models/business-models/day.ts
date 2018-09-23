import { DayData } from "../json-models/day-data";

export class Day{

    //API
    constructor(day_data:DayData){

        this.setDate(day_data.date);
        this.setStartTime(day_data.start_time);
        this.setEndTime(day_data.end_time);

    }//method
    

    //mutators
    setDate(given_date:number):void{
        this.date=given_date;
    }//method

    setStartTime(given_start_time:number):void{
        this.start_time=given_start_time;
    }//method

    setEndTime(given_end_time:number):void{
        this.end_time=given_end_time;
    }//method




    //accessors
    getDate():number{
        return this.date;
    }//method
    getStartTime():number{
        return this.start_time;
    }//method
    getEndTime():number{
        return this.end_time;
    }//method


    //data members
    private date:number;
    private start_time:number;
    private end_time:number;
}
