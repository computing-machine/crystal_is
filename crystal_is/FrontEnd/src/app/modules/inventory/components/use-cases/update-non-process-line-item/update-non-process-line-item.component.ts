import { Component, OnInit } from '@angular/core';
import {NonProcessLineItem} from "../../../data-models/business-models/non-process-line-item";
import {NonProcessLineItemService} from "../../../data-services/non-process-line-item/non-process-line-item.service";
import { UnitService } from '../../../data-services/unit/unit.service';
import { ActivatedRoute } from '@angular/router';
import {Unit} from "../../../data-models/business-models/unit";
import {List} from "../../../../../app-data-models/collection-models/list";
import {Router} from "@angular/router";
import { FormBuilder, FormGroup, FormArray} from "@angular/forms";
import { NonProcessLineItemData } from '../../../data-models/json-models/non-process-line-item-data';
import { StockInfoData } from '../../../data-models/json-models/stock-info-data';
import { QuantitativeAttribute } from '../../../data-models/business-models/quantitative-attribute';
import { QualitativeAttribute } from '../../../data-models/business-models/qualitative-attribute';

@Component({
  selector: 'app-update-non-process-line-item',
  templateUrl: './update-non-process-line-item.component.html',
  styleUrls: ['./update-non-process-line-item.component.css']
})
export class UpdateNonProcessLineItemComponent implements OnInit {

  constructor(private fb:FormBuilder,private unit_service:UnitService,
    private route:ActivatedRoute, private router:Router, private rm_service:NonProcessLineItemService) {
    this.route.params.subscribe(params=>this.old_rm_id=params.id);
   }//constructor
  
    ngOnInit() {
      this.data_ready=false;
      this.units=new List<Unit>();
      this.rm_service.getNonProcessLineItem(this.old_rm_id).subscribe(data=>{
        this.old_rm=new NonProcessLineItem(data);
        this.unit_service.getActiveUnits().subscribe(units_data=>{
          for(let data of units_data){
            this.units.add(new Unit(data));
          }//for

          let quan_attr_array=[];
          let qual_attr_array=[];

          for(let quan_attr of this.old_rm.getAttrSet().getQuanAttrSet()){
            quan_attr_array.push(this.getPreviousQuanAttr(quan_attr));
          }//for

          for(let qual_attr of this.old_rm.getAttrSet().getQualAttrSet()){
            qual_attr_array.push(this.getPreviousQualAttr(qual_attr));
          }//for

          let general_info_form=this.fb.group({
            name:this.old_rm.getName(),
            description:this.old_rm.getDescription()
          });
    
          let stock_info_form=this.fb.group({
            minimum:0
          });
    
          let attribute_set_form=this.fb.group({
            qualitative_attributes:this.fb.array(qual_attr_array),
            quantitative_attributes:this.fb.array(quan_attr_array)
          });
      
          this.rm_form=this.fb.group({
            general_info:general_info_form,
            stock_info:stock_info_form,
            attribute_set:attribute_set_form,
          });
          this.data_ready=true;
        });
      });
    }//ngOnInit
  
    get QuanAttr(){return this.rm_form.get("attribute_set").get("quantitative_attributes") as FormArray;}
    get QualAttr(){return this.rm_form.get("attribute_set").get("qualitative_attributes") as FormArray;}
  
    addQuanAttr(){
      let quantitative_attribute=this.fb.group({
        name:"",
        unit_id:"",
        magnitude:0
      });
      this.QuanAttr.push(quantitative_attribute);
    }//addQuanAttr
  
    addQualAttr(){
      let qualitative_attribute=this.fb.group({
        name:"",
        description:""
      });
      this.QualAttr.push(qualitative_attribute);
    }//addQuanAttr
  
    delQuanAttr(i){
      this.QuanAttr.removeAt(i);
    }
  
    delQualAttr(i){
      this.QualAttr.removeAt(i);
    }
  
    updateRawMaterial(){
      let raw_material_data:NonProcessLineItemData;
      let stock_info_data:StockInfoData;
      stock_info_data={
        unit_id:this.old_rm.getStockInfo().getUnitId(),
        available:this.old_rm.getStock(),
        minimum:this.rm_form.value.stock_info.minimum
      }//data
      
        raw_material_data={
          "name":this.rm_form.value.general_info.name,
          "description":this.rm_form.value.general_info.description,
          "stock_info":stock_info_data,
          "attributes":this.rm_form.value.attribute_set,
          "purchase_history_id":this.old_rm.getPurchaseHistoryId(),
          "cost":this.old_rm.getCost(),
          "status":this.old_rm.getStatus()
        }
        this.rm_service.updateNonProcessLineItem(this.old_rm.getId(),raw_material_data).subscribe(response=>{
          console.log(response);
        });
    }//registerRawMaterial

    //supporting mehtods
    getPreviousQuanAttr(given_quan_attr:QuantitativeAttribute):FormGroup{
      return this.fb.group({
        name:given_quan_attr.getName(),
        unit_id:given_quan_attr.getUnitId(),
        magnitude:given_quan_attr.getMagnitude()
      });
    }//method

    getPreviousQualAttr(given_qual_attr:QualitativeAttribute):FormGroup{
      return this.fb.group({
        name:given_qual_attr.getName(),
        description:given_qual_attr.getDescription()
      });
    }//method
  
    private old_rm_id:object;
    private old_rm:NonProcessLineItem;
    private rm_form:FormGroup;
    private units:List<Unit>;
    private data_ready:boolean;

}//class ends
