let mongoose=require("mongoose");

let DeductionSchema=mongoose.Schema({
    title:String,
    description:String
});

let Deduction=module.exports=mongoose.model("Deduction", DeductionSchema, "Deduction");

module.exports.getById=(id, callback)=>{
    Deduction.findById(id, callback);
}//getById

module.exports.getAll=(callback)=>{
    Deduction.find(callback);
}//getAll