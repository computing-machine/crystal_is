import {Unit} from "./unit";
import {List} from "../../../../app-data-models/collection-models/list";
import {AttributeSet} from "./attribute-set";
import { StockInfo } from "./stock-info";


export abstract class Item {

    //API
    constructor(param:any){
        this.setId(param._id);
        this.setName(param.name);
        this.setDescription(param.description);
        this.setStockInfo(new StockInfo(param.stock_info));
        this.setCost(param.cost);
        this.setAttrSet(new AttributeSet(param.attributes));
        this.setStatus(param.status);

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
    setStockInfo(given_stock_info:StockInfo):void{this.stock_info=given_stock_info;}
    setCost(given_cost:number):void{this.cost=given_cost;}
    setAttrSet(attr_set:AttributeSet){this.attributes=attr_set;}
    setStatus(value:string):void{this.status=value;}

    //accessors
    getId():Object{return this.item_id;}
    getUnitId():object{return this.stock_info.getUnitId();}
    getName():string{return this.name;}
    getDescription():string{return this.description;}
    getStockInfo():StockInfo{return this.stock_info;}
    getStock():number{return this.stock_info.getAvailQuan();}
    getCost():number{return this.cost;}
    getAttrSet(){return this.attributes}
    getStatus():string{return this.status;}


    //data members
    private item_id:Object;
    private name:string;
    private description:string;
    private stock_info:StockInfo;
    private attributes:AttributeSet;
    private cost:number;
    private status:string;
}//class ends
