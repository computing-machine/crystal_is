import { Component, OnInit, Input } from '@angular/core';
import { Deliverable } from '../../../data-models/business-models/deliverable';
import {RawMaterialService} from "../../../../inventory/data-services/RawMaterial/raw-material.service";
import {RawMaterial} from "../../../../inventory/data-models/business-models/raw-material";
import {UnitService} from "../../../../inventory/data-services/unit/unit.service";
import {Unit} from "../../../../inventory/data-models/business-models/unit";

@Component({
  selector: 'app-detail-table',
  templateUrl: './detail-table.component.html',
  styleUrls: ['./detail-table.component.css']
})
export class DetailTableComponent implements OnInit {

  @Input() private deliverable:Deliverable;
  private show_detail:boolean;
  private raw_material:RawMaterial;
  private unit:Unit;
  private data_ready:boolean;

  constructor(private raw_mat_service:RawMaterialService, private unit_service:UnitService) { }

  ngOnInit() {
    this.setDataReady(false);
    this.setShowDetail(false);
    this.raw_mat_service.getRawMaterial(this.getDeliverable().getRawMatId()).subscribe(data=>{
      this.setRawMaterial(new RawMaterial(data));
      //asyn call
      this.unit_service.getUnit(this.getDeliverable().getUnitId()).subscribe(data=>{
        this.setUnit(new Unit(data));
        this.setDataReady(true);
      });//data-service
    });//data-service
  }//ngOnInit

  showDetail():void{
    if(this.getShowDetail()){
      this.setShowDetail(false);
    }//if
    else{
      this.setShowDetail(true);
    }//else
  }//method

  setShowDetail(value:boolean):void{this.show_detail=value;}
  setRawMaterial(raw_mat:RawMaterial):void{this.raw_material=raw_mat;}
  setDataReady(value:boolean):void{this.data_ready=value;}
  setUnit(unit:Unit):void{this.unit=unit;}

  getDeliverable():Deliverable{return this.deliverable;}
  getShowDetail():boolean{return this.show_detail;}
  getRawMaterial():RawMaterial{return this.raw_material;}
  getDataReady():boolean{return this.data_ready;}
  getUnit():Unit{return this.unit;}

}//class ends
