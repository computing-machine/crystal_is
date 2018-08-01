import { Manufactured } from "./manufactured";
import { List } from "../collection-models/list";

export class Intermediary extends Manufactured{

    //API
    getLine():number{
        return this.line;
    }//method

    get():Intermediary{return this.intermediary;}

    private intermediary:Intermediary;
    private line:number;
}
