import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
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
}
