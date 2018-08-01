import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SalaryPackageService {

  constructor(private http:Http) { }

  getAllSalaryPackages(){
    return this.http.get("http://localhost:3000/Payroll/SalaryPackageApi/SalaryPackages").pipe(map(data=>{
      return data.json();
    }));

  }

}
