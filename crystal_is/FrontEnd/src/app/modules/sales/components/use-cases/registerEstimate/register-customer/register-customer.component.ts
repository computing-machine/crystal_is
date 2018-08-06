import { Component, OnInit } from '@angular/core';
import {Customer} from '../../../../data-models/business-models/customer';
import {List} from '../../../../data-models/collection-models/list';
import {CustomerService} from '../../../../data-services/customer/customer.service';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, FormArray,Validators } from '@angular/forms';


@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {

  private customer : Customer;
  private result_customer : Customer;
  private dataStatus : boolean;
  //.............form variables ..............
  regCusForm : FormGroup;
  company : FormGroup;
  contact : FormGroup;
  address : FormGroup;
  private id : any;



  constructor( private customer_service :  CustomerService,private router : Router,private FB : FormBuilder) { }

  ngOnInit() {
   
    //first company
    this.company= this.FB.group({
      'name' : ['',[Validators.required]]
    });
    //firstContact
    this.contact = this.FB.group({
      'cont' : ['',[Validators.required,Validators.minLength(11),Validators.maxLength(11)]  ]
    });
    //firstAddress
    this.address = this.FB.group({
      'address' : ['',[Validators.required] ]
    });

    //register Customer Form
    this.regCusForm = this.FB.group({
      name : ['',[Validators.required] ],
      companies : this.FB.array([this.company]),
      contacts : this.FB.array([this.contact]),
      addresses : this.FB.array([this.address])
    });
   
  }//ngOnInit
  
  
get name(){return this.regCusForm.get('name')}
get contacts(){return this.regCusForm.get('contacts')}
get addresses() {return this.regCusForm.get('addresses')}
get companies(){return this.regCusForm.get('companies')}

  //.....................MORE COMPANIES..................
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
      let contact = this.FB.group({
        'cont' : ['',[Validators.required,Validators.minLength(11),Validators.maxLength(11)] ]
      });
      this.ContactForm.push(contact);
    }//MoreContacts
    get ContactForm(){return this.regCusForm.get('contacts') as FormArray}//get ContactForm
    deleteContact(i){this.ContactForm.removeAt(i)}//DELETE CONTACT

  //.....................MORE CONTACTS ENDS ..........................

  //......................MORE ADRESSES..............................
  MoreAddresses(){
    let address = this.FB.group({
      'address' : ['',[Validators.required]]
    });
    this.AddressForm.push(address);
  }//MoreAddresses
  get AddressForm(){return this.regCusForm.get('addresses') as FormArray;}
  deleteAddress(i){this.AddressForm.removeAt(i);}

  //..........................END OF ADDRESSES .......................

  submit(){
    this.customer = new Customer();
    //customer name 
    this.customer.setName(this.regCusForm.get('name').value);
    //customer companies
    this.customer.setCusCompanies(this.regCusForm.get('companies').value);
    //customer addresses
    this.customer.setAddresses(this.regCusForm.get('addresses').value);
    //customer contacts
    let contact = new List<string>();
    for(let i of this.ContactForm.value){
      contact.add(i.cont);
    }//for
    this.customer.setContacts(contact);
    //console.log(this.customer);
    this.customer_service.postCustomer(this.customer).subscribe(response=>{
      this.setCusId(response._id)
      this.resultCustomer(response);
      this.setDataStatus(true);
    });
}
  //more Companies

  //.........................................
  resultCustomer(data : any){
    this.result_customer = new Customer(data);
  }//resultCustomer
  getResultCustomer():Customer{return this.result_customer;}//getResultCustomer
  setDataStatus(flag : boolean){this.dataStatus = flag;}//setDataStatus
  getDataStatus():boolean{return this.dataStatus;}

  sendCusToRegEstimate( id : any){
   this.router.navigateByUrl("Sales/registerEstimate/"+id);
  }//sendCusToRegEstimate
  setCusId(id : any){
    this.id = id;
   
  }
  getCusId():any{
    return this.id;
  }
}

