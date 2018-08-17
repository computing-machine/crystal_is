import { Component, OnInit, Inject } from '@angular/core';
import {SearchItemComponent} from "../../view-item/search-item/search-item.component";
import {UnitService} from "../../../../data-services/unit/unit.service";
import { FinishedGoodService } from '../../../../data-services/finished-good/finished-good.service';
import {FinishedGood} from "../../../../data-models/business-models/finished-good";
import { Item } from '../../../../data-models/business-models/item';
import { List } from "../../../../../../app-data-models/collection-models/list";
import { Unit } from '../../../../data-models/business-models/unit';
import {Router} from "@angular/router";


@Component({
  selector: 'app-search-finished-good',
  templateUrl: './search-finished-good.component.html',
  styleUrls: ['./search-finished-good.component.css']
})
export class SearchFinishedGoodComponent extends SearchItemComponent implements OnInit {

  constructor(protected router:Router,protected unit_service:UnitService, private finished_good_service:FinishedGoodService) {
    super(unit_service, router);
  }

  ngOnInit() {
    
    this.finished_good_service.getActiveFinishedGoods().subscribe(raw_material_data=>{
      for(let data of raw_material_data){
        this.addToItems(new FinishedGood(data));
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
