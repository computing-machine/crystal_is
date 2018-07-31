import {Item} from "./item";
import {BOM} from "./bom";

export class Manufactured extends Item{
    constructor(param:any){
        super(param);
        this.setBomId(param.bom_id);
    }

    calCost(){
        return this.getBom().getCost()
    }//calCost

    setBomId(id:object):void{this.bom_id=id;}
    setBom(given_bom:BOM):void{this.bom=given_bom;}

    getBomId():object{return this.bom_id;}
    getBom():BOM{return this.bom;}

    private bom_id:object;
    private bom:BOM;
}
