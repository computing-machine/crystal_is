import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
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

  getActiveRawMaterials(){
    return this.http.get("http://localhost:3000/Inventory/RawMaterialApi/RawMaterials/Active")
    .pipe(map(data=>{return data.json()}));
  }//getUnits

  getInactiveRawMaterials(){
    return this.http.get("http://localhost:3000/Inventory/RawMaterialApi/RawMaterials/Inactive")
    .pipe(map(data=>{return data.json()}));
  }//getUnits

  saveRawMaterial(data:any){
    let URI = "http://localhost:3000/Inventory/RawMaterialApi/RawMaterial/Save";
    
    const headers = new Headers({ 'Content-Type': 'application/json' });
    
    return this.http.post(URI,data,{headers:headers}).pipe(map(res => {
      return res.json();
    }));
      
  }//savePurchaseHistory

  updateRawMaterial(id:object, data){

    let URI = "http://localhost:3000/Inventory/RawMaterialApi/RawMaterial/Update/"+id;
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.put(URI,data,{headers:headers}).pipe(map(res => {
      console.log(res.json());
      return res.json();
       }));
  }//updateCustomer

}//class ends
