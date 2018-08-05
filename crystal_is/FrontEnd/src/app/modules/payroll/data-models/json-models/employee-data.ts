import { ContactData } from "./contact-data";
import { AddressData } from "./address-data";
import { DeductionData } from "./deduction-data";

export class EmployeeData {
    _id:object;
    name:string;
    contract:number;
    joining_date:Date;
    addresses:[AddressData];
    contacts:[ContactData]
    job_description_id:object;
    deductions:[DeductionData];
    supervisor_id:object;
    log_in_info_id:object;
}//interface ends
