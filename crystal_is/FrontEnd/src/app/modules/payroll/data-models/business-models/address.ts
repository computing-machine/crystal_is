import { AddressData } from "../json-models/address-data";

export class Address {

    constructor(address_data:AddressData){
        this.setCity(address_data.city);
        this.setState(address_data.state);
        this.setCountry(address_data.country);
        this.setNote(address_data.note);
    }//constructor

    //mutators
    setCity(given_city):void{this.city=given_city;}
    setState(given_state):void{this.state=given_state;}
    setCountry(given_country):void{this.country=given_country;}
    setNote(given_note):void{this.note=given_note;}

    //accessors
    getCity():string{return this.city;}
    getState():string{return this.state;}
    getCounry():string{return this.country;}
    getNote():string{return this.note;}

    //data members
    city:string;
    state:string;
    country:string;
    note:string;
}//class ends
