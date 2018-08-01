let express=require("express");
let Employee=require("../dtos/employee");

let router=express.Router();

//output: [{type:Employee}]
router.get("/Employees", (req, res)=>{
    Employee.getAll((err, employees)=>{
        if(err){res.send(err)}//if
        else{
            res.json(employees);
        }//else
    });
});

//output: {type:Employee}
router.get("/Employee/:id", (req, res, next)=>{
    Employee.getById(req.params.id,(err, employee)=>{
        if(err){
            res.send(err)}//if
        else{
            res.json(employee);
        }//else
    });
});

//output: [{type:Employee},{type:JobDescription},{type:SalaryPackage}]
router.get("/Employee/:id/JobDes",(req, res)=>{
    Employee.getJobDesById(req.params.id,(err,jd)=>{
        if(err){res.send(err);}//if
        else{
            res.json(jd);
        }//else
    });
});

router.get("/Employee/:id/Attendance", (req, res)=>{
    Employee.getAttenById(req.params.id, (err, attendace)=>{
        if(err){res.send(err);}//if
        else{
            res.json(attendace);
        }//else
    });
});

router.get("/Employees/Department/:dept/Designation/:des",(req, res)=>{
    Employee.getEmpByDeptDes(req.params.dept, req.params.des, (err, employees)=>{
        if(err){res.send(err);}//if
        else{
            res.json(employees);
        }//else
    });
});

router.get("/Employees/Department/:dept", (req,res)=>{
    Employee.getEmpByDept(req.params.dept, (err, employees)=>{
        if(err){res.send(err);}//if
    else{
        res.json(employees);
    }//else
    });
});

module.exports=router;