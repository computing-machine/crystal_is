import { Summary } from "./summary";
import { List } from "../collection-models/list";
import { Facilities } from "./facilities";

export class SalaryPackage{

    //API
    constructor(salaryPackage:any){
        this.setSummary(salaryPackage.summary);
        this.setFacilities(salaryPackage.facilities);

    }//method

    //methods
    register():Boolean{return;}//method
    getInterReq():Number{return;}//method

    //mutators
    setSummary(given_summary:List<Summary>):void{
        this.summary=given_summary;
    }//method
    setFacilities(given_facilities:List<Facilities>):void{
        this.facilities=given_facilities;
    }//method





    //accessors
    getSalaryPackage():List<Summary>{
        return this.summary;
    }//method

    getAdvantages():List<Facilities>{
        return this.facilities;
    }//method

    private summary:List <Summary>;
    private facilities: List <Facilities>;
    
  
}
