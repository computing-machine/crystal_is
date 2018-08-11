import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {map} from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseHistoryService {

  constructor(private http:Http) { }

  getPurchaseHistorys(){
    return this.http.get("http://localhost:3000/Inventory/PurchaseHistoryApi/PurchaseHistorys").pipe(map(data=>{
      return data.json();
    }));
  }//method

  getPurchaseHistory(purchase_history_id){
    return this.http.get("http://localhost:3000/Inventory/PurchaseHistoryApi/PurchaseHistory/"+purchase_history_id).pipe(map(data=>{
      return data.json();
    }));
  }//method

  savePurchaseHistory(data:any){
    let URI = "http://localhost:3000/Inventory/PurchaseHistoryApi/PurchaseHistory/Save";
    
    const headers = new Headers({ 'Content-Type': 'application/json' });
    
    return this.http.post(URI,data,{headers:headers}).pipe(map(res => {
      return res.json();
    }));
      
  }//savePurchaseHistory

}//class ends
