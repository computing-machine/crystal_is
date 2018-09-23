let express=require("express");
let mongoose=require("mongoose");

let LogIn=require("../dtos/log_in");

let router=express.Router();

mongoose.connect("mongodb://umo:marium13@ds123181.mlab.com:23181/mytestdbfortestproject");

router.get("/Log/User/:user/Pass/:pass", (req, res)=>{
    LogIn.getLogIn(req.params.user, req.params.pass, (err, log_in)=>{
        if(err){
            res.send(err);
        }//if
        else{
            res.json(log_in);
        }//else
    });
});

router.get("/LogIns", (req, res)=>{
    LogIn.getAll((err, log_ins)=>{
        if(err){
            res.send(err);
        }//if
        else{
            res.json(log_ins);
        }//else
    });
});

router.get("/LogIn/:id", (req, res)=>{
    SalaryPackage.getById(req.params.id, (err, log_in)=>{
        if(err){
            res.send(err);
        }//if
        else{
            res.json(log_in);
        }//else
    });
});

module.exports=router;