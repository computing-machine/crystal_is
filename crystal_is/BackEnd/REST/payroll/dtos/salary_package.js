let mongoose=require("mongoose");

let SalaryPackageSchema=mongoose.Schema({
    summary:{effective_date:Date, expiry_date:Date, description:String},
    facilities:{
        basic:Number,
        home_allowance:Number,
        conveyance_allowance:Number,
        increment:Number
    }
});

let SalaryPackage=module.exports=mongoose.model("SalaryPackage", SalaryPackageSchema, "SalaryPackage");