import {Manufactured} from "./manufactured";
import {BOM} from "./bom";
import { List } from "../collection-models/list";

export class FinishedGood extends Manufactured{

    //API
    constructor(param:any){
        super(param);
        this.setLine(param.line);
        this.setPrice(param.price);
    }//method

    //mutators
    setLine(given_line:string):void{
        this.line=given_line;
    }//method

    setPrice(given_price:number):void{
        this.price=given_price;
    }//method

    //accessors
    getLine():string{
        return this.line;
    }//method

    getPrice():number{
        return this.price;
    }//method


    //data members
    private line:string;
    private price:number;
}
