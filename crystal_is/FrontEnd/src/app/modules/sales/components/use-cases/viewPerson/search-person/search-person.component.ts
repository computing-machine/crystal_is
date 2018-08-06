import { Component, OnInit } from '@angular/core';
import {List} from '../../../../data-models/collection-models/list';
import {Person} from '../../../../data-models/business-models/person';


@Component({
  selector: 'app-search-person',
  templateUrl: './search-person.component.html',
  styleUrls: ['./search-person.component.css']
})
export class SearchPersonComponent implements OnInit {

  //private members
  private per_name:string;
  private per_contact:string;
  private per_address:string;
  private persons = new List<any>();
  private result_persons = new List<any>();
  private data_ready:boolean;

  //public members
  getInputName():string{return this.per_name}
  getInputContact():string{return this.per_contact}
  getInputAddress():string{return this.per_address}
  getPersons():List<any>{return this.persons}
  getResultPersons():List<any>{return this.result_persons}
  getDataReady():boolean{return this.data_ready}

  setInputName(name : string){this.per_name = name}
  setInputContact(contact : string ){this.per_contact = contact}
  setInputAddress(address : string){this.per_address = address}
  setPersons(persons : List<any>){this.persons=persons;}
  setResultPersons(persons:List<any>){
    this.result_persons=persons;}
  setDataReady(value:boolean){this.data_ready=value;}


  constructor() { }

  ngOnInit() {
  }//ngOnInit

  private getPerByName(per_name:string):List<any>{
    let  person = new List<any>();
    for(let per of this.result_persons){
      if(per.getName().toUpperCase().includes(per_name.toUpperCase())){
        person.add(per);
        console.log(person);
        //break;
      }//if
    }//for
    return person;
  }//getCusByName

  private getPerByAddress(address_data:any):List<any>{
    let  persons = new List<any>();
    for(let per of this.result_persons){
      for(let address of per.getAddresses()){
        if(address.getAddress().toUpperCase().includes(address_data.toUpperCase())){
          persons.add(per);
          break;
        }//if
      }//for
    }//for
    return persons;
  }//getComByCompany

  private getPerByContNo(contact_no:any):List<any>{
    let  persons = new List<any>();
    for(let per of this.result_persons){
      for(let contact of per.getContacts()){
        if(contact.includes(contact_no)){
          persons.add(per);
          break;
        }//if
      }//for
    }//fors
    return persons;
  }//getCusByContact

  getItems(){
    this.result_persons = this.persons;
    if((this.per_address==undefined)&&(this.per_contact==undefined)&&(this.per_name!=undefined)){
      this.result_persons = this.getPerByName(this.per_name);
     }//if entered  name
     else if((this.per_address!=undefined)&&(this.per_contact==undefined)&&(this.per_name==undefined)){
      this.result_persons= this.getPerByAddress(this.per_address);
     }//if entered address 
     else if((this.per_address==undefined)&&(this.per_contact!=undefined)&&(this.per_name==undefined)){
      this.result_persons = this.getPerByContNo(this.per_contact);
     }//if entered contactNo
     else if((this.per_address!=undefined)&&(this.per_contact!=undefined)&&(this.per_name==undefined)){
      this.result_persons= this.getPerByAddress(this.per_name);
      this.result_persons=this.getPerByContNo(this.per_contact);
     }//if entered address and contact
     else if((this.per_name!=undefined)&&(this.per_contact==undefined)&&(this.per_address!=undefined)){
      this.result_persons= this.getPerByName(this.per_name);
      this.result_persons = this.getPerByAddress(this.per_address);
     }//if entered address and person name
     else if((this.per_name!=undefined)&&(this.per_contact!=undefined)&&(this.per_address==undefined)){
      this.result_persons= this.getPerByContNo(this.per_contact);
      this.result_persons= this.getPerByName(this.per_name);
     }//if entered name and contact no
     else if((this.per_name!=undefined)&&(this.per_contact!=undefined)&&(this.per_address!=undefined)){
      this.result_persons = this.getPerByAddress(this.per_address);
      this.result_persons = this.getPerByContNo(this.per_contact);
      this.result_persons= this.getPerByName(this.per_name);
     }//if entered company and customer name
     
    
  }//getItems


}
