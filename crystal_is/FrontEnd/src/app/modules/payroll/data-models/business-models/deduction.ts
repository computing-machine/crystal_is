
export class Deduction{

    //API
    constructor(deduction:any){

        this.setTitle(deduction.title);
        this.setDescription(deduction.description);

    }//method
    

    //mutators
    setTitle(given_title:String):void{
        this.title=given_title;
    }//method

    setDescription(given_description:String):void{
        this.description=given_description;
    }//method




    //accessors
    getTitle():String{
        return this.title;
    }//method
    getDescription():String{
        return this.description;
    }//method
    


    //data members
    //private bom:BOM;
    private title:String;
    private description:String;
}
