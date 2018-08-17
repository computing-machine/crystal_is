import { Component, OnInit } from '@angular/core';
import {RawMaterial} from "../../../data-models/business-models/raw-material";
import {RawMaterialService} from "../../../data-services/RawMaterial/raw-material.service";
import { UnitService } from '../../../data-services/unit/unit.service';
import { ActivatedRoute } from '@angular/router';
import {Unit} from "../../../data-models/business-models/unit";
import {List} from "../../../data-models/collection-models/list";
import {Router} from "@angular/router";
import { FormBuilder, FormGroup, FormArray} from "@angular/forms";
import { RawMaterialData } from '../../../data-models/json-models/raw-material-data';
import { StockInfoData } from '../../../data-models/json-models/stock-info-data';
import { QuantitativeAttribute } from '../../../data-models/business-models/quantitative-attribute';
import { QualitativeAttribute } from '../../../data-models/business-models/qualitative-attribute';

@Component({
  selector: 'app-update-raw-material',
  templateUrl: './update-raw-material.component.html',
  styleUrls: ['./update-raw-material.component.css']
})
export class UpdateRawMaterialComponent implements OnInit {

  constructor(private fb:FormBuilder,private unit_service:UnitService,
    private route:ActivatedRoute, private router:Router, private rm_service:RawMaterialService) {
    this.route.params.subscribe(params=>this.old_rm_id=params.id);
   }//constructor
  
    ngOnInit() {
      this.data_ready=false;
      this.units=new List<Unit>();
      this.rm_service.getRawMaterial(this.old_rm_id).subscribe(data=>{
        this.old_rm=new RawMaterial(data);
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
      let raw_material_data:RawMaterialData;
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
          "wastage":this.old_rm.getWastage(),
          "cost":this.old_rm.getCost(),
          "status":this.old_rm.getStatus()
        }
        this.rm_service.updateRawMaterial(this.old_rm.getId(),raw_material_data).subscribe(response=>{
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
    private old_rm:RawMaterial;
    private rm_form:FormGroup;
    private units:List<Unit>;
    private data_ready:boolean;

}//class ends
