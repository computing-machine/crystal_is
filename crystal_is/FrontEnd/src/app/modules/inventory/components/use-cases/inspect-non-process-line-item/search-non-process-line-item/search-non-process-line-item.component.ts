import { Component, OnInit, Inject } from '@angular/core';
import {SearchItemComponent} from "../../view-item/search-item/search-item.component";
import {UnitService} from "../../../../data-services/unit/unit.service";
import { NonProcessLineItemService } from '../../../../data-services/non-process-line-item/non-process-line-item.service';
import {NonProcessLineItem} from "../../../../data-models/business-models/non-process-line-item";
import { Item } from '../../../../data-models/business-models/item';
import { List } from "../../../../../../app-data-models/collection-models/list";
import { Unit } from '../../../../data-models/business-models/unit';
import {Router} from "@angular/router";
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-search-non-process-line-item',
  templateUrl: './search-non-process-line-item.component.html',
  styleUrls: ['./search-non-process-line-item.component.css']
})
export class SearchNonProcessLineItemComponent extends SearchItemComponent implements OnInit {

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,protected router:Router, protected unit_service:UnitService, private raw_material_service:NonProcessLineItemService) {
    super(unit_service, router);
  }

  ngOnInit() {
    
    this.raw_material_service.getActiveNonProcessLineItems().subscribe(raw_material_data=>{
      for(let data of raw_material_data){
        this.addToItems(new NonProcessLineItem(data));
      }//for
      this.setItemsForView(this.getItems());

      this.unit_service.getUnits().subscribe(units_data=>{
        for(let data of units_data){
          this.addToUnits(new Unit(data));
        }//for
        this.setDataReady(true);
      });
    });
  }//ngOnInit

}//class ends
