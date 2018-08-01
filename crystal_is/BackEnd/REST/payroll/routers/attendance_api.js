let express=require("express");
let mongoose=require("mongoose");

let Attendance=require("../dtos/attendance");

let router=express.Router();

mongoose.connect("mongodb://umo:marium13@ds123181.mlab.com:23181/mytestdbfortestproject");


router.get("/Attendance", (req, res)=>{
    Attendance.getAll((err, attendance)=>{
        if(err){
            res.send(err);
        }//if
        else{
            res.json(attendance);
        }//else
    });
});

router.get("/Attendance/:id", (req, res)=>{
    Attendance.getById(req.params.id, (err, attendance)=>{
        if(err){
            res.send(err);
        }//if
        else{
            res.json(attendance);
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