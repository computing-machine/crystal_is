import { SalaryPackageData } from "./salary-package-data";
import { FacilityData } from "../json-models/facility-data";

export class JobDescriptionData {
    _id:object;
    department:string;
    designation:string;
    salary_packages:[SalaryPackageData];
    facilities:[FacilityData];
}//interface ends
