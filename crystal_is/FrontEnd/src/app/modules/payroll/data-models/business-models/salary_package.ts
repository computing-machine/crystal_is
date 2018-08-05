import { Summary } from "./summary";
import { List } from "../collection-models/list";
import { SalaryPackageData } from "../json-models/salary-package-data";
import { Facility } from "./facility";

export class SalaryPackage{

    //API
    constructor(salary_package_data:SalaryPackageData){
        this.setSummary(new Summary(salary_package_data.summary));
        
        this.facilities=new List<Facility>();
        for(let facility_data of salary_package_data.facilities){
            this.facilities.add(new Facility(facility_data));
        }//for

    }//method

    //methods
    register():Boolean{return;}//method
    getInterReq():Number{return;}//method

    //mutators
    setSummary(given_summary:Summary):void{
        this.summary=given_summary;
    }//method

    //accessors
    getSummary():Summary{return this.summary;}
    getFacilities():List<Facility>{return this.facilities;}

    //data members
    private summary:Summary;
    private facilities: List <Facility>;
    
  
}
