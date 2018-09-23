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

  private saleOrder_id : any;
  private ready_state : boolean;
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

  setModal(event_target : any , id : any){
    this.saleOrder_id = id
    event_target.setAttribute("data-toggle","modal");
    event_target.setAttribute("data-target","#myModal");
    //console.log(event_target);
  }
  getModal():any{
    return this.saleOrder_id;
  }

  readyState(orderId : any){
    this.setReadyState(false);
    let order = SalesOrder;
    this.SO.getSalesOrderById(orderId).subscribe(order=>{
      order = new SalesOrder(order[0]);
      this.SO.moveToReadyState(order).subscribe(result=>{
        //delete item
        let orders = this.getOrders();
        let index = orders.getIndexOf(order);
        orders.delete(index);
        this.setOrders(orders);
        
        this.setReadyState(true);
      })
    });//get salesOrder
  }//readyState

  PayBill(orderId : any){
    this.router.navigateByUrl("Sales/payBill/"+orderId);
  }//PayBill


  setReadyState(flag : boolean){this.ready_state = flag}
  getReadyState(){return this.ready_state;}

}
