let mongoose=require("mongoose");

let SalaryPackageSchema=mongoose.Schema({
    summary:{effective_from:Date, expiry_date:Date, description:String},
    facilities:{basic:Number, home_allowance:Number, conveyance_allowance:Number, increment:Number}
});

let SalaryPackage=module.exports=mongoose.model("SalaryPackage", SalaryPackageSchema, "SalaryPackage");

module.exports.getById=(id, callback)=>{
    SalaryPackage.findById(id, callback);
}//getById

module.exports.getAll=(callback)=>{
    SalaryPackage.find(callback);
}//getAll