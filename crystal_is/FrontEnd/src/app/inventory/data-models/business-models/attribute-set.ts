import {QuantitativeAttribute} from "./quantitative-attribute";
import {QualitativeAttribute} from "./qualitative-attribute";
import {List} from "../collection-models/list";

export class AttributeSet {
    constructor(param:any){
        this.quantitative_attributes=new List<QuantitativeAttribute>();
        this.qualitative_attributes=new List<QualitativeAttribute>();
        
        for(let attribute_data of param.quantitative_attributes){
            this.quantitative_attributes.add(new QuantitativeAttribute(attribute_data));
        }//for

        for(let attribute_data of param.qualitative_attributes){
            this.qualitative_attributes.add(new QualitativeAttribute(attribute_data));
        }//for
    }//constructor

    getQuanAttrSet():List<QuantitativeAttribute>{return this.quantitative_attributes;}
    getQualAttrSet():List<QualitativeAttribute>{return this.qualitative_attributes;}

    private quantitative_attributes:List<QuantitativeAttribute>;
    private qualitative_attributes:List<QualitativeAttribute>;
}
