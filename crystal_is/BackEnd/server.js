let express=require("express");
let bodyParser=require("body-parser");

//server and routes
let server=express();
let Inventory=require("./module_routers/inventory_router");
let Purchase=require("./module_routers/purchase_router");
let Payroll=require("./module_routers/payroll_router");

//bodyParser
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:false}));

//routing
server.use("/Inventory",Inventory);
server.use("/Purchase", Purchase);
server.use("/Payroll", Payroll);

port=3000;
server.listen(port,()=>{
    console.log("Listening at port "+port);
});
