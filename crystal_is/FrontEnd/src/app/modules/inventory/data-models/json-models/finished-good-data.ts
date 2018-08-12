import { StockInfoData } from './stock-info-data';
import { AttributeSetData } from './attribute-set-data';


export interface FinishedGoodData {
    name:string;
    description:string,
    stock_info:StockInfoData;
    attributes:AttributeSetData;
    line:string,
    bom_id:object;
    price:Number
}