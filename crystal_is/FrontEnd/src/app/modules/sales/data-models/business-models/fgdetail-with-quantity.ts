import { Unit } from '../../../inventory/data-models/business-models/unit';
import {FinishedGood} from '../../../inventory/data-models/business-models/finished-good';
export class FGDetailWithQuantity {
       //private members declaration
       private fg: FinishedGood;
       private quantity : any;
       private unit : Unit;

         constructor(fg:FinishedGood , quantity:any,unit : Unit){
             this.setFg(fg);
             this.setUnit(unit);
             this.setQuantity(quantity);
         };//constructor
    //functions 
    setFg(FG : FinishedGood){ this.fg = FG;}//setFG
    setQuantity(quan : any){this.quantity = quan;}//setQuantity
    setUnit(Unit : Unit){this.unit = Unit}//setUnit
    getFG():FinishedGood{return this.fg;}//getFG
    getQuantity():any{return this.quantity;}//getQuantity
    getUnit():Unit{return this.unit;}//getUnit
}
