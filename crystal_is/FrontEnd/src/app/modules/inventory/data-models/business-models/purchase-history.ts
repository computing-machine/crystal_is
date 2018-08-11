import {PurchaseRecord} from "./purchase-record";
import {List} from "../collection-models/list";

export class PurchaseHistory {
    constructor(param:any){
        this.setPurchaseRecords(new List<PurchaseRecord>());
        for(let record of param.purchase_records){
            this.addToPurchaseRecords(new PurchaseRecord(record));
        }//for
    }//constructor

    //methods
    addToPurchaseRecords(given_record:PurchaseRecord):void{this.getPurchaseRecords().add(given_record);}

    //mutators
    setPurchaseRecords(given_records:List<PurchaseRecord>):void{this.purchase_records=given_records;}

    //accessors
    getPurchaseRecords():List<PurchaseRecord>{return this.purchase_records;}

    setId(given_id:object):void{this.id=given_id;}
    getId():object{return this.id;}

    private id;
    private purchase_records:List<PurchaseRecord>;
}
