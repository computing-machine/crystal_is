import { Component, OnInit } from '@angular/core';
import {ViewItemDetailComponent} from "../view-item-detail/view-item-detail.component";
import {Item} from "../../../../data-models/business-models/item";
import {RawMaterial} from "../../../../data-models/business-models/raw-material";
import {Unit} from "../../../../data-models/business-models/unit";
import {Intermediary} from "../../../../data-models/business-models/intermediary";
import {BOM} from "../../../../data-models/business-models/bom";
import {List} from "../../../../data-models/collection-models/list";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-manufactured-item-detail',
  templateUrl: './view-manufactured-item-detail.component.html',
  styleUrls: ['./view-manufactured-item-detail.component.css']
})
export abstract class ViewManufacturedItemDetailComponent extends ViewItemDetailComponent implements OnInit {

  private composing_raw_materials:List<RawMaterial>;
  private composing_intermediarys:List<Intermediary>;
  private bom:BOM;
  private show_bom:boolean;

  constructor() { 
    super();
    this.setShowBom(false);

    this.setComposingRawMaterials(new List<RawMaterial>());
    this.setComposingIntermediarys(new List<Intermediary>());
  }//cosntructor

  ngOnInit() {

  }//ngOnInit

  setComposingRawMaterials(given_raw_materials:List<RawMaterial>){this.composing_raw_materials=given_raw_materials;}
  setComposingIntermediarys(given_intermediarys:List<Intermediary>){this.composing_intermediarys=given_intermediarys;}
  setBom(given_bom:BOM):void{this.bom=given_bom;}

  getComposingRawMaterials():List<RawMaterial>{return this.composing_raw_materials;}
  getComposingIntermediarys():List<Intermediary>{return this.composing_intermediarys;}
  getBom():BOM{return this.bom;}

  abstract showBom():void;//method

  abstract getItemDetail(item_id:Object, given_route:string);

  addToComposingRawMaterials(given_raw_material:RawMaterial):void{this.composing_raw_materials.add(given_raw_material);}
  addToComposingIntermediarys(given_intermediary:Intermediary):void{this.composing_intermediarys.add(given_intermediary);}

  setShowBom(value:boolean):void{this.show_bom=value;}
  getShowBom():boolean{return this.show_bom;}

}//class ends
