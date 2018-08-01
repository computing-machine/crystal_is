import {List} from "../collection-models/list";
import {Month} from "./months";

export class Attendance{

    //API
    constructor(attendance:any){

        this.setEmployeeId(attendance.employee_id);
        this.setYear(attendance.year);
        this.setMonths(attendance.months);

    }//method

    //methods
    register():Boolean{return;}//method
    getInterReq():Number{return;}//method

    //mutators
    setEmployeeId(given_employee_id:String):void{
        this.employee_id=given_employee_id;
    }//method

    setYear(given_year:Date):void{
        this.year=given_year;
    }//method
    setMonths(given_months:List<Month>):void{
        this.months=given_months;
    }//method



    //accessors
    getEmployeeId():String{
        return this.employee_id;
    }//method

    getYear():Date{
        return this.year;
    }//method

    getMonths():List<Month>{
        return this.months;

    }//method


    //data members
    //private bom:BOM;
    private employee_id:String;
    private year:Date;
    private months: List<Month>;
}
