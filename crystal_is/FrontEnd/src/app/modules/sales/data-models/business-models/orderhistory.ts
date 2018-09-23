export class Orderhistory {
    //private members
   private status : string;
   private date : Date
   //public members
   constructor(data ? :any){
       this.setStatus(data.status);
       this.setDate(data.date);
   }//constructor
   setStatus(status : string){
       this.status = status;
   }//setStatus
   setDate(date : Date){
    this.date = date;
   }//setDate
   getStatus():string{
    return this.status;
   }//getStatus
   getDate():Date{
    return this.date;
   }//getDate

}
