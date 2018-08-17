import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class IntermediaryService {

  constructor(private http:Http) { }

  getIntermediarys(){
    return this.http.get("http://localhost:3000/Inventory/IntermediaryApi/Intermediarys").pipe(map(data=>{
      return data.json();
    }));
  }//method

  getActiveIntermediarys(){
    return this.http.get("http://localhost:3000/Inventory/IntermediaryApi/Intermediarys/Active")
    .pipe(map(data=>{return data.json()}));
  }//getUnits

  getInactiveIntermediarys(){
    return this.http.get("http://localhost:3000/Inventory/IntermediaryApi/Intermediarys/Inactive")
    .pipe(map(data=>{return data.json()}));
  }//getUnits

  getIntermediary(intermediary_id){
    return this.http.get("http://localhost:3000/Inventory/IntermediaryApi/Intermediary/"+intermediary_id).pipe(map(data=>{
      return data.json();
    }));
  }//method

  saveIntermediary(data:any){
    let URI = "http://localhost:3000/Inventory/IntermediaryApi/Intermediary/Save";
    
    const headers = new Headers({ 'Content-Type': 'application/json' });
    
    return this.http.post(URI,data,{headers:headers}).pipe(map(res => {
      return res.json();
    }));
      
  }//savePurchaseHistory

  updateIntermediary(id:object, data){

    let URI = "http://localhost:3000/Inventory/IntermediaryApi/Intermediary/Update/"+id;
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.put(URI,data,{headers:headers}).pipe(map(res => {
      console.log(res.json());
      return res.json();
       }));
  }//updateCustomer

}//class ends
