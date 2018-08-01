import {Unit} from "./unit";
import {List} from "../collection-models/list";
import {AttributeSet} from "./attribute-set";


export abstract class Item {

    //API
    constructor(param:any){
        this.setId(param._id);
        this.setName(param.name);
        this.setDescription(param.description);
        this.setStock(param.stock);
        this.setUnitId(param.unit_id);
        this.setCost(param.cost);
        this.setAttrSet(new AttributeSet(param.attributes));

    }//constructor

    abstract calCost():void;

    getUnitName(units:List<Unit>){
        for(let unit of units){
            if(unit.getId()==this.getUnitId()){
                return unit.getName();
            }//if
        }//for
    }//method

    //mutators
    setId(id:Object):void{this.item_id=id;}
    setName(given_name:string):void{this.name=given_name;}
    setDescription(given_description):void{this.description=given_description;}
    setStock(given_stock:number):void{this.stock=given_stock;}
    setUnitId(given_unit_id:object):void{this.unit_id=given_unit_id;}
    setCost(given_cost:number):void{this.cost=given_cost;}
    setAttrSet(attr_set:AttributeSet){this.attributes=attr_set;}

    //accessors
    getId():Object{return this.item_id;}
    getUnitId():object{return this.unit_id;}
    getName():string{return this.name;}
    getDescription():string{return this.description;}
    getStock():number{return this.stock;}
    getCost():number{return this.cost;}
    getAttrSet(){return this.attributes}


    //data members
    private item_id:Object;
    private name:string;
    private description:string;
    private unit_id:object;
    private stock:number;
    private cost:number;
    private attributes:AttributeSet;
}
