let express=require("express");
let EmployeeApi=require("../REST/payroll/routers/employee_api");

let router=express.Router();

router.use("/EmployeeApi", EmployeeApi);

module.exports=router;