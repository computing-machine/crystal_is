import { Component, OnInit, Type } from '@angular/core';
import {Customer} from '../../../data-models/business-models/customer';
import {List} from "../../../../../app-data-models/collection-models/list";
import {Company} from '../../../data-models/business-models/company';
import {Address} from '../../../data-models/business-models/address';
import {CustomerService} from '../../../data-services/customer/customer.service';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, FormArray,Validators } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {
  private updated_customer : Customer;
  private result_customer : Customer;
  private dataStatus : boolean;
  private pre_customer : Customer;
  
  //.............form variables ..............
  regCusForm : FormGroup;
  nameForm : FormGroup;
 
  constructor(private customer_service :  CustomerService,private router : Router,private FB : FormBuilder) { }

  //first company
  ngOnInit() {
    this.setDataStatus(false);
    let id = '5b3ddb83fb6fc03328fa69d4';
    this.customer_service.getCustomerById(id).subscribe(customerdata=>{
      this.setpreCustomer(customerdata);
     let com_arr = [];
      let con_arr = [];
      let add_arr = [];
      for(let i of this.getpreCustomer().getCusCompanies()){
        com_arr.push(this.setPreviousCompany(i));
      }//add pre Com
      for(let i of this.getpreCustomer().getContacts()){
        con_arr.push(this.setPreviousContacts(i));
      }//add pre Con
      for(let i of this.getpreCustomer().getAddresses()){
        add_arr.push(this.setPreviousAddress(i));
      }//add pre address


     //register Customer Form
  this.regCusForm = this.FB.group({
      name : [this.getpreCustomer().getName(),[
        Validators.required
      ]
    ],
    companies : this.FB.array(com_arr),
    contacts :  this.FB.array(con_arr),
    addresses : this.FB.array(add_arr)
  });

  
  this.setDataStatus(true);

  });//customer service

}//ngOnInit

get name(){return this.regCusForm.get('name')}
get contacts(){return this.regCusForm.get('contacts')}
get address() {return this.regCusForm.get('addresses')}
get companies(){return this.regCusForm.get('companies')}

setPreviousCompany(company : Company):FormGroup{
  return  this.FB.group({
    'name' : [company.getCompanyName(),[Validators.required]]
  });
}

setPreviousContacts(contact : string){
  return this.FB.group({
    'cont' : [contact,[Validators.required,Validators.min(18),Validators.minLength(11),Validators.maxLength(11)]]
  })
}//setPreviousContacts

setPreviousAddress(address : Address){
  return this.FB.group({
    'address' : [address.getAddress(),[Validators.required]]
  })
}//setPreviousAddress

//.......................More Comp............................
MoreCompany(){
  const company= this.FB.group({
    'name' : ['',[Validators.required]]
  });
  this.CompanyForm.push(company)
}//MoreCompany
get CompanyForm(){return this.regCusForm.get('companies') as FormArray;}//getCompanyForm
deleteCompany(i){this.CompanyForm.removeAt(i)}//DELETE COMPANY

//................END OF MORE COMPANIES..................

//............... MORE CONTACTS ........................

  MoreContacts(){
    let contact =  this.FB.group({
      'cont' : ['',[Validators.required,Validators.minLength(11),Validators.maxLength(11)]]
    })
    this.ContactForm.push(contact);
  }//MoreContacts
  get ContactForm(){return this.regCusForm.get('contacts') as FormArray}//get ContactForm
  deleteContact(i){this.ContactForm.removeAt(i)}//DELETE CONTACT

//.....................MORE CONTACTS ENDS ..........................

//......................MORE ADRESSES..............................
MoreAddresses(){
  let address = this.FB.group({
    'address' : ['',[Validators.required]]
  })
  this.AddressForm.push(address);
}//MoreAddresses
get AddressForm(){return this.regCusForm.get('addresses') as FormArray;}
deleteAddress(i){this.AddressForm.removeAt(i);}

//..........................END OF ADDRESSES .......................

update(){
 
  /*this.updated_customer = new Customer();
  //customer name 
  this.updated_customer.setName(this.regCusForm.get('Name').value);
  //customer companies
  this.updated_customer.setCusCompanies(this.regCusForm.get('companies').value);
  //customer addresses
  this.updated_customer.setAddresses(this.regCusForm.get('addresses').value);
  //customer contacts
  let contact = new List<string>();
  for(let i of this.ContactForm.value){
    contact.add(i.cont);
  }//for
  this.updated_customer.setContacts(contact);
  //................call customer service to update data.......................
  console.log(this.updated_customer);*/
}
//more Companies

//...............................customer through service call............
resultCustomer(data : any){
  this.result_customer = new Customer(data);
}//resultCustomer
getResultCustomer():Customer{return this.result_customer;}//getResultCustomer
setDataStatus(flag : boolean){this.dataStatus = flag;}//setDataStatus
getDataStatus():boolean{return this.dataStatus;}
setpreCustomer(cus_data : any){
  this.pre_customer = new Customer(cus_data);
}//getPreCustomer
getpreCustomer():Customer{
  return this.pre_customer;
}//getpreCustomer




}//class



  

