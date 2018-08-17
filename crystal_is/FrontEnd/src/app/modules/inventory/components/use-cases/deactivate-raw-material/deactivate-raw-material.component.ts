import { Component, OnInit, Input } from '@angular/core';
import { RawMaterial } from '../../../data-models/business-models/raw-material';
import { RawMaterialService } from '../../../data-services/RawMaterial/raw-material.service';
import {Router} from "@angular/router";
import { RawMaterialData } from '../../../data-models/json-models/raw-material-data';

@Component({
  selector: 'app-deactivate-raw-material',
  templateUrl: './deactivate-raw-material.component.html',
  styleUrls: ['./deactivate-raw-material.component.css']
})
export class DeactivateRawMaterialComponent implements OnInit {
  @Input() target_rm_id:object;
  private rm_data:RawMaterialData;
  private data_ready:boolean;

  constructor(private router:Router, private rm_service:RawMaterialService) { }

  ngOnInit() {
    this.data_ready=false;
    this.rm_service.getRawMaterial(this.target_rm_id).subscribe(data=>{
      this.rm_data=data;
      this.data_ready=true;
    })
  }//ngOnInit

  deactivateRawMaterial(){
    this.rm_data.status="inactive";

    this.rm_service.updateRawMaterial(this.target_rm_id, this.rm_data).subscribe(response=>{
      console.log(response);
      this.router.navigateByUrl("Inventory/RawMaterials");
    });
  }//method

}//class ends
