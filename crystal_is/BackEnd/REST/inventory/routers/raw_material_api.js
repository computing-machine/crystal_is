let express=require("express");
let mongoose=require("mongoose");
let RawMaterial=require("../dtos/raw_material");

let router=express.Router();
mongoose.connect("mongodb://umo:marium13@ds123181.mlab.com:23181/mytestdbfortestproject");

router.get("/RawMaterials",(req, res)=>{
    RawMaterial.getAll((err, raw_materials)=>{
        if(err){
            res.send(err);
        }//if
        else{
            res.json(raw_materials);
        }//else
    });
})//router

router.get("/RawMaterial/:id",(req, res)=>{
    RawMaterial.getById(req.params.id,(err, raw_material)=>{
        if(err){
            res.send(err);
        }//if
        else{
            res.json(raw_material);
        }//else
    });
})//router

router.put("/RawMaterial/:id",(req, res)=>{
    let x={_id:req.params.id};
    let update={
        name:req.body.name
    };
    RawMaterial.updateRawMaterial(x, update,(err, result)=>{
        if(err){res.send(err);}//if
        else{
            res.send(result);
        }//else
    });
});


router.post("/RawMaterial/New");

module.exports=router;