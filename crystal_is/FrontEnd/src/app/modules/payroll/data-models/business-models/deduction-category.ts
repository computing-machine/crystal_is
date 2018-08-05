import { DeductionCategoryData } from "../json-models/deduction-category-data";

export class DeductionCategory{

    //API
    constructor(deduction_category_data:DeductionCategoryData){

        this.setCategoryId(deduction_category_data._id);
        this.setTitle(deduction_category_data.title);
        this.setDescription(deduction_category_data.description);

    }//method
    

    //mutators
    setTitle(given_title:string):void{
        this.title=given_title;
    }//method

    setDescription(given_description:string):void{
        this.description=given_description;
    }//method

    setCategoryId(given_id:object){
        this.id=given_id
    }//method


    //accessors
    getTitle():string{
        return this.title;
    }//method
    getDescription():string{
        return this.description;
    }//method
    
    getId():object{return this.id;}

    //data members
    private id:object;
    private title:string;
    private description:string;
}
