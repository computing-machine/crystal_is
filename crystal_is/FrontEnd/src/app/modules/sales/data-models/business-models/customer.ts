
//imports
import {Company} from './company';
import {List} from '../collection-models/list';
import {Person} from './person';

export class Customer extends Person {
    //private members
    private _id : any;
    private company : List<Company>;
    //constructor
    constructor(data ? : any){
        super();
        if(data!=undefined){
            this.setCusId(data._id);
            this.setCusCompanies(data.company);
            this.setName(data.name);
            this.setAddresses(data.address);
            this.setContacts(data.contact_no);
        }//if
    }//constructor

    setCusId(cus_id:any){
        this._id = cus_id;
    }//setCusId
    setCusCompanies(cus_companies : any){
        this.company = new List<Company>();
        for(let cus_company of cus_companies){
            let company = new Company(cus_company);
            this.company.add(company);
        }//for
    }//setCusContact
    
    getCusId():any{
        return this._id
    }//getCustomerId
    getCusCompanies():List<Company>{
        return this.company;
    }//getCusCompany
}//Customer
