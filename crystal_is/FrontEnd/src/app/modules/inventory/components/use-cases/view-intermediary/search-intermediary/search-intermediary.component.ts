import { Component, OnInit } from '@angular/core';
import {SearchItemComponent} from "../../view-item/search-item/search-item.component";
import {UnitService} from "../../../../data-services/unit/unit.service";
import { IntermediaryService } from '../../../../data-services/Intermediary/intermediary.service';
import {Intermediary} from "../../../../data-models/business-models/intermediary";
import { Item } from '../../../../data-models/business-models/item';
import { List } from '../../../../data-models/collection-models/list';
import { Unit } from '../../../../data-models/business-models/unit';
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-intermediary',
  templateUrl: './search-intermediary.component.html',
  styleUrls: ['./search-intermediary.component.css']
})
export class SearchIntermediaryComponent extends SearchItemComponent implements OnInit {

  constructor(protected router:Router,protected unit_service:UnitService, 
    private intermediary_service:IntermediaryService) {
    super(unit_service, router);
  }//constructor

  ngOnInit() {
    
    this.intermediary_service.getActiveIntermediarys().subscribe(intermediary_data=>{
      for(let data of intermediary_data){
        this.addToItems(new Intermediary(data));
      }//for
      this.setItemsForView(this.getItems());

      this.unit_service.getUnits().subscribe(units_data=>{
        for(let data of units_data){
          this.addToUnits(new Unit(data));
        }//for
        this.setDataReady(true);
      });
    });
  }

}
