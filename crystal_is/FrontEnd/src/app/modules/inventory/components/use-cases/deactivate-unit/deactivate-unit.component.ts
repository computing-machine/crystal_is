import { Component, OnInit, Input } from '@angular/core';
import { Unit } from '../../../data-models/business-models/unit';
import { UnitService } from '../../../data-services/unit/unit.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-deactivate-unit',
  templateUrl: './deactivate-unit.component.html',
  styleUrls: ['./deactivate-unit.component.css']
})
export class DeactivateUnitComponent implements OnInit {

  @Input() target_unit:Unit;

  constructor(private router:Router, private unit_service:UnitService) { }

  ngOnInit() {
    
  }//ngOnInit

  deactivateUnit(){
    let converters_array=[];
    for(let converter of this.target_unit.getConverters()){
      converters_array.push({"unit_name":converter.getUnitName(), "factor":converter.getFactor()});
    }//for

    let data={
      "name":this.target_unit.getName,
      "description":this.target_unit.getDescription,
      "converters":converters_array,
      "status":"inactive"
    }//data

    this.unit_service.updateUnit(this.target_unit.getId(), data).subscribe(response=>{
      console.log(response);
      this.router.navigateByUrl("Inventory/ActiveUnits");
    });
  }//method

}//class ends
