import { Component, OnInit } from '@angular/core';
import {Item} from "../../../../data-models/business-models/item";
import {List} from "../../../../../../app-data-models/collection-models/list";
import {Unit} from "../../../../data-models/business-models/unit";
import {Router} from "@angular/router"

@Component({
  selector: 'app-view-item-detail',
  templateUrl: './view-item-detail.component.html',
  styleUrls: ['./view-item-detail.component.css']
})
export abstract class ViewItemDetailComponent implements OnInit {

  private item:any;
  private item_id:Object;
  private units:List<Unit>;
  private data_ready:boolean;
  private show_actions:boolean;

  constructor(protected router:Router) { 
    this.setDataReady(false);
    this.setShowActions(false);
    this.setUnits(new List<Unit>());
  }//constructor

  ngOnInit() {

  }//ngOnInit
  

  addToUnits(given_unit:Unit):void{this.units.add(given_unit);}

  setDataReady(given_value:boolean):void{this.data_ready=given_value;}
  setUnits(given_units:List<Unit>):void{this.units=given_units;}
  setItemId(id:object):void{this.item_id=id;}
  setItem(given_item:any):void{this.item=given_item;}
  setShowActions(value:boolean):void{this.show_actions=value;}

  //accessors
  getItem():any{return this.item;}
  getItemId():Object{return this.item_id;}
  getDataReady():boolean{return this.data_ready;}
  getUnits():List<Unit>{return this.units}
  getShowActions():boolean{return this.show_actions;}

  updateItem(id:object, route:string){
    this.router.navigateByUrl(route+id);
  }//method

}//class ends
