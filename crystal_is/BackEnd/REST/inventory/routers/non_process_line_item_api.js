let express=require("express");
let mongoose=require("mongoose");
let NonProcessLineItem=require("../dtos/non_process_line_item");

let router=express.Router();
mongoose.connect("mongodb://umo:marium13@ds123181.mlab.com:23181/mytestdbfortestproject");

router.get("/NonProcessLineItems",(req, res)=>{
    NonProcessLineItem.getAll((err, raw_materials)=>{
        if(err){
            res.send(err);
        }//if
        else{
            res.json(raw_materials);
        }//else
    });
})//router

router.get("/NonProcessLineItems/Active", (req, res)=>{
    NonProcessLineItem.getActiveNonProcessLineItems((err, rms)=>{
        if(err){res.json();}//if
        else{
            res.send(rms);
        }//if
    });
});

router.get("/NonProcessLineItems/Inactive", (req, res)=>{
    NonProcessLineItem.getInactiveNonProcessLineItems((err, rms)=>{
        if(err){res.json();}//if
        else{
            res.send(rms);
        }//if
    });
});

router.get("/NonProcessLineItem/:id",(req, res)=>{
    NonProcessLineItem.getById(req.params.id,(err, raw_material)=>{
        if(err){
            res.send(err);
        }//if
        else{
            res.json(raw_material);
        }//else
    });
})//router

//create new object
router.post("/NonProcessLineItem/Save",function(req,res){
    const data = req.body;
    const new_raw_material = new NonProcessLineItem(data); 
    NonProcessLineItem.saveInDb(new_raw_material , (err,list)=>{
        if(err) res.status(505).send(err);
        else{
            res.status(200).send(list);
        }//else
    }); 

});//post data

router.put("/NonProcessLineItem/update/:id",function(req,res){
    let id= req.params.id
    let update = req.body;
    
    NonProcessLineItem.updateNonProcessLineItem(id, update, (err,result)=>{
       if(err) return res.status(505).send(err);
       else{
        return res.status(200).send(result);
       }//else
    });
});//put unit

module.exports=router;