import { Component, OnInit ,Inject} from '@angular/core';
import {SearchOrderComponent} from '../../../use-cases/viewOrders/search-order/search-order.component';
import { SalesOrder } from '../../../../data-models/business-models/sales-order';
import {List} from "../../../../../../app-data-models/collection-models/list";
import {SalesOrderService} from '../../../../data-services/sales_order/sales-order.service';
import {CustomerService} from '../../../../data-services/customer/customer.service';
import {Customer} from '../../../../data-models/business-models/customer';
import {Router} from '@angular/router';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-search-ready-so',
  templateUrl: './search-ready-so.component.html',
  styleUrls: ['./search-ready-so.component.css']
})
export class SearchReadySOComponent extends SearchOrderComponent implements OnInit {

  private saleOrder_id : any;
  private delivery_state : boolean;
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private SO : SalesOrderService, private cusService : CustomerService, private router : Router) { 
    super();
  }//constructor

  ngOnInit() {
    this.setOrders(new List<SalesOrder>());
    this.setOrderCusList(new List<any>());
    this.SO.getOrdersReadyBySalPerId(this.storage.get('user_id')).subscribe(response =>{
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

  setModal(event_target : any , id : any){
    this.saleOrder_id = id
    event_target.setAttribute("data-toggle","modal");
    event_target.setAttribute("data-target","#myModal");
    //console.log(event_target);
  }
  getModal():any{
    return this.saleOrder_id;
  }

  PayBill(orderId : any){
    this.router.navigateByUrl("Sales/payBill/"+orderId);
  }//PayBill

  deliveryState(orderId : any){
    this.setDeliveryState(false);
    let order = SalesOrder;
    this.SO.getSalesOrderById(orderId).subscribe(order=>{
      order = new SalesOrder(order[0]);
      this.SO.moveToDeliveryState(order).subscribe(result=>{
         //delete item
         let orders = this.getOrders();
         let index = orders.getIndexOf(order);
         orders.delete(index);
         this.setOrders(orders);
         
        this.setDeliveryState(true);
      })
    });//get salesOrder
  }//readyState

  setDeliveryState(flag : boolean){this.delivery_state = flag}
  getDeliveryState(){return this.delivery_state;}
  
  getOrderDetail(orderId : any){
    this.router.navigateByUrl("Sales/readyOrderDetail/"+orderId);
  }//detail

}
