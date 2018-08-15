import { Component, OnInit } from '@angular/core';
import { List } from '../../../../data-models/collection-models/list';
import { Unit } from '../../../../data-models/business-models/unit';
import {UnitService} from "../../../../data-services/unit/unit.service";
import {Router} from "@angular/router";
import {SearchUnitComponent} from "../../inspect-unit/search-unit/search-unit.component";

@Component({
  selector: 'app-search-active-unit',
  templateUrl: './search-active-unit.component.html',
  styleUrls: ['./search-active-unit.component.css']
})
export class SearchActiveUnitComponent extends SearchUnitComponent implements OnInit {

  constructor(protected unit_service:UnitService, protected router:Router) { 
    super(unit_service, router);
    this.setUnits(new List<Unit>());
    this.setItemsForView(new List<Unit>());
    this.setDataReady(false);
    this.setInputName("");
    this.setInputDesc("");
  }//constructor

  ngOnInit() {
    this.unit_service.getActiveUnits().subscribe(units_data=>{
      for(let data of units_data){
        this.addToUnits(new Unit(data));
      }//for
      this.setItemsForView(this.getUnits());
      this.setDataReady(true);
    });
  }//ngOnIt

}//class ends
