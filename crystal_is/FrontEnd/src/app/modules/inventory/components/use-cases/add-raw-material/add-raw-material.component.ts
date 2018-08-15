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

@Component({
  selector: 'app-add-raw-material',
  templateUrl: './add-raw-material.component.html',
  styleUrls: ['./add-raw-material.component.css']
})
export class AddRawMaterialComponent implements OnInit {

  constructor(private fb:FormBuilder, private unit_service:UnitService,
  private purchase_history_service:PurchaseHistoryService,
private raw_material_service:RawMaterialService) { }

  ngOnInit() {
    this.data_ready=false;
    this.units=new List<Unit>();
    this.unit_service.getActiveUnits().subscribe(units_data=>{
      for(let data of units_data){
        this.units.add(new Unit(data));
      }//for

      let purchase_info_form=this.fb.group({
        date:Date,
        price:0,
        quantity:0
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
  
      this.rm_form=this.fb.group({
        name:"",
        description:"",
        stock_info:stock_info_form,
        attribute_set:attribute_set_form,
        last_purchase:purchase_info_form
      });
      this.data_ready=true;
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

  registerRawMaterial(){
    let purchase_history_data:PurchaseHistoryData;
    purchase_history_data={
      "purchase_records":[{
        "price":this.rm_form.value.last_purchase.price,
        "date":this.rm_form.value.last_purchase.date,
        "quantity":this.rm_form.value.last_purchase.quantity
      }]
    }

    let raw_material_data:RawMaterialData;
    let purchase_history_obj=new PurchaseHistory(purchase_history_data);
    
    this.purchase_history_service.savePurchaseHistory(purchase_history_data).subscribe(response=>{
      purchase_history_obj.setId(response._id)
      raw_material_data={
        "name":this.rm_form.value.name,
        "description":this.rm_form.value.description,
        "stock_info":this.rm_form.value.stock_info,
        "attributes":this.rm_form.value.attribute_set,
        "purchase_history_id":purchase_history_obj.getId(),
        "wastage":0,
        "cost":0
      }
      this.raw_material_service.saveRawMaterial(raw_material_data).subscribe(response=>{
        console.log(response);
      });
    });
  }//registerRawMaterial

  private rm_form:FormGroup;
  private units:List<Unit>;
  private data_ready:boolean;

}//class ends
