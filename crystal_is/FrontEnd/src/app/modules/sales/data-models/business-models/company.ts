export class Company {
    //private members
    private name : string

    //constructor
    constructor(companydata ?: any){
        if(companydata!=undefined){
            this.setCompanyName(companydata.name);
        }//if
    }

    setCompanyName(company_name:string){
        this.name = company_name;
    }//setCompanyName

    getCompanyName():string{
        return this.name;
    }//getCompanyName
}
