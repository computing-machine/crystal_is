
import { Address } from './address';
import {List} from "../../../../app-data-models/collection-models/list";

export class Person {
    //private members
    private name : string;
    private contacts : List<string>;
    private addresses : List<any>;
    

    //constructor
    constructor(){
    }//constructor
    setName(name : string){
        this.name = name;
    }//setname
    setContacts(contacts:any){
        this.contacts = new List<string>();
        for(let contact of contacts){
            this.contacts.add(contact);
        }//for
    }//setContacts
    setAddresses(address : any){
        this.addresses = new List<Address>();
        for(let address_data of address){
            let address = new Address(address_data);
            this.addresses.add(address);
        }//for
    }//setAddresses
    getName():string{
        return this.name;
    }//getname
    getContacts():List<any>{
        return this.contacts;
    }//getContacts
    getAddresses():List<Address>{
        return this.addresses;
    }
}
