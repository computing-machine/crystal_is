import {RawMaterialComponent} from "./raw-material-component";
import {IntermediaryComponent} from "./intermediary-component";
import {RawMaterial} from "./raw-material";
import { List } from "../../../../app-data-models/collection-models/list";
import { Intermediary } from "./intermediary";

export class BOM {

    constructor(param:any, given_raw_materials:List<RawMaterial>, given_intermediaries:List<Intermediary>){
        this.setRawMatCompoList(new List<RawMaterialComponent>());
        this.setInterCompoList(new List<IntermediaryComponent>());

        for(let i in param.rm){
            this.addToRawMatCompoList(new RawMaterialComponent(param.rm[i], given_raw_materials));
        }//for

        for(let i in param.inter){
            this.addToInterCompoList(new IntermediaryComponent(param.inter[i], given_intermediaries));
        }//for
        this.id=param._id;
    }//constructor

    getCost(){
        let sum:number=0;
        if(this.getRawMatCompoList().getLength()!=0){
            for(let rm_compo of this.getRawMatCompoList()){
                sum+=rm_compo.getRawMat().getCost();
            }//for
        }//if

        if(this.getInterCompoList().getLength()!=0){
            for(let inter_compo of this.getInterCompoList()){
                sum+=inter_compo.getIntermediary().getCost();
            }//for
        }//if
        return sum;
    }//getCost

    //mutators
    setRawMatCompoList(given_list:List<RawMaterialComponent>){this.rm_components=given_list;}
    setInterCompoList(given_list:List<IntermediaryComponent>){this.inter_components=given_list;}

    //accessors
    getRawMatCompoList():List<RawMaterialComponent>{return this.rm_components;}
    getInterCompoList():List<IntermediaryComponent>{return this.inter_components;}
    getId():object{return this.id;}

    //others
    private addToRawMatCompoList(given_compo:RawMaterialComponent){this.getRawMatCompoList().add(given_compo);}
    private addToInterCompoList(given_compo:IntermediaryComponent){this.getInterCompoList().add(given_compo);}

    private rm_components:List<RawMaterialComponent>;
    private inter_components:List<IntermediaryComponent>;
    private id:object;
}
