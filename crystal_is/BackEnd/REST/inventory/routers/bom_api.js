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

//create new object
router.post("/BOM/Save",function(req,res){
    const data = req.body;
    const new_bom = new BOM(data); 
    BOM.saveInDb(new_bom , (err,list)=>{
        if(err) res.status(505).send(err);
        else{
            res.status(200).send(list);
        }//else
    }); 

});//post data

module.exports=router;