import { Component, OnInit } from '@angular/core';
import {SearchOrderComponent} from '../../../use-cases/viewOrders/search-order/search-order.component';
import { SalesOrder } from '../../../../data-models/business-models/sales-order';
import {List} from '../../../../data-models/collection-models/list';
import {SalesOrderService} from '../../../../data-services/sales_order/sales-order.service';
import {CustomerService} from '../../../../data-services/customer/customer.service';
import {Customer} from '../../../../data-models/business-models/customer';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-delivered-so',
  templateUrl: './search-delivered-so.component.html',
  styleUrls: ['./search-delivered-so.component.css']
})
export class SearchDeliveredSOComponent  extends SearchOrderComponent implements OnInit {

  constructor(private SO : SalesOrderService, private cusService : CustomerService, private router : Router) { 
    super();
  }

  ngOnInit() {
    this.setOrders(new List<SalesOrder>());
    this.setOrderCusList(new List<any>());
    this.SO.getdeliveredOrders().subscribe(response =>{
      for(let delivered of response){
        this.getOrders().add(new SalesOrder(delivered));
        this.cusService.getCustomerById(delivered.customer_id).subscribe(cus_data=>{
         let customer = new Customer(cus_data);
         this.getOrderCusList().add({"Customer":customer, "Order" : new SalesOrder(delivered)});
        });//getCustomers
      }//for
      this.setResultOrders(this.getOrders());
      this.setDataStatus(true);
    });//getConfirmedOrders
  }//ngOnInit

  getOrderDetail(orderId : any){
    this.router.navigateByUrl("Sales/OrderDetailComponent/"+orderId);
  }//detail

}
