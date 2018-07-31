let mongoose=require("mongoose");
let JobDescription=require("../dtos/job_description");
let SalaryPackage=require("../dtos/salary_package");
let Deduction=require("../dtos/deduction");
let Attendance=require("../dtos/attendance");

let EmployeeSchema=mongoose.Schema({
    name:String,
    address:String,
    contact:String,
    contract:Number,
    joining_date:Date,
    job_description:{type:mongoose.Schema.Types.ObjectId, ref:JobDescription},
    deductions:[{category:{type:mongoose.Schema.Types.ObjectId, ref:Deduction}, total_amount:Number, deduction_per_month:Number}],
    supervisor_of:[{type:mongoose.Schema.Types.ObjectId, ref:this}]
});

let Employee=module.exports=mongoose.model("Employee", EmployeeSchema, "Employee");

module.exports.getAll=(callback)=>{
    Employee.find(callback);
}//getAll

module.exports.getById=(id,callback)=>{
    Employee.findById(id, callback);
}//getById

module.exports.getJobDesById=(id, callback)=>{
    Employee.findById(id, (err, employee)=>{
        if(err){console.log(err);}//if
        else{
            JobDescription.findById(employee.job_description,(err, job_description)=>{
                if(err){console.log(err);}//if
                else{
                    for(let sp of job_description.salary_package)
                        if(sp.status==true)
                            salary_package_id=sp.id;
                    SalaryPackage.findById(salary_package_id, (err, salary_package)=>{
                        if(err){callback(err)}//if
                        else{
                            let detail=[employee, job_description, salary_package];
                            callback(err, detail);
                        }//else
                    });
                }//else
            });
        }//else
    });
}//getJobDescriptionById

module.exports.getEmpByDeptDes=(dept, des, callback)=>{
    JobDescription.find({$and:[{department:{$eq:dept}},{designation:{$eq:des}}]},(err, jd)=>{
        Employee.find({job_description:{$eq:jd[0]._id}},(callback));
    });
}//method

module.exports.getEmpByDept=(dept,callback)=>{
    JobDescription.find({department:{$eq:dept}}).select("_id").then((jd_id)=>{
        Employee.find({job_description:{$eq:jd_id[0].id}}, callback);
    });
}//method

module.exports.getAttenById=(emp_id, callback)=>{
    Attendance.find({employee_id:{$eq:emp_id}},callback);
}//method