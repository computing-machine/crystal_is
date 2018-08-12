let express=require("express");
let mongoose=require("mongoose");
let FinishedGood=require("../dtos/finished_good");
let RawMaterial=require("../dtos/raw_material");
let Intermediary=require("../dtos/intermediary");

let router=express.Router();
mongoose.connect("mongodb://umo:marium13@ds123181.mlab.com:23181/mytestdbfortestproject");

router.get("/FinishedGoods",(req, res)=>{
    FinishedGood.getAll((err, finished_goods)=>{
        if(err){
            res.send(err);
        }//if
        else{
            res.json(finished_goods);
        }//else
    });
})//router

router.get("/FinishedGood/:id",(req, res)=>{
    FinishedGood.getById(req.params.id,(err, finished_good)=>{
        if(err){
            res.send(err);
        }//if
        else{
            res.json(finished_good);
        }//else
    })
});

router.get("/FinishedGood/:id/BOM", (req, res)=>{
    FinishedGood.getBOMbyId(req.params.id, (result)=>{
        res.json(result);
    });
});

//create new object
router.post("/FinishedGood/Save",function(req,res){
    const data = req.body;
    const new_finished_good = new FinishedGood(data); 
    FinishedGood.saveInDb(new_finished_good , (err,list)=>{
        if(err) res.status(505).send(err);
        else{
            res.status(200).send(list);
        }//else
    }); 

});//post data

module.exports=router;