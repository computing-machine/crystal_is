import { Injectable } from '@angular/core';
import {Http,  Headers} from '@angular/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {
 
  constructor(private http: Http) { }
  getCustomers(){
    return this.http.get('http://localhost:3000/Sales/CustomerApi/Customers').pipe(map(res=>{  
      return res.json();
    }));
  }

  getCustomerById(id){
    return this.http.get('http://localhost:3000/Sales/CustomerApi/Customers/'+id).pipe(map(res=>{
      return res.json();
    }));
  }
  
  postCustomer(customer:any){
    let URI = "http://localhost:3000/Sales/CustomerApi/Customers/insert";
    let address = [];
    let contacts = [];
    let companies = []; 

    for(let addres of customer.getAddresses()){
      let add = 
        {
          "address" : addres.getAddress()
        };
        address.push(add);
      }//set Addresses
    
    for(let company of customer.getCusCompanies()){
      let Company = {
        "name" : company.getCompanyName()
      }
      companies.push(Company);
    }//set Companies

    for(let contact of customer.getContacts()){
      contacts.push(contact);
    }//set Contacts
    

  let data = {
    "name"   : customer.getName(),
    "address":address,
    "contact_no" :contacts,
    "company" : companies
  }
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(URI,data,{headers:headers}).pipe(map(res => {
      return res.json();
    }));
      
  }//postCustomer

  updateCustomer(customer : any){
    let address = [];
    let contacts = [];
    let companies = []; 

    for(let addres of customer.getAddresses()){
      let add = 
        {
          "address" : addres.getAddress()
        };
        address.push(add);
      }//set Addresses
    
    for(let company of customer.getCusCompanies()){
      let Company = {
        "name" : company.getCompanyName()
      }
      companies.push(Company);
    }//set Companies

    for(let contact of customer.getContacts()){
      contacts.push(contact);
    }//set Contacts

    let data = {
      "name"   : customer.getName(),
      "address":address,
      "contact_no" :contacts,
      "company" : companies
    }

    let _id = customer.getCusId()
    let URI = "http://localhost:3000/Sales/CustomerApi/Customers/update/"+_id;
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.put(URI,data,{headers:headers}).pipe(map(res => {
      console.log(res.json());
      return res.json();
       }));
  }//updateCustomer


}
