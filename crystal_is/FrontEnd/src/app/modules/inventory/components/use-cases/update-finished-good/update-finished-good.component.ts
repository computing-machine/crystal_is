import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray} from "@angular/forms";
import { List } from "../../../../../app-data-models/collection-models/list";
import { Unit } from '../../../data-models/business-models/unit';
import {UnitService} from "../../../data-services/unit/unit.service";
import { RawMaterialData } from '../../../data-models/json-models/raw-material-data';
import { RawMaterialService } from '../../../data-services/RawMaterial/raw-material.service';
import { RawMaterial } from '../../../data-models/business-models/raw-material';
import { Intermediary } from '../../../data-models/business-models/intermediary';
import {IntermediaryService} from "../../../data-services/Intermediary/intermediary.service";
import {BOM} from "../../../data-models/business-models/bom";
import {BomService} from "../../../data-services/Bom/bom.service";
import { IntermediaryData } from '../../../data-models/json-models/intermediay-data';
import { ActivatedRoute, Route } from '@angular/router';
import {Router} from "@angular/router";
import { QuantitativeAttribute } from '../../../data-models/business-models/quantitative-attribute';
import { QualitativeAttribute } from '../../../data-models/business-models/qualitative-attribute';
import { RawMaterialComponent } from '../../../data-models/business-models/raw-material-component';
import { IntermediaryComponent } from '../../../data-models/business-models/intermediary-component';
import { BomData } from '../../../data-models/json-models/bom-data';
import { ProductionComponentData } from '../../../data-models/json-models/production-component-data';
import { StockInfoData } from '../../../data-models/json-models/stock-info-data';
import { FinishedGood } from '../../../data-models/business-models/finished-good';
import { FinishedGoodService } from '../../../data-services/finished-good/finished-good.service';

@Component({
  selector: 'app-update-finished-good',
  templateUrl: './update-finished-good.component.html',
  styleUrls: ['./update-finished-good.component.css']
})
export class UpdateFinishedGoodComponent implements OnInit {

  constructor(private fb:FormBuilder, private unit_service:UnitService, private fg_service:FinishedGoodService,
    private raw_material_service:RawMaterialService, private intermediary_service:IntermediaryService,
  private bom_service:BomService, private route:ActivatedRoute, private router:Router) {
  
    this.route.params.subscribe(params=>this.old_fg_id=params.id);
  }//constructor
  
  ngOnInit() {
    this.setDataReady(false);
    this.raw_materials=new List<RawMaterial>();
    this.intermediarys=new List<Intermediary>();
    this.units=new List<Unit>();
    this.fg_service.getFinishedGood(this.old_fg_id).subscribe(data=>{
      this.old_fg=new FinishedGood(data);
      //asyn call
      this.raw_material_service.getActiveRawMaterials().subscribe(raw_materials_data=>{
        for(let data of raw_materials_data){
          this.raw_materials.add(new RawMaterial(data));
        }//for
    
        //asyn func
        this.intermediary_service.getActiveIntermediarys().subscribe(intermediarys_data=>{
          for(let data of intermediarys_data){
              this.intermediarys.add(new Intermediary(data));
          }//for
    
          //asyn func
          this.unit_service.getActiveUnits().subscribe(units_data=>{
            for(let data of units_data){
              this.units.add(new Unit(data));
            }//for
          
                //inside asyn
                this.bom_service.getBomById(this.old_fg.getBomId()).subscribe(bom_data=>{
                  this.bom=bom_data;
    
                //form work
                  let quan_attr_array=[];
                  let qual_attr_array=[];
    
                  for(let quan_attr of this.old_fg.getAttrSet().getQuanAttrSet()){
                    quan_attr_array.push(this.getPreviousQuanAttr(quan_attr));
                  }//for
    
                  for(let qual_attr of this.old_fg.getAttrSet().getQualAttrSet()){
                    qual_attr_array.push(this.getPreviousQualAttr(qual_attr));
                  }//for
    
                  let bom_rms_array=[];
                  let bom_inters_array=[];
                  
                  for(let rm_compo of this.bom.rm){
                    bom_rms_array.push(this.getPreviousBomRmCompo(rm_compo));
                  }//for
    
                  for(let inter_compo of this.bom.inter){
                    bom_inters_array.push(this.getPreviousBomInterCompo(inter_compo));
                  }//for
                  
                  let general_form=this.fb.group({
                    name:this.old_fg.getName(),
                    description:this.old_fg.getDescription()
                  });
            
                  let stock_info_form=this.fb.group({
                    minimum:0
                  });
            
                  let attribute_set_form=this.fb.group({
                    qualitative_attributes:this.fb.array(qual_attr_array),
                    quantitative_attributes:this.fb.array(quan_attr_array)
                  });
    
                  let bom_form=this.fb.group({
                    bom_rms:this.fb.array(bom_rms_array),
                    bom_inters:this.fb.array(bom_inters_array)
                  });
              
                  this.fg_form=this.fb.group({
                    general_info:general_form,
                    stock_info:stock_info_form,
                    attribute_set:attribute_set_form,
                    bom_info:bom_form
                  });
                  this.setDataReady(true);
                });
          });
        });
      });
    });
  }//ngOnInit
  
  get QuanAttr(){return this.fg_form.get("attribute_set").get("quantitative_attributes") as FormArray;}
  get QualAttr(){return this.fg_form.get("attribute_set").get("qualitative_attributes") as FormArray;}
  
  get getBomRm(){return this.fg_form.get("bom_info").get("bom_rms") as FormArray;}
  get getBomInter(){return this.fg_form.get("bom_info").get("bom_inters") as FormArray;}
  
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
  
  updateFinishedGood(){
    let inter:IntermediaryData;
    let stock_data:StockInfoData;
    let bom={
      "rm":this.fg_form.value.bom_info.bom_rms,
      "inter":this.fg_form.value.bom_info.bom_inters
    }
  
    stock_data={
      unit_id:this.old_fg.getStockInfo().getUnitId(),
      available:this.old_fg.getStock(),
      minimum:this.fg_form.value.stock_info.minimum
    }
  
    this.bom_service.updateBom(this.old_fg.getBomId(),bom).subscribe(response=>{
      inter={
        "name":this.fg_form.value.general_info.name,
        "description":this.fg_form.value.general_info.description,
        "stock_info":stock_data,
        "attributes" :this.fg_form.value.attribute_set,
        "bom_id":this.old_fg.getBomId(),
        "line":this.old_fg.getLine(),
        "cost":this.old_fg.getCost(),
        "status":"active"
      }
      this.fg_service.updateFinishedGood(this.old_fg.getId(), inter).subscribe(response=>{
        console.log(response);
      });
    })
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
  
  getPreviousBomRmCompo(given_rm_compo:ProductionComponentData):FormGroup{
    return this.fb.group({
      id:given_rm_compo.id,
      unit_id:given_rm_compo.unit_id,
      quantity:given_rm_compo.quantity
    });
  }//method
  
  getPreviousBomInterCompo(given_inter_compo:ProductionComponentData):FormGroup{
    return this.fb.group({
      id:given_inter_compo.id,
      unit_id:given_inter_compo.unit_id,
      quantity:given_inter_compo.quantity
    });
  }//method
  
  setDataReady(value:boolean){this.data_ready=value;}
  getDataReady(){return this.data_ready;}
  
  
  private fg_form:FormGroup;
  private raw_materials:List<RawMaterial>;
  private intermediarys:List<Intermediary>;
  private old_fg_id:object;
  private old_fg:FinishedGood;
  private data_ready:boolean;
  private units:List<Unit>;
  private bom:BomData;

}//class ends
