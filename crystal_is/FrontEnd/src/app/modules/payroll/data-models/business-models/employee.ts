import {List} from "../collection-models/list";
import {Deduction} from "./deduction";
import { EmployeeData } from "../json-models/employee-data";
import { Address } from "./address";
import { Contact } from "./contact";

export class Employee{

    //API
    constructor(employee:EmployeeData){

        this.setId(employee._id);
        this.setName(employee.name);
        this.addresses=new List<Address>();
        for(let address of employee.addresses){
            this.addresses.add(new Address(address));
        }//for

        this.contacts=new List<Contact>();
        for(let contact of employee.contacts){
            this.contacts.add(new Contact(contact));
        }//for

        this.deductions=new List<Deduction>();
        for(let deduction of employee.deductions){
            this.deductions.add(new Deduction(deduction));
        }//for
        
        this.setContract(employee.contract);
        this.setJoiningDate(employee.joining_date);
        this.setJobDescriptionId(employee.job_description_id);
        this.setSupervisorId(employee.supervisor_id);
        this.setLogInInfoId(employee.log_in_info_id);

    }//method

    //methods
    register():Boolean{return;}//method
    getInterReq():Number{return;}//method

    //mutators
    setName(given_name:string):void{this.name=given_name;}//method
    setContract(given_contract:Number):void{this.contract=given_contract;}//method
    setJoiningDate(given_joining_date:Date):void{this.joining_date=given_joining_date;}//method
    setJobDescriptionId(given_job_description_id:object):void{this.job_description_id=given_job_description_id;}//method
    setSupervisorId(given_supervisor_id:object):void{this.supervisor_id=given_supervisor_id;}//method
    setId(given_id:object):void{this.id=given_id;}
    setLogInInfoId(given_id:object):void{this.log_in_info_id=given_id;}

    //accessors
    getId():object{return this.id;}
    getName():string{return this.name;}//method
    getAddresses():List<Address>{return this.addresses;}//method
    getContacts():List<Contact>{return this.contacts;}//method
    getContract():Number{return this.contract;}//method
    getJoiningDate():Date{return this.joining_date;}//method
    getJobDescriptionId():object{return this.job_description_id;}//method
    getSupervisorId():object{return this.supervisor_id;}//method
    getDeductions():List<Deduction>{return this.deductions;}
    getLogInInfoId():object{return this.log_in_info_id;}

    //data members
    private id:object;
    private name:string;
    private addresses:List<Address>;
    private contacts:List<Contact>;
    private contract:Number;
    private joining_date:Date;
    private job_description_id:object;
    private deductions: List<Deduction>;
    private supervisor_id:object;
    private log_in_info_id:object;
}//class ends
