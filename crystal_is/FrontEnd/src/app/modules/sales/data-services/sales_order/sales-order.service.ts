import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SalesOrderService {
  private date = new Date();
  constructor(private http : Http) { }

  getSalesOrders(){
    return this.http.get('http://localhost:3000/Sales/SalesOrderApi/SalesOrders').pipe(map(data=>{
      return data.json();
    }));
  }//getSalesOrders
  getSalesOrderById(id:any){
    return this.http.get('http://localhost:3000/Sales/SalesOrderApi/SalesOrder/'+id).pipe(map(data=>{
      return data.json();
    }));
  }//getSalesOrderById
  getSalesOrderByCusId(id:any){
    return this.http.get('http://localhost:3000/Sales/SalesOrderApi/SalesOrder/Customer/'+id).pipe(map(data=>{
      return data.json();
    }));
  }//getSalesOrders
  getdeliveredOrders(){
    return this.http.get('http://localhost:3000/Sales/SalesOrderApi/SalesOrders/deliveredOrders').pipe(map(data=>{  
      return data.json();
    }));
  }//getDeliveredOrders

  getConfirmedOrders(){
    return this.http.get('http://localhost:3000/Sales/SalesOrderApi/SalesOrders/confirmedOrders').pipe(map(data=>{  
    return data.json();
    }));
  }//getConfirmedOrders

  getOrdersInProduction(){
    return this.http.get('http://localhost:3000/Sales/SalesOrderApi/SalesOrders/production').pipe(map(data=>{  
      return data.json();
    }));
  }//getOrdersInProduction

  getOrdersReady(){
    return this.http.get('http://localhost:3000/Sales/SalesOrderApi/SalesOrders/ready').pipe(map(data=>{  
      return data.json();
    }));
  }//getOrdersInProduction
 
getEstimates(){
  return this.http.get('http://localhost:8000/Sales/SalesOrderApi/SalesOrders/Estimates').pipe(map(data=>{  
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
    "receivables" : order.getReceivables(),
    "total_price" : order.getTotalPrice(),
    "order_date" : order.getOrderDate(),
    "status" : order.getStatus(),
    "deliverables": deliverables,
    "history" : history
  }//data
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(URI,data,{headers:headers}).pipe(map(res => {
      return res.json();
       }));
}//AddOrder

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
      "history" : history
    }//data
    let id = Estimate.getSalesOrderId();
    this.setDate(); 
    let URI = "http://localhost:3000/Sales/SalesOrderApi/SalesOrder/update/"+id;
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.put(URI,data,{headers:headers}).pipe(map(res => {
      return res.json();
       }));

}//ConfirmEstimate


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