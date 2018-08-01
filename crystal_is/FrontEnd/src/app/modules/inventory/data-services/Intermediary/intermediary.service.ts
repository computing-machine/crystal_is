import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
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

  getIntermediary(intermediary_id){
    return this.http.get("http://localhost:3000/Inventory/IntermediaryApi/Intermediary/"+intermediary_id).pipe(map(data=>{
      return data.json();
    }));
  }//method
}
