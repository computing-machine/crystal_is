import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray} from "@angular/forms";
import { UnitService } from '../../../data-services/unit/unit.service';
import { List } from "../../../../../app-data-models/collection-models/list";
import { Unit } from '../../../data-models/business-models/unit';
import {ActivatedRoute} from "@angular/router";
import { Converter } from '../../../data-models/business-models/converter';

@Component({
  selector: 'app-update-unit',
  templateUrl: './update-unit.component.html',
  styleUrls: ['./update-unit.component.css']
})
export class UpdateUnitComponent implements OnInit {

  constructor(private fb:FormBuilder, private unit_service:UnitService, private route:ActivatedRoute) { 
    this.route.params.subscribe(params=>this.old_unit_id=params.id);
  }//constructor

  ngOnInit() {
    this.setDataReady(false);
    this.units=new List<Unit>();

    this.unit_service.getActiveUnits().subscribe(units_data=>{
      for(let data of units_data){
        this.units.add(new Unit(data));
        if(this.units.getItem(this.units.getLength()-1).getId()==this.old_unit_id){
          this.old_unit=new Unit(data);
        }//if
      }//for
  
      let converters_array=[];

      for(let converter of this.old_unit.getConverters()){
        converters_array.push(this.getPreviousConverter(converter));
      }//for
      
      let general_form=this.fb.group({
        name:this.old_unit.getName(),
        description:this.old_unit.getDescription()
      });

      let converters_form=this.fb.group({
        converters:this.fb.array(converters_array),
      });
  
      //form creation
      this.unit_form=this.fb.group({
        general_info:general_form,
        converters_info:converters_form
      });
      this.setDataReady(true);
    });
  }//ngOnInit

  get getConverters(){return this.unit_form.get("converters_info").get("converters") as FormArray;}

  addConverter(){
    let converter=this.fb.group({
      unit_name:"",
      factor:""
    });
    this.getConverters.push(converter);
  }//addQuanAttr

  delConverter(i){
    this.getConverters.removeAt(i);
  }

  updateUnit(){
    let unit_data={
      "name":this.unit_form.value.general_info.name,
      "description":this.unit_form.value.general_info.description,
      "converters":this.unit_form.value.converters_info.converters,
      "status":"active"
    }//unit_data
    
    this.unit_service.updateUnit(this.old_unit_id,unit_data).subscribe(response=>{
      console.log(response);
    })
  }//registerRawMaterial

  setDataReady(value:boolean):void{this.data_ready=value;}
  getDataReady():boolean{return this.data_ready;}

  //supporting functions
  getPreviousConverter(given_converter:Converter):FormGroup{
    return this.fb.group({
      unit_name:given_converter.getUnitName(),
      factor:given_converter.getFactor()
    });
  }//method

  private data_ready:boolean;
  private unit_form:FormGroup;
  private units:List<Unit>;
  private old_unit_id:object;
  private old_unit:Unit;

}//class ends
