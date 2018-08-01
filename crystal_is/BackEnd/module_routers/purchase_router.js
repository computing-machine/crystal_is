let express=require("express");
let PurchaseOrderApi=require("../REST/purchase/routers/purchase_order_api");
let VendorApi=require("../REST/purchase/routers/vendor_api");

let router=express.Router();


router.use("/PurchaseOrderApi", PurchaseOrderApi);
router.use("/VendorApi", VendorApi);
module.exports=router;