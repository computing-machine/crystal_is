let mongoose=require("mongoose");
let express=require("express");
let BOM=require("../dtos/bom");

let router=express.Router();
mongoose.connect("mongodb://umo:marium13@ds123181.mlab.com:23181/mytestdbfortestproject");

router.get("/BOMs", (req, res)=>{
    BOM.getAll((err, boms)=>{
        if(err){res.json();}//if
        else{
            res.send(boms);
        }//if
    });
});

router.get("/BOM/:id", (req, res)=>{
    BOM.getById(req.params.id,(err, bom)=>{
        if(err){res.json();}//if
        else{
            res.send(bom);
        }//if
    });
});

module.exports=router;