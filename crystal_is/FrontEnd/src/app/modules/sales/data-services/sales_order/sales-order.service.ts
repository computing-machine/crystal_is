import { Injectable ,Inject} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {map} from 'rxjs/operators';
import {SalesOrder} from '../../data-models/business-models/sales-order';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class SalesOrderService {
  private date = new Date();
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private http : Http) { }

  getAllConfirmedOrders(){
    return this.http.get('http://localhost:3000/Sales/SalesOrderApi/SalesOrders/Status/Confirmed').pipe(map(data=>{
      return data.json();
    }));
  }//getSalesOrders

  getAllProductionOrders(){
    return this.http.get('http://localhost:3000/Sales/SalesOrderApi/SalesOrders/Status/Production').pipe(map(data=>{
      return data.json();
    }));
  }//getSalesOrders

  getAllReadyOrders(){
    return this.http.get('http://localhost:3000/Sales/SalesOrderApi/SalesOrders/Status/Ready').pipe(map(data=>{
      return data.json();
    }));
  }//getSalesOrders

  getAllDeliveredOrders(){
    return this.http.get('http://localhost:3000/Sales/SalesOrderApi/SalesOrders/Status/Delivered').pipe(map(data=>{
      return data.json();
    }));
  }//getSalesOrders

  getSalesOrders(){
    return this.http.get('http://localhost:3000/Sales/SalesOrderApi/SalesOrders/').pipe(map(data=>{
      return data.json();
    }));
  }//getSalesOrders
  getSalesOrderById(id:any){
    return this.http.get('http://localhost:3000/Sales/SalesOrderApi/SalesOrder/'+id).pipe(map(data=>{
      return data.json();
    }));
  }//getSalesOrderById
  getSalesOrderByCusId_SalperId(id:any,saleper_id){
    return this.http.get('http://localhost:3000/Sales/SalesOrderApi/SalesOrders/cusId/'+id+'/salperId/'+saleper_id).pipe(map(data=>{
      return data.json();
    }));
  
  }//getSalesOrders
  getdeliveredOrdersBySalPer(id:any){
    return this.http.get('http://localhost:3000/Sales/SalesOrderApi/SalesOrders/deliveredOrders/'+id).pipe(map(data=>{  
      return data.json();
    }));
  }//getDeliveredOrders

  getConfirmedOrdersBySalperId(id : any){
    return this.http.get('http://localhost:3000/Sales/SalesOrderApi/SalesOrders/confirmedOrders/'+id).pipe(map(data=>{  
    return data.json();
    }));
  }//getConfirmedOrders

  getOrdersInProductionBySalPerId(id : any){
   return this.http.get('http://localhost:3000/Sales/SalesOrderApi/SalesOrders/production/'+id).pipe(map(data=>{  
    return data.json();
    }));
  }//getOrdersInProduction

  getOrdersReadyBySalPerId(id : any){
    return this.http.get('http://localhost:3000/Sales/SalesOrderApi/SalesOrders/ready/'+id).pipe(map(data=>{  
      return data.json();
    }));
  }//getOrdersInProduction
 
getEstimatesBySalPerId(id:any){
  return this.http.get('http://localhost:3000/Sales/SalesOrderApi/SalesOrders/Estimates/'+id).pipe(map(data=>{  
      return data.json();
    }));
}//getEstimate

addOrder(order : any){
  let URI = "http://localhost:3000/Sales/SalesOrderApi/SalesOrder/insert";
  let deliverables = [];
  let history = [];
  for(let delive of order.getDeliverables()){
      let deli = {
        "fg_id" : delive.getFGItemId(),
        "quantity" : delive.getQuantity()
      }
      deliverables.push(deli);
  }//deliverables
  for(let hist of order.getOrderHistory()){
    let his = {"status" : hist.getStatus(),"date" : hist.getDate()}
    history.push(his);
  }//orderHistory

  let data = {
    "customer_id" : order.getCusId(),
    "salesperson_id" : this.storage.get('user_id'),
    "receivables" : order.getReceivables(),
    "total_price" : order.getTotalPrice(),
    "order_date" : order.getOrderDate(),
    "status" : order.getStatus(),
    "deliverables": deliverables,
    "history" : history,
  }//data
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(URI,data,{headers:headers}).pipe(map(res => {
      return res.json();
       }));
}//AddOrder

