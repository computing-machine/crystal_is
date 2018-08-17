import { Component, OnInit, Inject } from '@angular/core';
import {Router} from "@angular/router";
import {LogInService} from "../../../data-services/LogInService/log-in.service";
import {EmployeeService} from "../../../../modules/payroll/data-services/Employee/employee.service";
import { LogIn } from '../../../data-models/business-models/log-in';
import { Employee } from '../../../../modules/payroll/data-models/business-models/employee';
import { JobDescription } from '../../../../modules/payroll/data-models/business-models/job-description';
import {JobDescriptionService} from "../../../../modules/payroll/data-services/JobDescription/job-description.service";
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,
  private router:Router, private log_in_service:LogInService, private employee_service:EmployeeService,
  private job_description_service:JobDescriptionService) { }

  ngOnInit() {
    this.setShowLogIn(true);
  }//ngOnInit

  logIn(){
    this.log_in_service.getLogInInfo(this.getInputUsername(),this.getInputPassword()).subscribe(log_in_data=>{
      this.log_in_info=new LogIn(log_in_data[0]);
      if(this.log_in_info){
        this.employee_service.getEmpByLogId(this.log_in_info.getId()).subscribe(employee_data=>{
          this.employee=new Employee(employee_data[0]);
          console.log(this.employee);
          this.job_description_service.getJobDes(this.employee.getJobDescriptionId()).subscribe(job_des_data=>{
            this.job_description=new JobDescription(job_des_data);
            //routing
            if(this.job_description.getDesignation()=="Purchaser"){
              this.storage.set("user_id", this.employee.getId());
              console.log(this.storage.get("user_id"));
              this.router.navigateByUrl("/Purchase");
            }//if
            else if(this.job_description.getDesignation()=="Clerk"){
              this.storage.set("user_id", this.employee.getId());
              this.router.navigateByUrl("/Payroll");
            }//if
            else if(this.job_description.getDesignation()=="Stockkeeper"){
              this.storage.set("user_id", this.employee.getId());
              this.router.navigateByUrl("/Inventory/Dashboard");
            }//if
            else if(this.job_description.getDesignation()=="Salesperson"){
              this.storage.set("user_id", this.employee.getId());
              this.router.navigateByUrl("/Sales");
            }//if
          });
        });
      }//if
    });//data service
  }//method

  getInputUsername():string{return this.input_username;}
  getInputPassword():string{return this.input_password;}

  setShowLogIn(given_value:boolean):void{this.show_log_in=given_value;}
  getShowLogIn():boolean{return this.show_log_in;}

  //data members
  private input_username:string;
  private input_password:string;
  private show_log_in:boolean;
  private log_in_info:LogIn;
  private employee:Employee;
  private job_description:JobDescription;

}//class ends
