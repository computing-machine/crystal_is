import {List} from "../collection-models/list";
import {Month} from "./months";
import { AttendanceData } from "../json-models/attendance-data";

export class Attendance{

    //API
    constructor(attendance_data:AttendanceData){

        this.setEmployeeId(attendance_data.employee_id);
        this.setYear(attendance_data.year);
        
        this.months=new List<Month>();
        for(let month_data of attendance_data.months){
            this.months.add(new Month(month_data));
        }//for

    }//method

    //methods
    register():Boolean{return;}//method
    getInterReq():Number{return;}//method

    //mutators
    setEmployeeId(given_employee_id:object):void{
        this.employee_id=given_employee_id;
    }//method

    setYear(given_year:number):void{
        this.year=given_year;
    }//method

    //accessors
    getEmployeeId():object{
        return this.employee_id;
    }//method

    getYear():number{
        return this.year;
    }//method

    getMonths():List<Month>{
        return this.months;

    }//method


    //data members
    private employee_id:object;
    private year:number;
    private months: List<Month>;
}
