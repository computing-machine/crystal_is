let express=require("express");
let mongoose=require("mongoose");
let ProductionJob=require("../dtos/production_job");

let router=express.Router();
mongoose.connect("mongodb://umo:marium13@ds123181.mlab.com:23181/mytestdbfortestproject");

router.get("/ProductionJobs",(req, res)=>{
    ProductionJob.getAll((err, production_jobs)=>{
        if(err){
            res.send(err);
        }//if
        else{
            res.json(production_jobs);
        }//else
    });
})//router

router.get("/ProductionJobs/:id",(req, res)=>{
    ProductionJob.getById(req.params.id,(err, production_job)=>{
        if(err){
            res.send(err);
        }//if
        else{
            res.json(production_job);
        }//else
    });
})//router

router.get("/ProductionJobs/SalesOrder/:id",(req, res)=>{
    ProductionJob.getBySalesOrder(req.params.id, (err, production_jobs)=>{
        if(err){
            res.send(err);
        }//if
        else{
            console.log(production_jobs);
            res.json(production_jobs);
        }//else
    });
});

module.exports=router;