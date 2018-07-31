import {Attribute} from "./attribute";

export class QualitativeAttribute extends Attribute {

    //API
    constructor(param:any){
        super(param.name);
        this.setDescription(param.description);
    }

    setDescription(given_desc:string){
        this.description=given_desc;
    }

    getDescription():string{
        return this.description;
    }//method

    //data members
    private description:string;
}