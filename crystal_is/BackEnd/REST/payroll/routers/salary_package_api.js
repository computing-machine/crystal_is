let express=require("express");
let mongoose=require("mongoose");

let SalaryPackage=require("../dtos/salary_package");

let router=express.Router();

mongoose.connect("mongodb://umo:marium13@ds123181.mlab.com:23181/mytestdbfortestproject");


router.get("/SalaryPackages", (req, res)=>{
    SalaryPackage.getAll((err, salary_packages)=>{
        if(err){
            res.send(err);
        }//if
        else{
            res.json(salary_packages);
        }//else
    });
});

router.get("/SalaryPackages/:id", (req, res)=>{
    SalaryPackage.getById(req.params.id, (err, salary_packages)=>{
        if(err){
            res.send(err);
        }//if
        else{
            res.json(salary_packages);
        }//else
    });
});


/*
router.post('/create', (req, res, next) => {
    var newEmployee = new Employee({
        EId:req.body.id,
        Designation:req.body.Designation,
        FixedSalary:req.body.FixedSalary,
        JoiningDate:req.body.JoiningDate,
        Image:req.body.Image
    });

    newEmployee.save((err, employee) => {
        if(err)
            res.status(500).json({ errmsg: err });
        res.status(200).json({ msg: employee });
    });
});
*/
module.exports=router;