import { StockInfoData } from './stock-info-data';
import { AttributeSetData } from './attribute-set-data';

export interface RawMaterialData{
    _id?:object;
    name:string;
    description:string;
    stock_info:StockInfoData;
    wastage:number;
    cost:number;
    attributes :AttributeSetData;
    purchase_history_id:object;
    status:string;

}