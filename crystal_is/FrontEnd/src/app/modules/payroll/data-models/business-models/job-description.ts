import { List } from "../../../../app-data-models/collection-models/list";
import { SalaryPackage } from "./salary_package";
import { JobDescriptionData } from "../json-models/job-description-data";
import { SalaryPackageData } from "../json-models/salary-package-data";
import { Facility } from "./facility";
import {FacilityData} from "../json-models/facility-data";

export class JobDescription{

    //API
    constructor(job_description_data:JobDescriptionData){

        this.setDepartment(job_description_data.department);
        this.setDesignation(job_description_data.designation);
        this.salary_packages_ids=new List<object>();

        for(let salary_package_id of job_description_data.salary_packages){
            this.salary_packages_ids.add(salary_package_id);
        }//for

        this.facilities=new List<Facility>();
        for(let facility_data of job_description_data.facilities){
            this.facilities.add(new Facility(facility_data))
        }//for

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

    //accessors
    getDepartment():String{
        return this.department;
    }//method

    getDesignation():String{
        return this.designation;
    }//method

    getSalaryPackages():List<object>{
        return this.salary_packages_ids;
    }//method

    getFacilities():List<Facility>{
        return this.facilities;
    }//method
    


    //data members
    //private bom:BOM;
    private department:String;
    private designation:String;
    private salary_packages_ids: List<object>;
    private facilities: List<Facility>;
}
