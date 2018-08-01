let express=require("express");
let mongoose=require("mongoose");

let JobDescription=require("../dtos/job_description");

let router=express.Router();

mongoose.connect("mongodb://umo:marium13@ds123181.mlab.com:23181/mytestdbfortestproject");


router.get("/JobDescriptions", (req, res)=>{
    JobDescription.getAll((err, jobDescriptions)=>{
        if(err){
            res.send(err);
        }//if
        else{
            res.json(jobDescriptions);
        }//else
    });
});

router.get("/JobDescriptions/:id", (req, res)=>{
    JobDescription.getById(req.params.id, (err, jobDescriptions)=>{
        if(err){
            res.send(err);
        }//if
        else{
            res.json(jobDescriptions);
        }//else
    });
});

router.get("/JobDescriptions/:description/:id", (req, res)=>{
    JobDescription.getById(req.params.id, (err, jobDescriptions)=>{
        if(err){
            res.send(err);
        }//if
        else{
            res.json(jobDescriptions);
        }//else
    });
});

/*
// /Deductions/:department/:designation
router.get("/JobDescriptions/:department/:designation", (req, res)=>{
    JobDescription.getAll((err, jobDescriptions)=>{
        if(err){
            res.send(err);
        }//if
        else{
            res.json(jobDescriptions);
        }//else
    });
});
*/

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