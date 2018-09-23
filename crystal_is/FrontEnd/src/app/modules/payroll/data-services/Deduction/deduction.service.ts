import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DeductionService {

  constructor(private http:Http) { }

  getAllDeductions(){
    return this.http.get("http://localhost:3000/Payroll/DeductionApi/Deductions").pipe(map(data=>{
      return data.json();
    }));

  }
}
