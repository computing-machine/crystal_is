import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray} from "@angular/forms";
import { List } from '../../../../purchase/data-models/collection-models/list';
import { Unit } from '../../../data-models/business-models/unit';
import {UnitService} from "../../../data-services/unit/unit.service";

@Component({
  selector: 'app-add-raw-material',
  templateUrl: './add-raw-material.component.html',
  styleUrls: ['./add-raw-material.component.css']
})
export class AddRawMaterialComponent implements OnInit {

  constructor(private fb:FormBuilder, private unit_service:UnitService) { }

  ngOnInit() {
    this.data_ready=false;
    this.units=new List<Unit>();
    this.unit_service.getUnits().subscribe(units_data=>{
      for(let data of units_data){
        this.units.add(new Unit(data));
      }//for
      let stock_info_form=this.fb.group({
        unit_id:"",
        available:0,
        minimum:0
      });

      let attribute_set_form=this.fb.group({
        qualitative_attributes:this.fb.array([]),
        quantitative_attributes:this.fb.array([])
      });

      let used_in_form=this.fb.group({
        finished_goods:this.fb.array([]),
        raw_materials:this.fb.array([])
      });
  
      this.rm_form=this.fb.group({
        name:"",
        description:"",
        stock_info:stock_info_form,
        attribute_set:attribute_set_form,
        used_in:used_in_form,
        last_purchase:0
      });
      this.data_ready=true;
    });
  }//ngOnInit

  get QuanAttr(){return this.rm_form.get("attribute_set").get("quantitative_attributes") as FormArray;}
  get QualAttr(){return this.rm_form.get("attribute_set").get("qualitative_attributes") as FormArray;}

  get getFinishedGoods(){return this.rm_form.get("used_in").get("finished_goods") as FormArray;}
  get getRawMaterials(){return this.rm_form.get("used_in").get("raw_materials") as FormArray;}

  addFinishedGood(){
    let finished_good=this.fb.group({
      name:""
    });
  }//addFinishedGood

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

  private rm_form:FormGroup;
  private fg_form:FormGroup;
  private inter_form:FormGroup;
  private units:List<Unit>;
  private data_ready:boolean;

}//class ends
