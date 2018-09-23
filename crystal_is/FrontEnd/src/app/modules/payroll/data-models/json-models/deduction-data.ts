import { PaymentData } from "./payment-data";

export class DeductionData {
    category_id:object;
    total_amount:number;
    deduction_per_month:number;
    remaining_balance:number;
    payments:[PaymentData];
}//interface ends
