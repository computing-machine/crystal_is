
import { Component, OnInit } from '@angular/core';
import {Customer} from '../../../data-models/business-models/customer';
import {List} from '../../../data-models/collection-models/list';
import {Company} from '../../../data-models/business-models/company';
import {Address} from '../../../data-models/business-models/address';
import {CustomerService} from '../../../data-services/customer/customer.service';
import {ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, FormArray,Validators } from '@angular/forms';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  private customer_id : object;
  private updated_customer : Customer;
  private result_customer : Customer;
  private dataStatus : boolean;
  private pre_customer : Customer;
  private update_cus_flag:boolean;
  //.............form variables ..............
  regCusForm : FormGroup;
 
  constructor(private customer_service :  CustomerService,private router : ActivatedRoute,private FB : FormBuilder) { }


  ngOnInit() {
    this.updated_customer = new Customer();
    this.setDataStatus(false);
    this.setupdateCusFlag(false);
    this.router.params.subscribe(params=>{
      if(params.customer_id!=undefined){
         this.setCustomerId(params.customer_id);
         this.customer_service.getCustomerById(this.getCustomerId()).subscribe(customerdata=>{
          this.setpreCustomer(customerdata);
          //........list of previous customer formGroups..............
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
         });
      }//if
    });
    
  }//ngOnInit

get name(){return this.regCusForm.get('name')}
get contacts(){return this.regCusForm.get('contacts')}
get address() {return this.regCusForm.get('addresses')}
get companies(){return this.regCusForm.get('companies')}



setPreviousCompany(company : Company):FormGroup{
  return  this.FB.group({
    'name' : [company.getCompanyName(),[Validators.required] ]
  });
}

setPreviousContacts(contact : string){
  return this.FB.group({
    'cont' : [contact,[Validators.required,Validators.minLength(11),Validators.maxLength(11)]]
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
    'name' : ['',[Validators.required] ]
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
  this.setupdateCusFlag(false);
  //this.updated_customer = new Customer();
  //customerId
  this.updated_customer.setCusId(this.getCustomerId())
  //customer name 
  this.updated_customer.setName(this.regCusForm.get('name').value);
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
  this.customer_service.updateCustomer(this.updated_customer).subscribe(response=>{
    
    this.customer_service.getCustomerById(response._id).subscribe(customer=>{
      this.setresultCustomer(customer);
      this.setupdateCusFlag(true);
    });//resultCustomer
  });//update customer service
}
//more Companies

//...............................customer through service call............
setCustomerId(id:any){
  this.customer_id = id;
}
getCustomerId():object{
  return this.customer_id
}
setresultCustomer(updated_cus_data : any){
  this.result_customer = new Customer(updated_cus_data);
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

setupdateCusFlag(flag:boolean){this.update_cus_flag=flag;}
getupdateCusFlag():boolean{return this.update_cus_flag;}


}
