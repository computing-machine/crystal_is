import {ProductionComponent} from "./production-component";
import {BOM} from "./bom";
import {Intermediary} from "./intermediary";
import { List } from "../collection-models/list";

export class IntermediaryComponent extends ProductionComponent{

    constructor(param:any, given_intermediaries:List<Intermediary>){
        super(param);
        this.bom_id=param.bom_id;
        this.setInter(this.findInter(given_intermediaries));
    }//constructor

    setInter(given_intermediary:Intermediary):void{this.intermediary=given_intermediary;}

    findInter(given_intermediaries:List<Intermediary>):Intermediary{
        for(let intermediary of given_intermediaries){
            if(intermediary.getId()==this.getItemId()){
                return intermediary;
            }//if
        }//for
    }//getRawMat

    getIntermediary():Intermediary{return this.intermediary;}

    private intermediary:Intermediary;
    private bom_id:object;
}
