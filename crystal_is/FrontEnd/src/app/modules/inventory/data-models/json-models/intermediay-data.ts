import { StockInfoData } from './stock-info-data';
import { AttributeSetData } from './attribute-set-data';


export interface IntermediaryData{
    name:string;
    description:string,
    stock_info:StockInfoData;
    attributes:AttributeSetData;
    line:string;
    cost:number,
    bom_id:object;
    status:string;
}