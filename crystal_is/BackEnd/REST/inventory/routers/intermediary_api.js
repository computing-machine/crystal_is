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

router.get("/Intermediarys/Active", (req, res)=>{
    Intermediary.getActiveIntermediarys((err, rms)=>{
        if(err){res.json();}//if
        else{
            res.send(rms);
        }//if
    });
});

router.get("/Intermediarys/Inactive", (req, res)=>{
    Intermediary.getInactiveIntermediarys((err, rms)=>{
        if(err){res.json();}//if
        else{
            res.send(rms);
        }//if
    });
});

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

//create new object
router.post("/Intermediary/Save",function(req,res){
    const data = req.body;
    const new_intermediary = new Intermediary(data); 
    Intermediary.saveInDb(new_intermediary , (err,list)=>{
        if(err) res.status(505).send(err);
        else{
            res.status(200).send(list);
        }//else
    }); 

});//post data

router.put("/Intermediary/update/:id",function(req,res){
    let id= req.params.id
    let update = req.body;
    
    Intermediary.updateIntermediary(id, update, (err,result)=>{
       if(err) return res.status(505).send(err);
       else{
        return res.status(200).send(result);
       }//else
    });
});//put unit

module.exports=router;