import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
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
}
