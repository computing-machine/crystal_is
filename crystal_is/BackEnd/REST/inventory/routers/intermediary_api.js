let express=require("express");
let mongoose=require("mongoose");
let Intermediary=require("../dtos/intermediary");

let router=express.Router();
mongoose.connect("mongodb://umo:marium13@ds123181.mlab.com:23181/mytestdbfortestproject");

router.get("/Intermediarys",(req, res)=>{
    Intermediary.getAll((err, raw_materials)=>{
        if(err){
            res.send(err);
        }//if
        else{
            res.json(raw_materials);
        }//else
    });
})//router

router.get("/Intermediary/:id",(req, res)=>{
    Intermediary.getById(req.params.id,(err, raw_material)=>{
        if(err){
            res.send(err);
        }//if
        else{
            res.json(raw_material);
        }//else
    });
})//router

router.get("/Intermediary/:id/BOM", (req, res)=>{
    Intermediary.getBOMbyId(req.params.id, (result)=>{
        res.json(result);
    });
});

module.exports=router;