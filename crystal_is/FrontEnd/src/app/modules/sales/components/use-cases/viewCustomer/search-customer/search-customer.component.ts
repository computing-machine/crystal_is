
import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../../../data-services/customer/customer.service';
import {List} from '../../../../data-models/collection-models/list';
import {Customer} from '../../../../data-models/business-models/customer';
import { SearchPersonComponent} from '../../viewPerson/search-person/search-person.component';
import {Router} from '@angular/router';


@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css']
})
export class SearchCustomerComponent  extends SearchPersonComponent implements OnInit{

  constructor(private router:Router, private customer_service : CustomerService) {
    super();
   }

  ngOnInit() {
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

  editCustomer(customer_id:any){
    this.router.navigateByUrl("Sales/updateCustomer/"+customer_id);
  }//editCustomer
    

}
