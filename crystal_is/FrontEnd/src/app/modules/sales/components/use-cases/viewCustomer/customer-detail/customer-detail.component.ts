import { Component, OnInit , Inject } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PersonDetailComponent} from '../../../../components/use-cases/viewPerson/person-detail/person-detail.component';
import {CustomerService} from '../../../../data-services/customer/customer.service';
import {SalesOrderService} from '../../../../data-services/sales_order/sales-order.service';
import {Customer} from '../../../../data-models/business-models/customer';
import { SalesOrder } from '../../../../data-models/business-models/sales-order';
import {List} from "../../../../../../app-data-models/collection-models/list";
import {FinishedGood} from '../../../../../inventory/data-models/business-models/finished-good';
import {FinishedGoodService} from '../../../../../inventory/data-services/finished-good/finished-good.service';
import {Router} from '@angular/router';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent extends PersonDetailComponent implements OnInit {
  //private members declaration
  private sales_Orders : List<SalesOrder>; 
  private estimates  :List<SalesOrder>;
  private order_in_produc : List<SalesOrder>;
  private delivered_orders : List<SalesOrder>;
  private conf_order_cus : List<SalesOrder>;
  private ready_orders : List<SalesOrder>;
  private receivables : any;
  private orders = new List<any>();
  private count : number;
  //.........

    //private members declaration for Order
    private order_id : object;
    private order : SalesOrder;
    //private members declaration for item
    private deliverables : List<any>;
    private item : FinishedGood;
    private showOrderetail : Boolean;
  
 
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private router:Router,private route : ActivatedRoute,private CusService : CustomerService,private SalesorderService : SalesOrderService, private FGService : FinishedGoodService  ) {
    super();
   }//super
  
  ngOnInit(){
    //initialize private variables
    this.sales_Orders = new List<SalesOrder>();
    this.estimates = new List<SalesOrder>();
    this.conf_order_cus = new List<SalesOrder>()
    this.order_in_produc = new List<SalesOrder>();
    this.delivered_orders = new List<SalesOrder>();
    this.ready_orders = new List<SalesOrder>();
    this.receivables = 0;
    this.count =0;

    //get salesOrder and custmer through service and set and get datastatus
    this.setDataStatus(false);
    this.setOrderDetailFlag(false);
    this.route.params.subscribe(params=>this.setPersonId(params.id));//getcustomerID
    this.CusService.getCustomerById(this.getPersonId()).subscribe(customer=>{//getcustomer data
      this.setPerson(new Customer(customer));
      //in asy
      this.SalesorderService.getSalesOrderByCusId_SalperId(this.getPersonId(),this.storage.get('user_id'))
      .subscribe(salesorders=>{
          this.setSalesOrder(salesorders);
          this.setOrdersOfCustomer();
          if(this.getSalesOrder()){this.setDataStatus(true);}
      });//salesOrderservice
  });//getCustomerById
}//ngInit

setSalesOrder(salesorders : any){
  for(let saleorder of salesorders){
    let new_saleorder = new SalesOrder(saleorder);
    this.sales_Orders.add(new_saleorder); 
  }//for
}//setSalesOrder

getSalesOrder():List<SalesOrder>{return this.sales_Orders}


 setOrdersOfCustomer(){
  for(let order of this.sales_Orders){
   this.setcusReceivables(order.getReceivables());
    if(order.getStatus()=="estimate"|| order.getStatus()=='Estimate'){
      this.setEstimatesOfCustomer(order)
    }//if
    else if((order.getStatus()=="delivered" || order.getStatus()=='Delivered')){
      this.setDeliveredOrders(order);
    }//else if
    else if((order.getStatus()=="production" || order.getStatus()=='Production')){
      this.setOrdersInProduction(order);
    }//else of
    else if((order.getStatus()=="ready" || order.getStatus()=='Ready')){
      this.setReadyOrders(order);
    }//else of
    else if((order.getStatus()=="confirmed" || order.getStatus()=='Confirmed')){
      this.setConfOrderOfCustomer(order);
    }//else of
  }//for
}//setOrdersOfCustomer

setcusReceivables(receivables:any){
  this.receivables = this.receivables + parseInt(receivables);
}//setcusReceivables

setEstimatesOfCustomer(estimate:any){
  this.estimates.add(estimate);
}//setEstimates
setConfOrderOfCustomer(estimate:any){
  this.conf_order_cus.add(estimate);
}//setEstimates

setOrdersInProduction(order_in_prod:any){
 this.order_in_produc.add(order_in_prod);
}//setUnDeliveredOrders
setReadyOrders(ready_orders : any){
this.ready_orders.add(ready_orders);
}//setReadyOrders

setDeliveredOrders(delivered_order:any){
  this.delivered_orders.add(delivered_order);
}//setDeliveredOrder

getOrdersOfCustomer():List<any>{
  return this.orders;
}//getOrdersOfCustomer

getEstimatesOfCustomer():List<SalesOrder>{
  console.log("komo");
  console.log(this.estimates);
  return this.estimates;
}//getEstimatesOfCustomer

getConfOrderOfCustomer():List<any>{
  return this.conf_order_cus;
}//getConfOrderOfCustomer

