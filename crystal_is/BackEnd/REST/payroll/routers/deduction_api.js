let express=require("express");
let mongoose=require("mongoose");

let Deduction=require("../dtos/deduction");

let router=express.Router();

mongoose.connect("mongodb://umo:marium13@ds123181.mlab.com:23181/mytestdbfortestproject");


router.get("/Deductions", (req, res)=>{
    Deduction.getAll((err, deductions)=>{
        if(err){
            res.send(err);
        }//if
        else{
            res.json(deductions);
        }//else
    });
});

router.get("/Deductions/:id", (req, res)=>{
    Deduction.getById(req.params.id, (err, deductions)=>{
        if(err){
            res.send(err);
        }//if
        else{
            res.json(deductions);
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