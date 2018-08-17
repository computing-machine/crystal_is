import { ProductionComponent} from "./production-component";
import { RawMaterial } from "./raw-material";
import { List } from "../../../../app-data-models/collection-models/list";
import { Unit } from "./unit";

export class RawMaterialComponent extends ProductionComponent{

    constructor(param:any, given_raw_materials:List<RawMaterial>){
        super(param);
        this.setRawMat(this.findRawMat(given_raw_materials));
    }//constructor

    setRawMat(given_raw_material:RawMaterial):void{this.raw_material=given_raw_material;}

    findRawMat(given_raw_materials:List<RawMaterial>):RawMaterial{
        for(let raw_material of given_raw_materials){
            if(raw_material.getId()==this.getItemId()){
                return raw_material;
            }//if
        }//for
    }//getRawMat

    getRawMat():RawMaterial{return this.raw_material;}

    private raw_material:RawMaterial;
}
