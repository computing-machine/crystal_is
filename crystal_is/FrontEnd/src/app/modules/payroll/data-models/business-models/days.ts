
export class Days{

    //API
    constructor(days:any){

        this.setDate(days.date);
        this.setStartTime(days.start_time);
        this.setEndTime(days.end_time);

    }//method
    

    //mutators
    setDate(given_date:Date):void{
        this.date=given_date;
    }//method

    setStartTime(given_start_time:Date):void{
        this.start_time=given_start_time;
    }//method

    setEndTime(given_end_time:Date):void{
        this.end_time=given_end_time;
    }//method




    //accessors
    getDate():Date{
        return this.date;
    }//method
    getStartTime():Date{
        return this.start_time;
    }//method
    getEndTime():Date{
        return this.end_time;
    }//method


    //data members
    //private bom:BOM;
    private date:Date;
    private start_time:Date;
    private end_time:Date;
}
