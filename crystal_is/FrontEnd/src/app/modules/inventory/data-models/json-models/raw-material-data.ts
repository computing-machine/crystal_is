import { AttributesRecordData} from './attributes-record-data';
import {QualitativeAttributesRecordData} from './qualitative-attributes-record-data';

export interface RawMaterialData{
    name:string;
    description:String;
    stock:Number;
    wastage:Number;
    unit_id:object;
    attributes :[AttributesRecordData];
    qualitative_attributes :[QualitativeAttributesRecordData];
    purchase_history_id:object;

}