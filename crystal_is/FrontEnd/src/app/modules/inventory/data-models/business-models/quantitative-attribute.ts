import {Attribute} from "./attribute";
import {Unit} from "./unit"
import {List} from "../../../../app-data-models/collection-models/list";

export class QuantitativeAttribute extends Attribute {

    //constructor
    constructor(param:any){
        super(param.name);
        this.unit_id=param.unit_id;
        this.magnitude=param.magnitude;
    }

    //mutators
    setUnitId(given_unit_id:Object):void{this.unit_id=given_unit_id}
    setMagnitude(given_magnitude:number):void{this.magnitude=given_magnitude}

    //accessors
    getUnitId():Object{return this.unit_id;}
    getMagnitude():number{return this.magnitude;}
    getUnitName(given_units:List<Unit>):string{
        for(let unit of given_units){
            if(unit.getId()==this.getUnitId()){
                return unit.getName();
            }//if
        }//for
    }

    //data members
    private unit_id:Object;
    private magnitude:number;
}