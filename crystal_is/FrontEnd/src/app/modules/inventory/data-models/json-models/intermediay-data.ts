import { StockInfoData } from './stock-info-data';
import { AttributeSetData } from './attribute-set-data';


export interface IntermediaryData{
    name:string;
    description:string,
    stock_info:StockInfoData;
    attributes:AttributeSetData;
    line:string;
    wastage:number;
    cost:number,
    bom_id:object;
}