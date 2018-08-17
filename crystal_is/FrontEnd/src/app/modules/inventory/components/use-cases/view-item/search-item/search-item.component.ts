import { Component, OnInit,Inject } from '@angular/core';
import {Unit} from "../../../../data-models/business-models/unit";
import {List} from "../../../../../../app-data-models/collection-models/list";
import {Item} from "../../../../data-models/business-models/item";
import { UnitService } from '../../../../data-services/unit/unit.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {
  private items:List<Item>;
  private units:List<Unit>;
  private dataReady:boolean;
  private items_for_view:List<Item>;
  private input_name : string;
  private input_description:string;

  constructor(protected unit_service:UnitService, protected router:Router) { 
    this.setItems(new List<Item>());
    this.setUnits(new List<Unit>());
    this.setItemsForView(new List<Item>());
    this.setDataReady(false);
    this.setInputName("");
    this.setInputDesc("");
  }//constructor

  ngOnInit() {

  }//ngOnIt

  //accessors
  getItems():List<Item>{return this.items;}
  getItemsForView():List<Item>{return this.items_for_view;}

  filterItems():List<Item>{
    if(this.getInputName()==="" && this.getInputDesc()===""){
      this.setItemsForView(this.getItems());
    }//if
    else if(this.getInputDesc()===""){
      this.setItemsForView(new List<Item>());
      for(let item of this.getItems()){
        if(item.getName().toUpperCase().includes(this.getInputName().toUpperCase())){
          this.addToItemsForView(item);
      }//if
    }//for
  }//if

  else{
      let temp_items=new List<Item>();
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
  setItems(given_items:List<Item>):void{this.items=given_items;}
  setItemsForView(given_items:List<Item>):void{this.items_for_view=given_items;}
  setDataReady(given_value:boolean):void{this.dataReady=given_value}
  setInputName(given_name:string):void{this.input_name=given_name;}
  setInputDesc(given_desc:string):void{this.input_description=given_desc;}
  setUnits(given_units:List<Unit>):void{this.units=given_units;}

  addItem(route:string){this.router.navigateByUrl("Inventory/"+route)}

  protected addToItems(given_item:Item):void{this.getItems().add(given_item);}
  protected addToItemsForView(given_item:Item):void{this.getItemsForView().add(given_item);}
  protected addToUnits(given_unit:Unit):void{this.units.add(given_unit);}

}
