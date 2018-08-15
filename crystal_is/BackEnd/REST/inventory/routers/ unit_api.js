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

router.get("/Units/Active", (req, res)=>{
    Unit.getActiveUnits((err, units)=>{
        if(err){res.json();}//if
        else{
            res.send(units);
        }//if
    });
});

router.get("/Units/Inactive", (req, res)=>{
    Unit.getInactiveUnits((err, units)=>{
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

//create new object
router.post("/Unit/Save",function(req,res){
    const data = req.body;
    const new_unit = new Unit(data); 
    Unit.RegisterUnit(new_unit, (err,list)=>{
        if(err) res.status(505).send(err);
        else{
            res.status(200).send(list);
        }//else
    }); 

});//post data

router.put("/Unit/update/:id",function(req,res){
    let id= req.params.id
    let update = req.body;
    
    Unit.updateUnit(id, update, (err,result)=>{
       if(err) return res.status(505).send(err);
       else{
        return res.status(200).send(result);
       }//else
    });
});//put unit

module.exports=router;