import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray} from "@angular/forms";
import { UnitService } from '../../../data-services/unit/unit.service';
import { List } from "../../../../../app-data-models/collection-models/list";
import { Unit } from '../../../data-models/business-models/unit';

@Component({
  selector: 'app-register-unit',
  templateUrl: './register-unit.component.html',
  styleUrls: ['./register-unit.component.css']
})
export class RegisterUnitComponent implements OnInit {

  constructor(private fb:FormBuilder, private unit_service:UnitService) { }

  ngOnInit() {
    this.setDataReady(false);
    this.units=new List<Unit>();

    this.unit_service.getActiveUnits().subscribe(units_data=>{
      for(let data of units_data){
        this.units.add(new Unit(data));
      }//for
      
      let general_form=this.fb.group({
        name:"",
        description:""
      });

      let converters_form=this.fb.group({
        converters:this.fb.array([]),
      });
  
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

  registerRawMaterial(){
    
      let unit_data={
        "name":this.unit_form.value.general_info.name,
        "description":this.unit_form.value.general_info.description,
        "converters":this.unit_form.value.converters_info.converters,
        "status":"active"
      }
      
      this.unit_service.saveUnit(unit_data).subscribe(response=>{
        console.log(response);
      });
  }//registerRawMaterial

  setDataReady(value:boolean):void{this.data_ready=value;}
  getDataReady():boolean{return this.data_ready;}

  private data_ready:boolean;
  private unit_form:FormGroup;
  private units:List<Unit>;
}//class ends
