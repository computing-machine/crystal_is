import { Component, OnInit, Inject } from '@angular/core';
import {SearchOrderComponent} from '../../../../components/use-cases/viewOrders/search-order/search-order.component';
import { SalesOrder } from '../../../../data-models/business-models/sales-order';
import {List} from "../../../../../../app-data-models/collection-models/list";
import {SalesOrderService} from '../../../../data-services/sales_order/sales-order.service';
import {CustomerService} from '../../../../data-services/customer/customer.service';
import {Customer} from '../../../../data-models/business-models/customer';
import {Router} from '@angular/router';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-search-confirmed-so',
  templateUrl: './search-confirmed-so.component.html',
  styleUrls: ['./search-confirmed-so.component.css']
})
export class SearchConfirmedSOComponent extends SearchOrderComponent implements OnInit {

  private production_state : boolean;
  private saleOrder_id : any;
  
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private SO : SalesOrderService, private cusService : CustomerService, private router : Router) { 
    super();
  }//constructor

  ngOnInit() {
    this.setOrders(new List<SalesOrder>());
    this.setOrderCusList(new List<any>());
    this.SO.getConfirmedOrdersBySalperId(this.storage.get('user_id')).subscribe(response =>{
      for(let confirmed of response){
        this.getOrders().add(new SalesOrder(confirmed));
        this.cusService.getCustomerById(confirmed.customer_id).subscribe(cus_data=>{
         let customer = new Customer(cus_data);
         this.getOrderCusList().add({"Customer":customer, "Order" : new SalesOrder(confirmed)});
        });//getCustomers
      }//for
      this.setResultOrders(this.getOrders());
      this.setDataStatus(true);
    });//getConfirmedOrders
    
  }//ngOnInit

  getOrderDetail(orderId : any){
    this.router.navigateByUrl("Sales/confirmedOrder/"+orderId);
  }//detail

  productionState(orderId : any){
    this.setProductionState(false);
    let order = SalesOrder;
    this.SO.getSalesOrderById(orderId).subscribe(order=>{
      order = new SalesOrder(order[0]);
      this.SO.moveToProductionState(order).subscribe(result=>{
         //delete item
         let orders = this.getOrders();
         let index = orders.getIndexOf(order);
         orders.delete(index);
         this.setOrders(orders);
         
        this.setProductionState(true);
      })
    });//get salesOrder
  }//productionState

  PayBill(orderId : any){
    this.router.navigateByUrl("Sales/payBill/"+orderId);
  }//PayBill

  setModal(event_target : any , id : any){
    this.saleOrder_id = id
    event_target.setAttribute("data-toggle","modal");
    event_target.setAttribute("data-target","#myModal");
    //console.log(event_target);
  }
  getModal():any{
    return this.saleOrder_id;
  }

  setProductionState(flag : boolean){this.production_state=flag}
  getProductionState():boolean{return this.production_state;}

}
