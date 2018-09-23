import{ DeliverableData } from "../json-models/deliverable-data";
import {Recieving} from "./recieving";
import { List } from "../../../../app-data-models/collection-models/list";

export class Deliverable {

    constructor(data : DeliverableData){
        
        this.setQuantity(data.quantity);
        this.setPrice(data.price);
        this.setRawMatId(data.rm_id);
        this.setUnitId(data.unit_id);
        this.setRecievings(new List<Recieving>());

        for(let recieving_data of data.recievings){
            this.getRecievings().add(new Recieving(recieving_data));
        }//for
    }//constructor
    
    //mutators
    setQuantity(given_quantity:number):void{this.quantity=given_quantity;}//method
    setRawMatId(given_rm_id:object):void{this.rm_id=given_rm_id;}
    setUnitId(given_unit_id:object):void{this.unit_id=given_unit_id;}
    setPrice(given_price:number):void{this.price=given_price;}
    setRecievings(given_recievings:List<Recieving>){this.recievings=given_recievings;}

    //accessors
    getQuantity():number{return this.quantity;}//method
    getPrice():number{return this.price;}
    getUnitId():object{return this.unit_id;}
    getRawMatId():object{return this.rm_id;}
    getRecievings():List<Recieving>{return this.recievings;}

    //data members
    private rm_id:object;
    private unit_id:object;
    private price:number;
    private quantity:number;
    private recievings:List<Recieving>;
}//class ends



