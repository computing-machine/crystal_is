import {NonManufactured} from "./non-manufactured";
import { RawMaterialData } from "../json-models/raw-material-data";

export class RawMaterial extends NonManufactured{

    constructor(params:any){
        super(params);
    }//constructor

    //API
    getWastage():number{
        return this.wastage;
    }//method

    //data members
    private wastage:number;
}
