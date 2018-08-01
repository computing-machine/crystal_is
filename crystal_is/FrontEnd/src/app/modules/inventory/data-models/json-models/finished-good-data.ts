import { AttributesRecordData } from './attributes-record-data';
import { QualitativeAttributesRecordData } from './qualitative-attributes-record-data';


export interface FinishedGoodData {
    name:string;
    description:string,
    unit_id:object;
    stock:number;
    attributes:[AttributesRecordData];
    qualitative_attributes:[QualitativeAttributesRecordData];
    line:string,
    bom_id:object;
    price:Number
}