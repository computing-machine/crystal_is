import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray} from "@angular/forms";
import { List } from '../../../../purchase/data-models/collection-models/list';
import { Unit } from '../../../data-models/business-models/unit';
import {UnitService} from "../../../data-services/unit/unit.service";
import { PurchaseHistoryService } from '../../../data-services/purchase-history/purchase-history.service';
import { PurchaseHistoryData } from '../../../data-models/json-models/purchase-history-data';
import { PurchaseHistory } from '../../../data-models/business-models/purchase-history';
import { RawMaterialData } from '../../../data-models/json-models/raw-material-data';
import { RawMaterialService } from '../../../data-services/RawMaterial/raw-material.service';
import { RawMaterial } from '../../../data-models/business-models/raw-material';
import { Intermediary } from '../../../data-models/business-models/intermediary';
import {IntermediaryService} from "../../../data-services/Intermediary/intermediary.service";
import {BOM} from "../../../data-models/business-models/bom";
import {BomService} from "../../../data-services/Bom/bom.service";
import { IntermediaryData } from '../../../data-models/json-models/intermediay-data';

@Component({
  selector: 'app-add-intermediary',
  templateUrl: './add-intermediary.component.html',
  styleUrls: ['./add-intermediary.component.css']
})
export class AddIntermediaryComponent implements OnInit {

  constructor(private fb:FormBuilder, private unit_service:UnitService,
    private purchase_history_service:PurchaseHistoryService,
  private raw_material_service:RawMaterialService, private intermediary_service:IntermediaryService,
private bom_service:BomService) { }
  
    ngOnInit() {
      this.data_ready=false;
      this.units=new List<Unit>();
      this.raw_materials=new List<RawMaterial>();
      this.intermediarys=new List<Intermediary>();

      this.raw_material_service.getRawMaterials().subscribe(raw_materials_data=>{
        for(let data of raw_materials_data){
          this.raw_materials.add(new RawMaterial(data));
        }//for

        //asyn func
        this.intermediary_service.getIntermediarys().subscribe(intermediarys_data=>{
          for(let data of intermediarys_data){
            this.intermediarys.add(new Intermediary(data));
          }//for

          //asyn func
          this.unit_service.getActiveUnits().subscribe(units_data=>{
            for(let data of units_data){
              this.units.add(new Unit(data));
            }//for
      
            let general_form=this.fb.group({
              name:"",
              description:""
            });
      
            let stock_info_form=this.fb.group({
              unit_id:"",
              available:0,
              minimum:0
            });
      
            let attribute_set_form=this.fb.group({
              qualitative_attributes:this.fb.array([]),
              quantitative_attributes:this.fb.array([])
            });
    
            let bom_form=this.fb.group({
              bom_rms:this.fb.array([]),
              bom_inters:this.fb.array([])
            });
        
            this.inter_form=this.fb.group({
              general_info:general_form,
              stock_info:stock_info_form,
              attribute_set:attribute_set_form,
              bom_info:bom_form
            });
            this.data_ready=true;
          });
        });
      });

    }//ngOnInit
  
    get QuanAttr(){return this.inter_form.get("attribute_set").get("quantitative_attributes") as FormArray;}
    get QualAttr(){return this.inter_form.get("attribute_set").get("qualitative_attributes") as FormArray;}
  
    get getBomRm(){return this.inter_form.get("bom_info").get("bom_rms") as FormArray;}
    get getBomInter(){return this.inter_form.get("bom_info").get("bom_inters") as FormArray;}

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

    addBomRm(){
      let bom_rm=this.fb.group({
        id:"",
        unit_id:"",
        quantity:0
      });
      this.getBomRm.push(bom_rm);
    }//addQuanAttr

    addBomInter(){
      let bom_inter=this.fb.group({
        id:"",
        unit_id:"",
        quantity:0
      });
      this.getBomInter.push(bom_inter);
    }//addQuanAttr
  
    delQuanAttr(i){
      this.QuanAttr.removeAt(i);
    }
  
    delQualAttr(i){
      this.QualAttr.removeAt(i);
    }

    delBomRm(i){
      this.getBomRm.removeAt(i);
    }

    delBomInter(i){
      this.getBomInter.removeAt(i);
    }
  
    registerIntermediary(){
      let inter:IntermediaryData;
      let bom={
        "rm":this.inter_form.value.bom_info.bom_rms,
        "inter":this.inter_form.value.bom_info.bom_inters
      }
      this.bom_service.saveBom(bom).subscribe(response=>{
        inter={
          "name":this.inter_form.value.general_info.name,
          "description":this.inter_form.value.general_info.description,
          "stock_info":this.inter_form.value.stock_info,
          "wastage":0,
          "attributes" :this.inter_form.value.attribute_set,
          "bom_id":response._id,
          "line":"3A",
          "cost":0
        }
        this.intermediary_service.saveIntermediary(inter).subscribe(response=>{
          console.log(response);
        });
      })
    }//registerRawMaterial
  
    private inter_form:FormGroup;
    private units:List<Unit>;
    private raw_materials:List<RawMaterial>;
    private intermediarys:List<Intermediary>;
    private data_ready:boolean;

}//class ends
