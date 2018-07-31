let mongoose=require("mongoose");
let express=require("express");
let PurchaseHistory=require("../dtos/purchase_history");

let router=express.Router();
mongoose.connect("mongodb://umo:marium13@ds123181.mlab.com:23181/mytestdbfortestproject");

router.get("/PurchaseHistorys", (req, res)=>{
    PurchaseHistory.getAll((err, purchase_historys)=>{
        if(err){res.json();}//if
        else{
            res.send(purchase_historys);
        }//if
    });
});

router.get("/PurchaseHistory/:id", (req, res)=>{
    PurchaseHistory.getById(req.params.id,(err, purchase_history)=>{
        if(err){res.json();}//if
        else{
            res.send(purchase_history);
        }//if
    });
});

module.exports=router;