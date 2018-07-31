let mongoose=require("mongoose");

let DeductionSchema=mongoose.Schema({
    title:String,
    description:String
});

let Deduction=module.exports=mongoose.model("Deduction", DeductionSchema, "Deduction");