getOrdersInProduction():List<any>{
  return this.order_in_produc;
}//getOrdersInProduction

getReadyOrders():List<any>{
  return this.ready_orders;
}//getReadyOrders
getDeliveredOrders():List<any>{
  //console.log(this.delivered_orders);
  return this.delivered_orders;
}//getDeliveredOrders

getcusReceivables():any{
  return this.receivables;
}//getcusReceivables

showEstimates(){
  document.getElementById('estimate_div').setAttribute("class","show");
  document.getElementById('deli_div').setAttribute("class","hide");
  document.getElementById('progress_order_div').setAttribute("class","hide");
  document.getElementById('ready_order_div').setAttribute("class","hide");
  document.getElementById('conf_order_div').setAttribute("class","hide");
  if(this.getOrderDetailFlag()==true){document.getElementById('order_detail_div').setAttribute("class","hide");}
  
}//showEstimates

showdelivered(){
  document.getElementById('estimate_div').setAttribute("class","hide");
  document.getElementById('deli_div').setAttribute("class","show");
  document.getElementById('progress_order_div').setAttribute("class","hide");
  document.getElementById('ready_order_div').setAttribute("class","hide");
  //document.getElementById('conf_order_div').setAttribute("class","hide");
  if(this.getOrderDetailFlag()==true){document.getElementById('order_detail_div').setAttribute("class","hide");}
}//showdelivered

showConfirmedOrders(){
  document.getElementById('estimate_div').setAttribute("class","hide");
  document.getElementById('deli_div').setAttribute("class","hide");
  document.getElementById('progress_order_div').setAttribute("class","hide");
  document.getElementById('ready_order_div').setAttribute("class","hide");
  document.getElementById('conf_order_div').setAttribute("class","show");
  //document.getElementById('order_detail_div').setAttribute("class","hide");
  if(this.getOrderDetailFlag()==true){document.getElementById('order_detail_div').setAttribute("class","hide");}
}//showConfirmedOrders

showOrdersInProgress(){
  document.getElementById('estimate_div').setAttribute("class","hide");
  document.getElementById('deli_div').setAttribute("class","hide");
  document.getElementById('progress_order_div').setAttribute("class","show");
  document.getElementById('ready_order_div').setAttribute("class","hide");
  document.getElementById('conf_order_div').setAttribute("class","hide");
  //document.getElementById('order_detail_div').setAttribute("class","hide");
  if(this.getOrderDetailFlag()==true){document.getElementById('order_detail_div').setAttribute("class","hide");}
 
}//showOrdersInProgress

showReadyOrders(){
  document.getElementById('estimate_div').setAttribute("class","hide");
  document.getElementById('deli_div').setAttribute("class","hide");
  document.getElementById('progress_order_div').setAttribute("class","hide");
  document.getElementById('ready_order_div').setAttribute("class","show");
  document.getElementById('conf_order_div').setAttribute("class","hide");
  //document.getElementById('order_detail_div').setAttribute("class","hide");
  if(this.getOrderDetailFlag()==true){document.getElementById('order_detail_div').setAttribute("class","hide");}
}//showReadyOrders

getOrderDetail(orderId : any){
  
  //this.router.navigateByUrl("OrderDetailComponent/"+orderId);
  this.orders = new List<any>();
  this.deliverables = new List<any>();
  this.setOrderId(orderId);
  this.SalesorderService.getSalesOrderById(this.getOrderId()).subscribe(response=>{
    let saleorder_data = response ;
    for(let data of saleorder_data){
      let saleorder = new SalesOrder(data);
      this.setOrder(saleorder);
    }//for
    //document.getElementById('order_detail_div').setAttribute("class","show");
    this.setOrderDetailFlag(true);
    if( document.getElementById('order_detail_div')!=null){
      document.getElementById('order_detail_div').setAttribute("class","show");
    }//if
  });
}//getOrderDetail

//........................Order-Detail functions...................

setOrderDetailFlag(flag){
this.showOrderetail = flag;
}
getOrderDetailFlag():Boolean{
  return this.showOrderetail;
}
setOrderId(id:object){
  this.order_id = id;
}//setOrderId

setOrder(saleorder : SalesOrder){
  this.order = saleorder;
  for(let deliverable of this.order.getDeliverables() ){
    this.setFGInSO(deliverable.getFGItemId(),deliverable.getQuantity());//set FG detail through FG id;
  }//for
}//setSalesOrder

getOrder():SalesOrder{
  return this.order;
}//getSaleOrder
getOrderId():object{return this.order_id;}

setFGInSO(itemId,quantity){
  this.FGService.getFinishedGood(itemId).subscribe(response=>{
    let fg_data = response;
    this.setDeliverableInSO(new FinishedGood(fg_data),quantity);
  });
}//setFGInSO

setDeliverableInSO(item:FinishedGood, quantity : any){
  let deliverable = {"item" : item , "quantity" : quantity}
  this.deliverables.add(deliverable);
}//setDeliverableInSO

getDeliverablesInSO():List<any>{
  return this.deliverables;
}//getDeliverablesInSO


}//class
