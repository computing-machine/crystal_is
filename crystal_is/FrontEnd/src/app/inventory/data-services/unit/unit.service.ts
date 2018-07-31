import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
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

}
