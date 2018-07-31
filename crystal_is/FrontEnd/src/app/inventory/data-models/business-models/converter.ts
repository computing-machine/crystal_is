export class Converter {

    //constructor
    constructor(given_unit_name:string, factor:number){
        this.setUnitName(given_unit_name);
        this.setFactor(factor);
    }//constructor

    convert(quantity:number):number{return quantity*this.getFactor();}//convert

    //accessorss
    getUnitName():string{return this.unit_name;}
    getFactor():number{return this.factor;}

    //mutators
    setUnitName(given_unit_name:string):void{this.unit_name=given_unit_name;}
    setFactor(given_factor:number):void{this.factor=given_factor;}

    //data members
    private unit_name:string;
    private factor:number;
}
