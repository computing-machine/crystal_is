let express=require("express");

let router=express.Router();
let CustomerApi=require("../REST/sales/routers/customer_api");
let SalesOrderApi=require("../REST/sales/routers/sales_order_api");

router.use("/CustomerApi", CustomerApi);
router.use("/SalesOrderApi", SalesOrderApi);

module.exports = router;