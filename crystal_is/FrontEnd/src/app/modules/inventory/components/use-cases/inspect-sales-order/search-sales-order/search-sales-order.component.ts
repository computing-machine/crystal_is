import { Component, OnInit } from '@angular/core';
import { List } from '../../../../../../app-data-models/collection-models/list';
import { SalesOrder } from '../../../../../sales/data-models/business-models/sales-order';

@Component({
  selector: 'app-search-sales-order',
  templateUrl: './search-sales-order.component.html',
  styleUrls: ['./search-sales-order.component.css']
})
export class SearchSalesOrderComponent implements OnInit {

//private members declaration
private input_order_id:string;
private input_customer_name : string;
private data_status : boolean;
private orders : List<SalesOrder>;
private result_orders : List<SalesOrder>;
private order_cus_list : List<any>;

constructor() { }

ngOnInit() {
  //private members initialization
  this.setDataStatus(false);
  this.orders = new List<SalesOrder>();
  this.result_orders = new List<SalesOrder>();
  this.order_cus_list = new List<any>();
  this.setOrderId(this.input_order_id);
  this.setCustomerName(this.input_customer_name);
}
//functions
setOrderId(order_id:string){this.input_order_id=order_id;}
setCustomerName(cus_name){this.input_customer_name=cus_name;}
setDataStatus(flag:boolean){this.data_status = flag}
setOrders(orders : List<any>){this.orders = orders}
setResultOrders(result_orders :List<any>){this.result_orders = result_orders}
setOrderCusList(order_cus_list : List<any>){this.order_cus_list = order_cus_list}

getOrderId():string{return this.input_order_id;}
getCusName():string{return this.input_customer_name;}
getDataStatus():boolean{return this.data_status}
getOrders():List<SalesOrder>{return this.orders}
getResultOrders():List<SalesOrder>{return this.result_orders}
getOrderCusList():List<any>{return this.order_cus_list;}

//functions for select orders options
getOrderByOrderId(orderId:string){
  let new_order = new List<SalesOrder>();
  this.setOrderId(orderId);
  for(let order of this.getResultOrders()){
    if(order.getSalesOrderId().includes(this.getOrderId())){
      new_order.add(order);
    }//if
  }//for
  return new_order;
}//getOrderByOrderId

getOrdersByCusName(cus_name : string){
  let new_order = new List<SalesOrder>();
  this.setCustomerName(cus_name);
  for(let order of this.getOrderCusList()){
    if(order.Customer.getName().toUpperCase().includes(this.getCusName().toUpperCase())){
      new_order.add(order.Order);
    }//if
  }//for
  return new_order;
}//getOrderByCusName

getItems(){
  this.setResultOrders(this.getOrders());
  if((this.getCusName()!=undefined)&&(this.getOrderId()==undefined)){
    this.setResultOrders(this.getOrdersByCusName(this.getCusName()))
  }//if
  else if((this.getCusName()==undefined)&&(this.getOrderId()!=undefined)){
    this.setResultOrders(this.getOrderByOrderId(this.getOrderId()));
  }//else if
  else if((this.getCusName()!=undefined)&&(this.getOrderId()!=undefined)){
     this.setResultOrders(this.getOrdersByCusName(this.getCusName()));
     console.log(this.getResultOrders());
    this.setResultOrders(this.getOrderByOrderId(this.getOrderId()));
  }//else if
}//getItems

}//class ends
