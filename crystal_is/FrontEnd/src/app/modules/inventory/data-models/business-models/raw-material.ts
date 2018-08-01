import {NonManufactured} from "./non-manufactured";

export class RawMaterial extends NonManufactured{

    //API
    getWastage():number{
        return this.wastage;
    }//method

    //data members
    private wastage:number;
}
