import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor(private http:Http) { }

  getUnits(){
    return this.http.get("http://localhost:3000/Inventory/UnitApi/Units")
    .pipe(map(data=>{return data.json()}));
  }//getUnits

  getActiveUnits(){
    return this.http.get("http://localhost:3000/Inventory/UnitApi/Units/Active")
    .pipe(map(data=>{return data.json()}));
  }//getUnits

  getInactiveUnits(){
    return this.http.get("http://localhost:3000/Inventory/UnitApi/Units/Inactive")
    .pipe(map(data=>{return data.json()}));
  }//getUnits

  getUnit(id){
    return this.http.get("http://localhost:3000/Inventory/UnitApi/Unit/"+id)
    .pipe(map(data=>{return data.json()}));
  }//getUnit

  saveUnit(data:any){
    let URI = "http://localhost:3000/Inventory/UnitApi/Unit/Save";
    
    const headers = new Headers({ 'Content-Type': 'application/json' });
    
    return this.http.post(URI,data,{headers:headers}).pipe(map(res => {
      return res.json();
    }));
      
  }//savePurchaseHistory

  updateUnit(id:object, data){

    let URI = "http://localhost:3000/Inventory/UnitApi/Unit/Update/"+id;
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.put(URI,data,{headers:headers}).pipe(map(res => {
      console.log(res.json());
      return res.json();
       }));
  }//updateCustomer

}//class ends