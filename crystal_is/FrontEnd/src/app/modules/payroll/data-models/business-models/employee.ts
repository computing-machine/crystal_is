import {List} from "../collection-models/list";
import {Deduction} from "./deduction";

export class Employee{

    //API
    constructor(employee:any){

        this.setId(employee._id);
        this.setName(employee.name);
        this.setAddress(employee.address);
        this.setContact(employee.contact);
        this.setContract(employee.contract);
        this.setStartTime(employee.start_time);
        this.setJobDescriptionId(employee.job_description_id);
        this.setSupervisorOfId(employee.supervisor_of_id);
        this.setDeduction(employee.deduction);


    }//method

    //methods
    register():Boolean{return;}//method
    getInterReq():Number{return;}//method

    //mutators
    setName(given_name:string):void{
        this.name=given_name;
    }//method

    setAddress(given_address:String):void{
        this.address=given_address;
    }//method

    setContact(given_contact:Number):void{
        this.contact=given_contact;
    }//method
    setContract(given_contract:Number):void{
        this.contract=given_contract;
    }//method
    setStartTime(given_start_time:Number):void{
        this.start_time=given_start_time;
    }//method
    setJobDescriptionId(given_job_description_id:String):void{
        this.job_description_id=given_job_description_id;
    }//method
    setSupervisorOfId(given_supervisor_of_id:String[]):void{
        this.supervisor_of_id=given_supervisor_of_id;
    }//method
    setDeduction(given_deduction:List<Deduction>):void{
        this.deductions=given_deduction;
    }//method

    setId(given_id:object):void{this.id=given_id;}






    //accessors
    getId():object{return this.id;}
    getName():string{
        return this.name;
    }//method

    getAddress():String{
        return this.address;
    }//method

    getContact():Number{
        return this.contact;
    }//method

    getContract():Number{
        return this.contract;
    }//method

    getStartTime():Number{
        return this.start_time;
    }//method
    getJobDescriptionId():String{
        return this.job_description_id;
    }//method
    getSupervisorOfId():String[]{
        return this.supervisor_of_id;
    }//method
    getDeduction():List<Deduction>{
        return this.deductions;
    }
    


    //data members
    //private bom:BOM;
    private id:object;
    private name:string;
    private address:String;
    private contact:Number;
    private contract:Number;
    private start_time:Number;
    private job_description_id:String;
    private deductions: List<Deduction>;
    private supervisor_of_id: String[] = [];
}
