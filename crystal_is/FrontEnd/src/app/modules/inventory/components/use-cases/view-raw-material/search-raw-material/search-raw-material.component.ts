import { Component, OnInit, Inject } from '@angular/core';
import {SearchItemComponent} from "../../view-item/search-item/search-item.component";
import {UnitService} from "../../../../data-services/unit/unit.service";
import { RawMaterialService } from '../../../../data-services/RawMaterial/raw-material.service';
import {RawMaterial} from "../../../../data-models/business-models/raw-material";
import { Item } from '../../../../data-models/business-models/item';
import { List } from '../../../../data-models/collection-models/list';
import { Unit } from '../../../../data-models/business-models/unit';
import {Router} from "@angular/router";
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-search-raw-material',
  templateUrl: './search-raw-material.component.html',
  styleUrls: ['./search-raw-material.component.css']
})
export class SearchRawMaterialComponent extends SearchItemComponent implements OnInit {

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,protected router:Router, protected unit_service:UnitService, private raw_material_service:RawMaterialService) {
    super(unit_service, router);
  }

  ngOnInit() {
    
    this.raw_material_service.getActiveRawMaterials().subscribe(raw_material_data=>{
      for(let data of raw_material_data){
        this.addToItems(new RawMaterial(data));
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
