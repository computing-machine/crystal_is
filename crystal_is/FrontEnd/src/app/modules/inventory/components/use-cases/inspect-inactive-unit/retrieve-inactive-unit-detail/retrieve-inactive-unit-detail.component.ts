import { Component, OnInit } from '@angular/core';
import {Unit} from "../../../../data-models/business-models/unit";
import {List} from "../../../../../../app-data-models/collection-models/list";
import { UnitService } from '../../../../data-services/unit/unit.service';
import {ActivatedRoute} from "@angular/router";
import {ActivateUnitComponent} from "../../activate-unit/activate-unit.component";
import {Router} from "@angular/router";
import {RetrieveUnitDetailComponent} from "../../inspect-unit/retrieve-unit-detail/retrieve-unit-detail.component";


@Component({
  selector: 'app-retrieve-inactive-unit-detail',
  templateUrl: './retrieve-inactive-unit-detail.component.html',
  styleUrls: ['./retrieve-inactive-unit-detail.component.css']
})
export class RetrieveInactiveUnitDetailComponent extends RetrieveUnitDetailComponent implements OnInit {

  constructor(protected unit_service:UnitService, protected route:ActivatedRoute,
    protected router:Router) {
      super(unit_service, route, router);
     }//constructor
  
    ngOnInit() {
      this.setDataReady(false);
        //in asyn
        this.unit_service.getUnit(this.getItemId()).subscribe(data=>{
          this.setUnit(new Unit(data));
          this.setDataReady(true);
        });
    }//ngOnInit

}//class ends
