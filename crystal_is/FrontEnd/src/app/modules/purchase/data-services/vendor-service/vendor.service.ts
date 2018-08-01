import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http:Http) { }

  getVendors(){
    return this.http.get("http://localhost:3000/Purchase/VendorApi/Vendors").pipe(map(data=>{return data.json();}));
  }//method

  getVendor(id:object){
    return this.http.get("http://localhost:3000/Purchase/VendorApi/Vendor/"+id).pipe(map(data=>{return data.json();}));
  }//method
}