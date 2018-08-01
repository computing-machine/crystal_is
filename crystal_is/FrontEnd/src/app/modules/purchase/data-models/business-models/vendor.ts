
import {Address} from './address';
import { List } from '../collection-models/list';

export class Vendor {
   

    //data members
    private id:object;
    private name:string;
    private addresses:List<Address>;
    private contacts:List<string>;
    private payable:number;

    constructor(vendorData : any){
        this.contacts=new List<string>();
        this.addresses=new List<Address>();
        for(let contact of vendorData.contact_no){
            this.contacts.add(contact);
        }//for

        for(let address of vendorData.address){
            this.addresses.add(new Address(address));
        }//for

        this.setName(vendorData.name);
        this.id=vendorData._id;
        this.setPayables(vendorData.payable);
        
    }

    setName(given_name:string):void{
        this.name=given_name;
    }//method

    setPayables(given_payable:number):void{
        this.payable=given_payable;
    }

    
    getName():string{
        return this.name;
    }//method

    getAddresses():List<Address>{
        return this.addresses;
    }//method
    getContacts():List<string>{
        return this.contacts;
    }//method
    getPayable():number{
        return this.payable;
    }//method
    getId():object{
        return this.id;
    }
    
}
