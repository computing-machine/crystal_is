import { Component, OnInit,Inject } from '@angular/core';
import {SearchOrderComponent} from '../../../use-cases/viewOrders/search-order/search-order.component';
import { SalesOrder } from '../../../../data-models/business-models/sales-order';
import {List} from "../../../../../../app-data-models/collection-models/list";
import {SalesOrderService} from '../../../../data-services/sales_order/sales-order.service';
import {CustomerService} from '../../../../data-services/customer/customer.service';
import {Customer} from '../../../../data-models/business-models/customer';
import {Router} from '@angular/router';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-search-soin-production',
  templateUrl: './search-soin-production.component.html',
  styleUrls: ['./search-soin-production.component.css']
})
export class SearchSOInProductionComponent extends SearchOrderComponent implements OnInit {

  constructor( @Inject(LOCAL_STORAGE) private storage: WebStorageService, private SO : SalesOrderService, private cusService : CustomerService, private router : Router) { 
    super();
  }//constructor

  ngOnInit() {
    this.setOrders(new List<SalesOrder>());
    this.setOrderCusList(new List<any>());
    this.SO.getOrdersInProductionBySalPerId(this.storage.get('user_id')).subscribe(response =>{
      for(let progressed of response){
        this.getOrders().add(new SalesOrder(progressed));
        this.cusService.getCustomerById(progressed.customer_id).subscribe(cus_data=>{
         let customer = new Customer(cus_data);
         this.getOrderCusList().add({"Customer":customer, "Order" : new SalesOrder(progressed)});
        });//getCustomers
      }//for
      this.setResultOrders(this.getOrders());
      this.setDataStatus(true);
    });//getConfirmedOrders
  }//ngOnInit

  getOrderDetail(orderId : any){
    this.router.navigateByUrl("Sales/orderInProduction/"+orderId);
  }//detail


}
