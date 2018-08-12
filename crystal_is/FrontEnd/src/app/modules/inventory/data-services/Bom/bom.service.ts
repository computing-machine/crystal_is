import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BomService {

  constructor(private http:Http) { }
  getBoms(){
    return this.http.get("http://localhost:3000/Inventory/BomApi/Boms").pipe(map(data=>{
      return data.json();
    }));
  }//method

  getBomById(bom_id){
    return this.http.get("http://localhost:3000/Inventory/BomApi/Bom/"+bom_id).pipe(map(data=>{
      return data.json();
    }));
  }//method

  saveBom(data:any){
    let URI = "http://localhost:3000/Inventory/BomApi/BOM/Save";
    
    const headers = new Headers({ 'Content-Type': 'application/json' });
    
    return this.http.post(URI,data,{headers:headers}).pipe(map(res => {
      return res.json();
    }));
      
  }//savePurchaseHistory

}//class ends
