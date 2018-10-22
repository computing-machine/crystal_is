import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NonProcessLineItemService {

  constructor(private http:Http) { }
  getNonProcessLineItems(){
    return this.http.get("http://localhost:3000/Inventory/NonProcessLineItemApi/NonProcessLineItems").pipe(map(data=>{
      return data.json();
    }));
  }//method

  getNonProcessLineItem(raw_material_id:object){
    return this.http.get("http://localhost:3000/Inventory/NonProcessLineItemApi/NonProcessLineItem/"+raw_material_id)
    .pipe(map(data=>{return data.json();}));
  }//method

  getActiveNonProcessLineItems(){
    return this.http.get("http://localhost:3000/Inventory/NonProcessLineItemApi/NonProcessLineItems/Active")
    .pipe(map(data=>{return data.json()}));
  }//getUnits

  getInactiveNonProcessLineItems(){
    return this.http.get("http://localhost:3000/Inventory/NonProcessLineItemApi/NonProcessLineItems/Inactive")
    .pipe(map(data=>{return data.json()}));
  }//getUnits

  saveNonProcessLineItem(data:any){
    let URI = "http://localhost:3000/Inventory/NonProcessLineItemApi/NonProcessLineItem/Save";
    
    const headers = new Headers({ 'Content-Type': 'application/json' });
    
    return this.http.post(URI,data,{headers:headers}).pipe(map(res => {
      return res.json();
    }));
      
  }//savePurchaseHistory

  updateNonProcessLineItem(id:object, data){

    let URI = "http://localhost:3000/Inventory/NonProcessLineItemApi/NonProcessLineItem/Update/"+id;
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.put(URI,data,{headers:headers}).pipe(map(res => {
      console.log(res.json());
      return res.json();
       }));
  }//updateCustomer
}//class ends
