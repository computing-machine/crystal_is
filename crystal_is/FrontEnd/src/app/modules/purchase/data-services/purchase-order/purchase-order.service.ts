import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {

  constructor(private http:Http) { }

  getPurchaseOrders(){
    return this.http.get("http://localhost:3000/Purchase/PurchaseOrderApi/PurchaseOrders").pipe(map(data=>{
      return data.json();}));
  }//method

  getPurchaseOrder(id){
    return this.http.get("http://localhost:3000/Purchase/PurchaseOrderApi/PurchaseOrder/"+id).pipe(map(data=>{
      return data.json();}));
  }//method

  getPurchaserOrdersByPurchaser(id){
    return this.http.get("http://localhost:3000/Purchase/PurchaseOrderApi/PurchaseOrders/Purchaser/"+id).pipe(map(data=>{
      return data.json();}));
  }//method
  
}//class ends
