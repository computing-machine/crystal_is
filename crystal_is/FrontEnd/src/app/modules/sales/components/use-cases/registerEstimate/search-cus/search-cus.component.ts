import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../../../data-services/customer/customer.service';
import {List} from "../../../../../../app-data-models/collection-models/list";
import {Customer} from '../../../../data-models/business-models/customer';
import { SearchPersonComponent} from '../../viewPerson/search-person/search-person.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-cus',
  templateUrl: './search-cus.component.html',
  styleUrls: ['./search-cus.component.css']
})
export class SearchCusComponent extends SearchPersonComponent implements OnInit {
  private selected_cus : Customer;
  constructor(private router:Router, private customer_service : CustomerService) { 
    super();
  }

  ngOnInit() {
    //private members declaration
    this.setDataReady(false);
    this.setPersons(new List<Customer>());
    this.customer_service.getCustomers().subscribe(data=>{
      for(let customer_data of data){
        this.getPersons().add(new Customer(customer_data));//set customer 
      }//for
      this.setResultPersons(this.getPersons());
      this.setDataReady(true);
    });
  }//ngOnInit

  getDetail(id:any){
    this.router.navigateByUrl("Sales/customerDetail/"+id);
  }//getDetail

  setSelectedCustomer(person : any ){
    this.selected_cus = person;
  }//searchCustomer
  
  getSelectedCustomer():Customer{
    return this.selected_cus;
  }//getSelectedCustomer

  sendCusToRegEstimate( ){
    this.router.navigateByUrl("Sales/registerEstimate/"+this.selected_cus.getCusId());
  }//sendCusToRegEstimate

}
