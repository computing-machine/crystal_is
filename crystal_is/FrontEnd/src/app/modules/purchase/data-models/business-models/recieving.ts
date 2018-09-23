import { RecievingData } from "../json-models/recieving-data";
import { Bilty } from "./bilty";

export class Recieving {

    constructor(data : RecievingData){
        this.setDate(data.date);
        this.setQuantity(data.quantity);
        this.setNote(data.note);
        this.setBilty(new Bilty(data.bilty));
    }//constructor
    
    //mutators
    setDate(given_Date:Date):void{this.date=given_Date;}//method
    setQuantity(given_Quantity:Number):void{this.quantity=given_Quantity;}//method
    setNote(given_note:string):void{this.note=given_note;}
    setBilty(given_bilty):void{this.bilty=given_bilty;}

    //accessors
    getNote():string{return this.note;}
    getDate():Date{return this.date;}//method
    getQuantity():Number{return this.quantity;}//method
    getBilty():Bilty{return this.bilty;}

    //data members
    private date:Date;
    private quantity:Number;
    private note:string;
    private bilty:Bilty;
}//class ends
