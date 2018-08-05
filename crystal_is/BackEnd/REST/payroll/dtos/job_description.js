let mongoose=require("mongoose");
let SalaryPackage=require("./salary_package");

let JobDescriptionSchema=mongoose.Schema({
    department:String,
    designation:String,
    salary_packages:[{id:{type:mongoose.Schema.Types.ObjectId, ref:SalaryPackage}, status:Boolean}],
    advantages:[{}]
});

let JobDescription=module.exports=mongoose.model("JobDescription", JobDescriptionSchema, "JobDescription");

module.exports.getById=(id, callback)=>{
    JobDescription.findById(id, callback);
}//getById

module.exports.getAll=(callback)=>{
    JobDescription.find(callback);
}//getAll

module.exports.getJobSalary=(id, callback)=>{
    SalaryPackage.find({salary_package:{id:{$eq:id}}}, (err, spack)=>{
        if(err){console.log(err);}
        else{
            let sal=spack.summary;
            console.log(spack.summary);
        }
    });

}