let express=require("express");
let EmployeeApi=require("../REST/payroll/routers/employee_api");
let LogInApi=require("../REST/payroll/routers/log_in_api");
let JobDescriptionApi=require("../REST/payroll/routers/job_description_api");

let router=express.Router();

router.use("/EmployeeApi", EmployeeApi);
router.use("/LogInApi", LogInApi);
router.use("/JobDescriptionApi", JobDescriptionApi);

module.exports=router;