import { DeliverableData } from "./deliverable-data";
import { InvoiceData } from "./invoice-data";

export interface PurchaseOrderData {
    _id:object;
    purchaser_id:object;
    vendor_id:object;
    order_date:Date;
    due_date:Date;
    status:string;
    payable:number;
    invoice:InvoiceData;
    deliverables:[DeliverableData];
}//interface ends
