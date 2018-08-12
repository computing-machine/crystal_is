import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FinishedGoodService {

  constructor(private http:Http) { }

  getFinishedGoods(){
    return this.http.get("http://localhost:3000/Inventory/FinishedGoodApi/FinishedGoods").pipe(map(data=>{
      return data.json();
    }));
  }//method

  getFinishedGood(finished_good_id){
    return this.http.get("http://localhost:3000/Inventory/FinishedGoodApi/FinishedGood/"+finished_good_id).pipe(map(data=>{
      return data.json();
    }));
  }//method

  saveFinishedGood(data:any){
    let URI = "http://localhost:3000/Inventory/FinishedGoodApi/FinishedGood/Save";
    
    const headers = new Headers({ 'Content-Type': 'application/json' });
    
    return this.http.post(URI,data,{headers:headers}).pipe(map(res => {
      return res.json();
    }));
      
  }//savePurchaseHistory

}//class ends
