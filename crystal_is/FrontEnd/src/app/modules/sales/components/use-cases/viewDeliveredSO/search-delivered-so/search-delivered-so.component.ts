import { Component, OnInit , Inject} from '@angular/core';
import {SearchOrderComponent} from '../../../use-cases/viewOrders/search-order/search-order.component';
import { SalesOrder } from '../../../../data-models/business-models/sales-order';
import {List} from "../../../../../../app-data-models/collection-models/list";
import {SalesOrderService} from '../../../../data-services/sales_order/sales-order.service';
import {CustomerService} from '../../../../data-services/customer/customer.service';
import {Customer} from '../../../../data-models/business-models/customer';
import {Router} from '@angular/router';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-search-delivered-so',
  templateUrl: './search-delivered-so.component.html',
  styleUrls: ['./search-delivered-so.component.css']
})
export class SearchDeliveredSOComponent  extends SearchOrderComponent implements OnInit {

  private saleOrder_id : any;
  private closed_state : boolean;
  private flag : boolean;

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private SO : SalesOrderService, private cusService : CustomerService, private router : Router) { 
    super();
  }

  ngOnInit() {
    this.setOrders(new List<SalesOrder>());
    this.setOrderCusList(new List<any>());
    this.SO.getdeliveredOrdersBySalPer(this.storage.get('user_id')).subscribe(response =>{
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

  setModal(event_target : any , id : any){
    this.saleOrder_id = id
    event_target.setAttribute("data-toggle","modal");
    event_target.setAttribute("data-target","#myModal");
    //console.log(event_target);
  }
  getModal():any{
    return this.saleOrder_id;
  }

  getOrderDetail(orderId : any){
    this.router.navigateByUrl("Sales/deliveredOrder/"+orderId);
  }//detail

  PayBill(orderId : any){
    this.router.navigateByUrl("Sales/payBill/"+orderId);
  }//PayBill

  closedState(orderId : any){
    this.setClosedState(false);
    let order = SalesOrder;
    this.SO.getSalesOrderById(orderId).subscribe(order=>{
      order = new SalesOrder(order[0]);
     if(order.getReceivables()>0){
        document.getElementById('o').setAttribute("class","show");
      }
      else{
        this.SO.moveToClosedState(order).subscribe(result=>{
          //delete item
          let orders = this.getOrders();
          let index = orders.getIndexOf(order);
          orders.delete(index);
          this.setOrders(orders);

          this.setClosedState(true);
        })
      }
      
    });//get salesOrder
  }//readyState

  setClosedState(flag : boolean){this.closed_state = flag}//setClosedState
  getClosedState(){return this.closed_state;}//getClosedState

}
