import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RawMaterialService {

  constructor(private http:Http) { }
  getRawMaterials(){
    return this.http.get("http://localhost:3000/Inventory/RawMaterialApi/RawMaterials").pipe(map(data=>{
      return data.json();
    }));
  }//method

  getRawMaterial(raw_material_id:object){
    return this.http.get("http://localhost:3000/Inventory/RawMaterialApi/RawMaterial/"+raw_material_id)
    .pipe(map(data=>{return data.json();}));
  }//method
}
