let mongoose=require("mongoose");
let express=require("express");
let Unit=require("../dtos/unit");

let router=express.Router();
mongoose.connect("mongodb://umo:marium13@ds123181.mlab.com:23181/mytestdbfortestproject");

router.get("/Units", (req, res)=>{
    Unit.getAll((err, units)=>{
        if(err){res.json();}//if
        else{
            res.send(units);
        }//if
    });
});

router.get("/Unit/:id", (req, res)=>{
    Unit.getById(req.params.id,(err, unit)=>{
        if(err){
            res.send(err);
        }//if
        else{
            res.json(unit);
        }//else
    })
});

router.post("/Units", (req, res)=>{
    let unit=req.body;
    Unit.addUnit(unit, (err, unit)=>{
        if(err){console.log(err);}//if
        else{res.json(unit)}
    });
});

module.exports=router;