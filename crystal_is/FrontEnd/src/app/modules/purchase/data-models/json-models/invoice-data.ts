import { PaymentData } from "./payment-data";

export interface InvoiceData {
    ref_number:number;
    payments:[PaymentData];
}//interface ends
