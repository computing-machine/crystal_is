import { Manufactured } from "./manufactured";
import { List } from "../collection-models/list";

export class Intermediary extends Manufactured{

    constructor(params:any){
        super(params);
    }//constructor

    //API
    getLine():string{
        return this.line;
    }//method

    get():Intermediary{return this.intermediary;}

    private intermediary:Intermediary;
    private line:string;
}
