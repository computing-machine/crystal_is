import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private http:Http) { }

  getAllAttendances(){
    return this.http.get("http://localhost:3000/Payroll/AttendanceApi/Attendance").pipe(map(data=>{
      return data.json();
    }));
  }

}
