import {Converter} from "./converter";
import {List} from "../../../../app-data-models/collection-models/list";

export class Unit {

    //API
    constructor(param:any){
        this.name="";
        this.converters=new List<Converter>();
        this.id=param._id;

        this.setName(param.name);
        this.setDescription(param.description);
        this.setStatus(param.status);
        
        for(let converter of param.converters){
            this.getConverters().add(new Converter(converter.unit_name, converter.factor));
        }//for
    }

    addConverter(given_converter:Converter){this.getConverters().add(given_converter);}
    
    convert(given_unit_name:string, given_quantity:number){
        
        for(let converter of this.getConverters()){
            if(converter.getUnitName()===given_unit_name){
                return converter.convert(given_quantity);
            }//if
        }//for
    }//convert

    //accessors
    getName():string{return this.name;}
    getConverters():List<Converter>{return this.converters}
    getId():object{return this.id;}
    getDescription():string{return this.description;}
    getStatus():string{return this.status;}

    //mutators
    setName(given_name:string):void{this.name=given_name;}
    setDescription(given_description){this.description=given_description;}
    setStatus(status:string):void{this.status=status;}

    //data members
    private id:object;
    private name:string;
    private description;
    private converters:List<Converter>;
    private status:string;
}
