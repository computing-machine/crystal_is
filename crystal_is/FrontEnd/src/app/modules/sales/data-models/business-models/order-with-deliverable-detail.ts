import {FGDetailWithQuantity} from './fgdetail-with-quantity';
import {SalesOrder} from './sales-order';
import {List} from "../../../../app-data-models/collection-models/list";

export class OrderWithDeliverableDetail {
    private deli_detail : List<FGDetailWithQuantity>;
    private estimate : SalesOrder;
    //constructor()
    constructor(order : SalesOrder,fg_list : List<FGDetailWithQuantity> ){
        this.setEstimate(order);
        this.setdeliverableDetail(fg_list);
    }//constructor

    setEstimate(Estimate : SalesOrder){
        this.estimate = Estimate;
    }//setEstimate
    setdeliverableDetail(Deli_detail : List<FGDetailWithQuantity>){
        this.deli_detail = Deli_detail;
    }//setdeliverableDetail
    getEstimate():SalesOrder{return this.estimate;}//getEstimate
    getdeliverableDetail():List<FGDetailWithQuantity>{return this.deli_detail;}
}//OrderWithDeliverableDetail
