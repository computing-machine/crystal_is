import { Component, OnInit } from '@angular/core';
import { List } from '../../../../data-models/collection-models/list';
import { Unit } from '../../../../data-models/business-models/unit';
import {UnitService} from "../../../../data-services/unit/unit.service";
import {Router} from "@angular/router";
import {SearchUnitComponent} from "../../inspect-unit/search-unit/search-unit.component";

@Component({
  selector: 'app-search-inactive-unit',
  templateUrl: './search-inactive-unit.component.html',
  styleUrls: ['./search-inactive-unit.component.css']
})
export class SearchInactiveUnitComponent extends SearchUnitComponent implements OnInit {

  constructor(protected unit_service:UnitService, protected router:Router) {
    super(unit_service, router);
   }

  ngOnInit() {
    this.unit_service.getInactiveUnits().subscribe(units_data=>{
      for(let data of units_data){
        this.addToUnits(new Unit(data));
      }//for
      this.setItemsForView(this.getUnits());
      this.setDataReady(true);
    });
  }//ngOnIt

}//class ends