updateEstimate(estimate : any){

  console.log("pomo");
  let deliverables = [];
  let payments = [];
  let history = [];
  let builty = {};
  let invoice = {};

  //setDeliverables
  for(let delive of estimate.getDeliverables()){
      let deli = {
        "fg_id" : delive.getFGItemId(),
        "quantity" : delive.getQuantity()
      }
      deliverables.push(deli);
  }//deliverables
  
  for(let pay of estimate.getInvoice().getPayments()){
    let payment = {
      "date" : pay.getDate(),
      "amount": pay.getAmount()
    }
    payments.push(payment);
  }//for

  builty = estimate.getInvoice().getBuilty();

  invoice = {
    "payment" : payments,
    "builty" : builty
  }

 
 
  

  for(let hist of estimate.getOrderHistory()){
    let his = {"status" : hist.getStatus(),"date" : hist.getDate()}
    history.push(his);
  }//orderHistory
    let data = {
      "customer_id" : estimate.getCusId(),
      "receivables" : estimate.getReceivables(),
      "total_price" : estimate.getTotalPrice(),
      "order_date" : estimate.getOrderDate(),
      "status"     : estimate.getStatus(),
      "deliverables": deliverables,
      "history" : history,
      "invoice" : invoice,
      "saleperson_id":this.storage.get('user_id')
      
    }//data
    console.log(data);
    let id = estimate.getSalesOrderId();
    this.setDate();
    let URI = "http://localhost:3000/Sales/SalesOrderApi/SalesOrder/update/"+id;
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.put(URI,data,{headers:headers}).pipe(map(res => {
      console.log(res.json());
      return res.json();
       }));
}//updateEstimate

ConfirmEstimate(Estimate : any){
  let deliverables = [];
  let history = [];
  for(let delive of Estimate.getDeliverables()){
      let deli = {
        "fg_id" : delive.getFGItemId(),
        "quantity" : delive.getQuantity()
      }
      deliverables.push(deli);
  }//deliverables

  for(let hist of Estimate.getOrderHistory()){
    let his = {"status" : hist.getStatus(),"date" : hist.getDate()}
    history.push(his);
    break;
  }//orderHistory
    let his = {"status" : "Confirmed","date" : this.getDate()}
    history.push(his);

    let data = {
      "customer_id" : Estimate.getCusId(),
      "receivables" : Estimate.getReceivables(),
      "total_price" : Estimate.getTotalPrice(),
      "order_date" : Estimate.getOrderDate(),
      "status" : "Confirmed",
      "deliverables": deliverables,
      "history" : history,
      "salesperson": Estimate.getSalesPersonId()
      
    }//data
    let id = Estimate.getSalesOrderId();
    this.setDate(); 
    let URI = "http://localhost:3000/Sales/SalesOrderApi/SalesOrder/update/"+id;
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.put(URI,data,{headers:headers}).pipe(map(res => {
      console.log(res.json());
      return res.json();
       }));

}//ConfirmEstimate

deleteEstimate(estimate_id : any){
  return this.http.delete("http://localhost:3000/Sales/SalesOrderApi/Estimate/delete/"+estimate_id).pipe(map(data=>{
  return(data.json());
 }))
}//deleteEstimate

moveToProductionState(confirmed_order : any){
  let deliverables = [];
  let history = [];
  for(let delive of confirmed_order.getDeliverables()){
      let deli = {
        "fg_id" : delive.getFGItemId(),
        "quantity" : delive.getQuantity()
      }
      deliverables.push(deli);
  }//deliverables
  for(let hist of confirmed_order.getOrderHistory()){
    let his = {"status" : hist.getStatus(),"date" : hist.getDate()}
    history.push(his);
  }//orderHistory
    let his = {"status" : "Production","date" : this.getDate()}
    history.push(his);

    let data = {
      "customer_id" : confirmed_order.getCusId(),
      "receivables" : confirmed_order.getReceivables(),
      "total_price" : confirmed_order.getTotalPrice(),
      "order_date" :  confirmed_order.getOrderDate(),
      "status" : "Production",
      "deliverables": deliverables,
      "history" : history,
      "salesperson": confirmed_order.getSalesPersonId()
    }//data

    let id = confirmed_order.getSalesOrderId();
    this.setDate(); 
    let URI = "http://localhost:3000/Sales/SalesOrderApi/SalesOrder/update/"+id;
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.put(URI,data,{headers:headers}).pipe(map(res => {
      return res.json();
       }));
}//moveToProductionState

