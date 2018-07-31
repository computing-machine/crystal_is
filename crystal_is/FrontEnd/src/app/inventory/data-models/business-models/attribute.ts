export abstract class Attribute {

    //constructor
    constructor(given_name:string){
        this.setName(given_name);
    }

    //mutators
    setName(given_name:string){
        this.name=given_name;
    }

    //accessors
    getName():string{
        return this.name;
    }//method

    //data members
    private name:string;
}
