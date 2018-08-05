import { ContactData } from "../json-models/contact-data";

export class Contact {

    constructor(contact_data:ContactData){
        this.setDescription(contact_data.description);
        this.setNumber(contact_data.number);
    }//constructor

    //mutators
    setDescription(given_description:string){this.description=given_description;}
    setNumber(given_number:string){this.number=given_number;}

    //accessors
    getDescription():string{return this.description}
    getNumber():string{return this.number;}

    //data members
    description:string;
    number:string;
}//class ends
