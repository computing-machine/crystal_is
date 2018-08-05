import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor(private http:Http) { }
  
  getLogInInfo(given_user:string, given_pass:string){
    return this.http.get("http://localhost:3000/Payroll/LogInApi/Log/User/"+given_user+"/Pass/"+given_pass).pipe(map(data=>{
      return data.json();
    }));
  }//method

}//class ends
