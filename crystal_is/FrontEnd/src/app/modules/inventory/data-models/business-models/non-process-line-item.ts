import {Item} from "./item";
import {List} from "../../../../app-data-models/collection-models/list";
import {PurchaseHistory} from "./purchase-history";
import { PurchaseRecord } from "./purchase-record";

export class NonProcessLineItem extends Item {
    constructor(param:any){
        super(param);
        this.setPurchaseHistoryId(param.purchase_history_id);
    }

    //methods
    calCost():void{
        let sum:number=0;
        let average_purchase_price:number=0;
        for(let purchase_record of this.getPurchaseRecords()){
            sum+=purchase_record.getPrice();
        }//for
        average_purchase_price=sum/this.getPurchaseRecords().getLength();
        this.setCost(average_purchase_price);
    }//calCost

    //mutators
    setPurchaseHistory(given_purchase_history:PurchaseHistory):void{this.purchase_history=given_purchase_history;}
    setPurchaseHistoryId(id:object):void{this.purchase_history_id=id;}

    //accessors
    getPurchaseHistory():PurchaseHistory{return this.purchase_history;}
    getPurchaseHistoryId():object{return this.purchase_history_id;}
    getPurchaseRecords():List<PurchaseRecord>{return this.getPurchaseHistory().getPurchaseRecords();}

    //data members
    private purchase_history_id:object;
    private purchase_history:PurchaseHistory;
}//class ends
