import { PurchaseHistoryRecordData } from "./purchase-history-record-data";

export interface PurchaseHistoryData{
    purchase_records:[PurchaseHistoryRecordData];
    magnitude:number;
}//interface ends