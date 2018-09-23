export class LogIn {

    constructor(log_in_data:any){
        this.setUser(log_in_data.user);
        this.setPass(log_in_data.pass);
        this.setId(log_in_data._id);
    }//consturctor

    //mutators
    setUser(given_user:string):void{this.user=given_user;}
    setPass(given_pass:string):void{this.pass=given_pass;}
    setId(given_id:object):void{this.id=given_id;}

    //accessors
    getUser():string{return this.user;}
    getPass():string{return this.pass;}
    getId():object{return this.id;}

    //data members
    private id:object;
    private user:string;
    private pass:string;
}//class ends
