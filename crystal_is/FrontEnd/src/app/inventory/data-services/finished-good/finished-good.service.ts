import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
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
}
