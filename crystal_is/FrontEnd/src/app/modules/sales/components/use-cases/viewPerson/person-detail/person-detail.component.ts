import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
//private menmbers
  private personId :Object;
  private person : any;
  private data_status : boolean;
  constructor(){}

  ngOnInit() {
    this.setDataStatus(false);
  }
  //public members
 setPersonId(personId : Object){this.personId = personId;}//setPersonId
 setPerson(persondata:any){this.person = persondata;}//setPerson
 setDataStatus(data_status){this.data_status = data_status;}//setdatastatus
 getDataStatus():boolean{return this.data_status};//getdatastatus
 getPersonId():Object{return this.personId;}//getPersonId
 public getPerson():any{
   return this.person;
  }//getperson

}
