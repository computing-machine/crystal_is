import { FacilityData } from "../json-models/facility-data";

export class Facility {

    constructor(facility_data:FacilityData){
        this.setName(facility_data.name);
        this.setAmount(facility_data.amount);
        this.setDescription(facility_data.description);
    }//constructor

    //mutators
    setName(given_name:string):void{this.name=given_name;}
    setAmount(given_amount):void{this.amount=given_amount;}
    setDescription(given_des):void{this.description=given_des;}

    //accessors
    getName():string{return this.name;}
    getAmount():number{return this.amount;}
    getDescription():string{return this.description;}

    //data members
    private name:string;
    private amount:number;
    private description:string;
}//class ends
