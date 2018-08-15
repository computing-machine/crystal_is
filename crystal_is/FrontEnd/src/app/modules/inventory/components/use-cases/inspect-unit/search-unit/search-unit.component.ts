import { Component, OnInit } from '@angular/core';
import { List } from '../../../../data-models/collection-models/list';
import { Unit } from '../../../../data-models/business-models/unit';
import {UnitService} from "../../../../data-services/unit/unit.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-unit',
  templateUrl: './search-unit.component.html',
  styleUrls: ['./search-unit.component.css']
})
export class SearchUnitComponent implements OnInit {

  private units:List<Unit>;
  private items_for_view:List<Unit>;
  private dataReady:boolean;
  private input_name : string;
  private input_description:string;

  constructor(protected unit_service:UnitService, protected router:Router) { 

    this.setUnits(new List<Unit>());
    this.setItemsForView(new List<Unit>());
    this.setDataReady(false);
    this.setInputName("");
    this.setInputDesc("");
  }//constructor

  ngOnInit() {
  }//ngOnIt

  //accessors
  getItemsForView():List<Unit>{return this.items_for_view;}

  filterItems():List<Unit>{
    if(this.getInputName()==="" && this.getInputDesc()===""){
      this.setItemsForView(this.getUnits());
    }//if
    else if(this.getInputDesc()===""){
      this.setItemsForView(new List<Unit>());
      for(let item of this.getUnits()){
        if(item.getName().toUpperCase().includes(this.getInputName().toUpperCase())){
          this.addToItemsForView(item);
      }//if
    }//for
  }//if

  else{
      let temp_items=new List<Unit>();
      for(let item of this.getItemsForView()){
        if(item.getDescription().toUpperCase().includes(this.getInputDesc().toUpperCase())){
          temp_items.add(item);
      }//if
    }//for
    this.setItemsForView(temp_items);
  }//else

    return this.getItemsForView();
  }

  //user action
  getItemDetail(item_id:Object, given_route:string){
    this.router.navigateByUrl(given_route+item_id);
  }//method

  getDataReady():boolean{return this.dataReady;}
  getInputName():string{return this.input_name;}
  getInputDesc():string{return this.input_description;}
  getUnits():List<Unit>{return this.units;}

  //mutators
  setItemsForView(given_items:List<Unit>):void{this.items_for_view=given_items;}
  setDataReady(given_value:boolean):void{this.dataReady=given_value}
  setInputName(given_name:string):void{this.input_name=given_name;}
  setInputDesc(given_desc:string):void{this.input_description=given_desc;}
  setUnits(given_units:List<Unit>):void{this.units=given_units;}

  addItem(){this.router.navigateByUrl("Inventory/NewUnit")}

  protected addToItemsForView(given_item:Unit):void{this.getItemsForView().add(given_item);}
  protected addToUnits(given_unit:Unit):void{this.units.add(given_unit);}

}//class ends
