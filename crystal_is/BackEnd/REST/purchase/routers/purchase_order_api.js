let mongoose=require("mongoose");
let express=require("express");
let router=express.Router();

let PurchaseOrder=require("../dtos/purchase_order");

mongoose.connect("mongodb://umo:marium13@ds123181.mlab.com:23181/mytestdbfortestproject");

router.get("/PurchaseOrders",(req, res)=>{
    PurchaseOrder.getAll((err, purchase_orders)=>{
        if(err){res.send(err);}//if
        else{
            res.json(purchase_orders);
        }//else
    });
});

router.get("/PurchaseOrder/:id", (req, res)=>{
    PurchaseOrder.getById(req.params.id, (err, purchase_order)=>{
        if(err){res.send(err);}//if
        else{
            res.send(purchase_order);
        }//else
    });
});

router.get("/PurchaseOrders/Purchaser/:id", (req, res)=>{
    PurchaseOrder.getByPurchaser(req.params.id, (err, purchase_orders)=>{
        if(err){res.send(err);}//if
        else{
            res.send(purchase_orders);
        }//else
    });
});

router.get("/PurchaseOrders/Vendor/:id", (req, res)=>{
    PurchaseOrder.getByVendor(req.params.id, (err, purchase_orders)=>{
        if(err){res.send(err);}//if
        else{
            res.send(purchase_orders);
        }//else
    });
});

router.get("/PurchaseOrders/Payables/NotCleared", (req, res)=>{
    PurchaseOrder.getAllPayables((err, purchase_orders)=>{
        if(err){res.send(err);}//if
        else{
            res.json(purchase_orders);
        }//else
    });
});

router.get("/PurchaseOrders/Completed/False",(req, res)=>{
    PurchaseOrder.getPurchaseOrdersNotCompleted((err, purchase_orders)=>{
        console.log(purchase_orders);
        if(err){res.send(err);}//if
        else{res.json(purchase_orders);}//else
    });
});

module.exports=router;