import { QuantitativeAttributeData } from "./quantitative-attribute-data";
import { QualitativeAttributeData } from "./qualitative-attribute-data";

export interface AttributeSetData {
    quantitative_attributes:[QuantitativeAttributeData],
    qualitative_attributes:[QualitativeAttributeData]
}//interface ends