moveToReadyState(order : any){
  let deliverables = [];
  let history = [];
  for(let delive of order.getDeliverables()){
      let deli = {
        "fg_id" : delive.getFGItemId(),
        "quantity" : delive.getQuantity()
      }
      deliverables.push(deli);
  }//deliverables
  for(let hist of order.getOrderHistory()){
    let his = {"status" : hist.getStatus(),"date" : hist.getDate()}
    history.push(his);
  }//orderHistory
    let his = {"status" : "Ready","date" : this.getDate()}
    history.push(his);

    let data = {
      "customer_id" : order.getCusId(),
      "receivables" : order.getReceivables(),
      "total_price" : order.getTotalPrice(),
      "order_date" :  order.getOrderDate(),
      "status" : "Ready",
      "deliverables": deliverables,
      "history" : history,
      "salesperson": order.getSalesPersonId()
    }//data

    let id = order.getSalesOrderId();
    this.setDate(); 
    let URI = "http://localhost:3000/Sales/SalesOrderApi/SalesOrder/update/"+id;
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.put(URI,data,{headers:headers}).pipe(map(res => {
      return res.json();
       }));

}//moveToReadyState

moveToDeliveryState(order : any){
  let deliverables = [];
  let history = [];
  for(let delive of order.getDeliverables()){
      let deli = {
        "fg_id" : delive.getFGItemId(),
        "quantity" : delive.getQuantity()
      }
      deliverables.push(deli);
  }//deliverables
  for(let hist of order.getOrderHistory()){
    let his = {"status" : hist.getStatus(),"date" : hist.getDate()}
    history.push(his);
  }//orderHistory
    let his = {"status" : "Delivered","date" : this.getDate()}
    history.push(his);
  
    let data = {
      "customer_id" : order.getCusId(),
      "receivables" : order.getReceivables(),
      "total_price" : order.getTotalPrice(),
      "order_date" :  order.getOrderDate(),
      "status" : "Delivered",
      "deliverables": deliverables,
      "history" : history,
      "salesperson": order.getSalesPersonId()
    }//data

    let id = order.getSalesOrderId();
    this.setDate(); 
    let URI = "http://localhost:3000/Sales/SalesOrderApi/SalesOrder/update/"+id;
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.put(URI,data,{headers:headers}).pipe(map(res => {
      return res.json();
       }));

}//moveToDeliveryState

moveToClosedState(order : any){
  let deliverables = [];
  let history = [];
  for(let delive of order.getDeliverables()){
      let deli = {
        "fg_id" : delive.getFGItemId(),
        "quantity" : delive.getQuantity()
      }
      deliverables.push(deli);
  }//deliverables
  for(let hist of order.getOrderHistory()){
    let his = {"status" : hist.getStatus(),"date" : hist.getDate()}
    history.push(his);
  }//orderHistory
    let his = {"status" : "Closed","date" : this.getDate()}
    history.push(his);

    let data = {
      "customer_id" : order.getCusId(),
      "receivables" : order.getReceivables(),
      "total_price" : order.getTotalPrice(),
      "order_date" :  order.getOrderDate(),
      "status" : "Closed",
      "deliverables": deliverables,
      "history" : history,
      "salesperson": order.getSalesPersonId()
    }//data

    let id = order.getSalesOrderId();
    this.setDate(); 
    let URI = "http://localhost:3000/Sales/SalesOrderApi/SalesOrder/update/"+id;
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.put(URI,data,{headers:headers}).pipe(map(res => {
      return res.json();
       }));

}//moveToClosedState

setDate(){
  var month = this.date.getMonth()+1;
  var day = this.date.getDate();
  var output = this.date.getFullYear() + '-' +
      ((''+month).length<2 ? '0' : '') + month + '-' +
      ((''+day).length<2 ? '0' : '') + day;
}//setDate

getDate():any{
  return this.date;
}//getDate

}