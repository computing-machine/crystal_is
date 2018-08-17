import { Component, OnInit } from '@angular/core';
import {Unit} from "../../../../data-models/business-models/unit";
import {List} from "../../../../../../app-data-models/collection-models/list";
import { UnitService } from '../../../../data-services/unit/unit.service';
import {ActivatedRoute} from "@angular/router";
import {DeactivateUnitComponent} from "../../deactivate-unit/deactivate-unit.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-retrieve-unit-detail',
  templateUrl: './retrieve-unit-detail.component.html',
  styleUrls: ['./retrieve-unit-detail.component.css']
})
export class RetrieveUnitDetailComponent implements OnInit {

  constructor(protected unit_service:UnitService, protected route:ActivatedRoute,
  protected router:Router) {
    this.route.params.subscribe(params=>this.item_id=params.id);
   }//constructor

  ngOnInit() {
  }//ngOnInit

  updateItemDetail(item_id:object, given_route:string){
    this.router.navigateByUrl(given_route+item_id);
  }//method

  setDataReady(value:boolean):void{this.data_ready=value;}
  getDataReady():boolean{return this.data_ready;}

  getItemId():object{return this.item_id;}
  setItemId(id:object):void{this.item_id=id;}

  setUnit(given_unit):void{this.unit=given_unit;}
  getUnit():Unit{return this.unit;}

  private item_id:object;
  private unit:Unit;
  private data_ready:boolean;

}//class ends
