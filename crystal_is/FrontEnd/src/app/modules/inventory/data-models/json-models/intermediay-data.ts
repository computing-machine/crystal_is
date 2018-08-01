import { AttributesRecordData } from './attributes-record-data';
import { QualitativeAttributesRecordData } from './qualitative-attributes-record-data';


export interface IntermediaryData{
    name:string;
    description:string,
    unit_id:object;
    stock:number;
    attributes:[AttributesRecordData];
    qualitative_attributes:[QualitativeAttributesRecordData];
    line:string;
    wastage:number;
    bom_id:object;
}