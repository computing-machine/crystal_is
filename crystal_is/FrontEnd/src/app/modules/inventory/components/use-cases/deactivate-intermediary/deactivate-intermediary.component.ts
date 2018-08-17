import { Component, OnInit, Input } from '@angular/core';
import { IntermediaryData } from '../../../data-models/json-models/intermediay-data';
import { IntermediaryService } from '../../../data-services/Intermediary/intermediary.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-deactivate-intermediary',
  templateUrl: './deactivate-intermediary.component.html',
  styleUrls: ['./deactivate-intermediary.component.css']
})
export class DeactivateIntermediaryComponent implements OnInit {
  @Input() target_inter_id:object;
  private inter_data:IntermediaryData;
  private data_ready:boolean;
  constructor(private router:Router, private inter_service:IntermediaryService) { }

  ngOnInit() {
    this.data_ready=false;
    this.inter_service.getIntermediary(this.target_inter_id).subscribe(data=>{
      this.inter_data=data;
      this.data_ready=true;
    })
  }//ngOnInit

  deactivateIntermediary(){
    this.inter_data.status="inactive";

    this.inter_service.updateIntermediary(this.target_inter_id, this.inter_data).subscribe(response=>{
      console.log(response);
      this.router.navigateByUrl("Inventory/Intermediarys");
    });
  }//method

}//class ends
