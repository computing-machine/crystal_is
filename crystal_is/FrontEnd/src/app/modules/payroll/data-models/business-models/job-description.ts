import { List } from "../collection-models/list";
import { SalaryPackage } from "./salary_package";
import { Advantages } from "./advantages";

export class JobDescription{

    //API
    constructor(jobDescription:any){

        this.setDepartment(jobDescription.department);
        this.setDesignation(jobDescription.designation);
        this.setSalaryPackage(jobDescription.salary_package);
        this.setAdvantages(jobDescription.advantages);

    }//method

    //methods
    register():Boolean{return;}//method
    getInterReq():Number{return;}//method

    //mutators
    setDepartment(given_department:String):void{
        this.department=given_department;
    }//method

    setDesignation(given_designation:String):void{
        this.designation=given_designation;
    }//method
    setSalaryPackage(given_salary_package:List<SalaryPackage>):void{
        this.salary_package=given_salary_package;
    }//method
    setAdvantages(given_advantages:List<Advantages>):void{
        this.advantages=given_advantages;
    }//method





    //accessors
    getDepartment():String{
        return this.department;
    }//method

    getDesignation():String{
        return this.designation;
    }//method

    getSalaryPackage():List<SalaryPackage>{
        return this.salary_package;
    }//method

    getAdvantages():List<Advantages>{
        return this.advantages;
    }//method
    


    //data members
    //private bom:BOM;
    private department:String;
    private designation:String;
    private salary_package: List<SalaryPackage>;
    private advantages: List<Advantages>;
}
