let express=require("express");
let bodyParser=require("body-parser");

//server and routes
let server=express();
let Inventory=require("./module_routers/inventory_router");

//bodyParser
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:false}));

//routing
server.use("/Inventory",Inventory);

port=3000;
server.listen(port,()=>{
    console.log("Listening at port "+port);
});
