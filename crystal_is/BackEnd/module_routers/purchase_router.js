let express=require("express");
let PurchaseOrderApi=require("../REST/purchase/routers/purchase_order_api");

let router=express.Router();


router.use("/PurchaseOrderApi", PurchaseOrderApi);
module.exports=router;