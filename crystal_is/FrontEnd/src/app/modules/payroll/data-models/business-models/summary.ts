import { SummaryData } from "../json-models/summary-data";

export class Summary{

    //API
    constructor(summary_data:SummaryData){

        this.setEffectiveFrom(summary_data.effective_from);
        this.setExpiryDate(summary_data.expiry_date);
        this.setDescription(summary_data.description);

    }//method
    

    //mutators
    setEffectiveFrom(given_effective_from:Date):void{
        this.effective_from=given_effective_from;
    }//method

    setExpiryDate(given_expiry_date:Date):void{
        this.expiry_date=given_expiry_date;
    }//method

    setDescription(given_description:String):void{
        this.description=given_description;
    }//method




    //accessors
    getEffectiveFrom():Date{
        return this.effective_from;
    }//method
    getExpiryDate():Date{
        return this.expiry_date;
    }//method
    getDescription():String{
        return this.description;
    }//method


    //data members
    private effective_from:Date;
    private expiry_date:Date;
    private description:String;
}
