import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {CustomerService} from '../../../data-services/customer/customer.service';
import {Customer} from '../../../data-models/business-models/customer';

@Component({
 // selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']

})
export class DeleteCustomerComponent implements OnInit {
  private cusId : any;
  private deleteHtmlFlag : boolean;
  constructor(private route : ActivatedRoute,private cus_ser : CustomerService,private router : Router) { }

  ngOnInit() {
    this.setFlag(false);
    this.route.params.subscribe(params=>{this.setCustomerId(params.id)});//getcustomerID
    this.removeCustomer(this.getCustomerId());
    this.setFlag(false);
  }//ngOnInit
  setCustomerId(id : any){
    this.cusId = id;
  }//setCustomerId
  getCustomerId():any{return this.cusId;}

  removeCustomer(cusId : any){
    this.cus_ser.getCustomerById(cusId).subscribe(response=>{
   let customer = new Customer(response);
   this.cus_ser.deleteCustomer(customer).subscribe(result=>{
     this.router.navigateByUrl('Sales/searchCustomer');
     alert("Your item has deleted")
   })
 })
 }//removeCustomer
 setFlag(flag : boolean){
  this.deleteHtmlFlag = flag;
 }//setFlag
 getFlag():boolean{return this.deleteHtmlFlag;}


}
