import { RecievingData } from "./recieving-data";

export interface DeliverableData {
    rm_id:object;
    unit_id:object;
    price:number;
    quantity:number;
    recievings:[RecievingData];
}//interface ends
