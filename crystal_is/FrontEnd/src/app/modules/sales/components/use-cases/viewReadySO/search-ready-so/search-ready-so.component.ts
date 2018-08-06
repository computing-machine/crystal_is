import { Component, OnInit } from '@angular/core';
import {SearchOrderComponent} from '../../../use-cases/viewOrders/search-order/search-order.component';
import { SalesOrder } from '../../../../data-models/business-models/sales-order';
import {List} from '../../../../data-models/collection-models/list';
import {SalesOrderService} from '../../../../data-services/sales_order/sales-order.service';
import {CustomerService} from '../../../../data-services/customer/customer.service';
import {Customer} from '../../../../data-models/business-models/customer';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-ready-so',
  templateUrl: './search-ready-so.component.html',
  styleUrls: ['./search-ready-so.component.css']
})
export class SearchReadySOComponent extends SearchOrderComponent implements OnInit {

  constructor(private SO : SalesOrderService, private cusService : CustomerService, private router : Router) { 
    super();
  }//constructor

  ngOnInit() {
    this.setOrders(new List<SalesOrder>());
    this.setOrderCusList(new List<any>());
    this.SO.getOrdersReady().subscribe(response =>{
      for(let readyOrder of response){
        this.getOrders().add(new SalesOrder(readyOrder));
        this.cusService.getCustomerById(readyOrder.customer_id).subscribe(cus_data=>{
         let customer = new Customer(cus_data);
         this.getOrderCusList().add({"Customer":customer, "Order" : new SalesOrder(readyOrder)});
        });//getCustomers
      }//for
      this.setResultOrders(this.getOrders());
      this.setDataStatus(true);
    });//getReadyOrders
  }//ngOnInit
  
  getOrderDetail(orderId : any){
    this.router.navigateByUrl("Sales/OrderDetailComponent/"+orderId);
  }//detail

}
