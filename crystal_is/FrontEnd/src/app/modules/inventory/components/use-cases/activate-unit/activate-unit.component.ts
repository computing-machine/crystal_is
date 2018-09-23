import { Component, OnInit, Input } from '@angular/core';
import { Unit } from '../../../data-models/business-models/unit';
import { UnitService } from '../../../data-services/unit/unit.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-activate-unit',
  templateUrl: './activate-unit.component.html',
  styleUrls: ['./activate-unit.component.css']
})
export class ActivateUnitComponent implements OnInit {

  @Input() target_unit:Unit;

  constructor(private router:Router, private unit_service:UnitService) { }

  ngOnInit() {
    
  }//ngOnInit

  activateUnit(){
    let converters_array=[];
    for(let converter of this.target_unit.getConverters()){
      converters_array.push({"unit_name":converter.getUnitName(), "factor":converter.getFactor()});
    }//for

    let data={
      "name":this.target_unit.getName,
      "description":this.target_unit.getDescription,
      "converters":converters_array,
      "status":"active"
    }//data

    this.unit_service.updateUnit(this.target_unit.getId(), data).subscribe(response=>{
      console.log(response);
      this.router.navigateByUrl("Inventory/InactiveUnits");
    });
  }//method

}//class ends
