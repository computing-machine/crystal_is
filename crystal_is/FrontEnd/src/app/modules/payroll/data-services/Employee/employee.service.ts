import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:Http) { }
  
  getPurchasers(){
    return this.http.get("http://localhost:3000/Payroll/EmployeeApi/Employees/Department/Purchase/Designation/Purchaser").pipe(map(data=>{
      return data.json();
    }));
  }//method

  getPurchaser(id:object){
    return this.http.get("http://localhost:3000/Payroll/EmployeeApi/Employee/"+id).pipe(map(data=>{
      return data.json();
    }));
  }//method

  getEmployee(id:object){
    return this.http.get("http://localhost:3000/Payroll/EmployeeApi/Employee/"+id).pipe(map(data=>{
      return data.json();
    }));
  }//method

  getEmployees(){
    return this.http.get("http://localhost:3000/Payroll/EmployeeApi/Employees").pipe(map(data=>{
      return data.json();
    }));
  }//method

  getEmpByLogId(id){
    return this.http.get("http://localhost:3000/Payroll/EmployeeApi/Employee/LogId/"+id).pipe(map(data=>{
      return data.json();
    }));
  }//method

}//class ends
