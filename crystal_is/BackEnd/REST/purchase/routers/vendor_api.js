let express=require("express");
let mongoose=require("mongoose");
let router=express.Router();


let Vendor=require("../dtos/vendor");

mongoose.connect("mongodb://umo:marium13@ds123181.mlab.com:23181/mytestdbfortestproject");


router.get("/Vendors", (req, res)=>{
    Vendor.getAllVendors((err, vendor)=>{
        if(err){res.send(err);}//if
        else{
            res.send(vendor);
        }//else
    });
});

router.get("/Vendor/:id", (req, res)=>{
    
    Vendor.getById(req.params.id, (err, vendor)=>{
        if(err){res.send(err);}//if
        else{
            res.send(vendor);
        }//else
    });
});



module.exports=router;