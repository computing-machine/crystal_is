let mongoose=require("mongoose");
let SalaryPackage=require("./salary_package");

let JobDescriptionSchema=mongoose.Schema({
    department:String,
    designation:String,
    salary_package:[{id:{type:mongoose.Schema.Types.ObjectId, ref:SalaryPackage}, status:Boolean}],
    advantages:[{}]
});

let JobDescription=module.exports=mongoose.model("JobDescription", JobDescriptionSchema, "JobDescription");