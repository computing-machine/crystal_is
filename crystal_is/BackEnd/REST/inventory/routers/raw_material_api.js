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

//create new object
router.post("/RawMaterial/Save",function(req,res){
    const data = req.body;
    const new_raw_material = new RawMaterial(data); 
    RawMaterial.saveInDb(new_raw_material , (err,list)=>{
        if(err) res.status(505).send(err);
        else{
            res.status(200).send(list);
        }//else
    }); 

});//post data

module.exports=router;