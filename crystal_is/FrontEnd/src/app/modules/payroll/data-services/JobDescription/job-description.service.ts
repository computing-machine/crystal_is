import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class JobDescriptionService {

  constructor(private http:Http) { }

  getAllJobDescriptions(){
    return this.http.get("http://localhost:3000/Payroll/JobDescriptionApi/JobDescriptions").pipe(map(data=>{
      return data.json();
    }));
  }

  getJobDes(id){
    return this.http.get("http://localhost:3000/Payroll/JobDescriptionApi/JobDescriptions/"+id).pipe(map(data=>{
      return data.json();
    }));
  }

}
