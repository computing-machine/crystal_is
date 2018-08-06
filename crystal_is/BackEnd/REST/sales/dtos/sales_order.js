let mongoose = require("mongoose");
let Customer = require("./customer");
let Employee = require("../../payroll/dtos/employee");
let FinishedGood = require( "../../inventory/dtos/finished_good" );

let salesorderSchema = mongoose.Schema({
    
    salesperson_id : {type:Object}, 
    customer_id : {type : Object ,required:true},
    order_date : {type:Date,required:true},
    receivables: {type:String, required: true},
    total_price : {type : String},
    status:{type:String,required:true},
    invoice:{payment:[{date : Date , amount : String}],builty :{number : String}},
    deliverables: [ {fg_id : Object ,quantity : String} ],
    history:[ {status : String, date : Date} ]
});

let salesorder = module.exports = mongoose.model("salesorder",salesorderSchema,"SalesOrder");//export model

module.exports.getAllSalesOrder = function(callback){
    salesorder.find(callback);
}//getAllSalesorder

module.exports.getSalesOrderById =  function(id, callback){
    salesorder.find({_id:id},callback);
}//get salesOrderById

module.exports.getCustomerInSO = function(SO_id,callback){
    salesorder.getSalesOrderById(SO_id,(err,salesOrder)=>{
        if(err) callback(err);
        else{
            let cusId = salesOrder[0].customer_id;
            Customer.getCustomerById(cusId,(err,customer)=>{//call customer.js function to get customer by id
                if(err) callback(err);
                else{
                    return callback(customer)
                }//else
            });
        }//else
    });//getSalesOrderById
}//getCustomerInSO

module.exports.getDeliveredOrders = function(callback){
    let orders = [];
  salesorder.getAllSalesOrder((err,result)=>{
    for(let i = 0; i<result.length;++i){
        if(result[i].status == "delivered"){
            orders.push(result[i]);
        }//if
    }//for
    callback(orders);
  });
}//getDeliveredOrders


module.exports.getEstimates = function(callback){
    let orders = [];
    salesorder.getAllSalesOrder((err,result)=>{
        for(let i = 0; i<result.length;++i){
            if(result[i].status == "estimate"){
                orders.push(result[i]);
            }//if
        }//for
        callback(orders);
    });
}//getEstimates

module.exports.getConfirmedOrders = function(callback){
    let orders = [];
    salesorder.getAllSalesOrder((err,result)=>{
        for(let i = 0; i<result.length;++i){
            if(result[i].status == "confirmed"){
                orders.push(result[i]);
            }//if
        }//for
        callback(orders);
    });
}//getConfirmedOrders

module.exports.getOrdersInProduction= function(callback){
    let orders = [];
    salesorder.getAllSalesOrder((err,result)=>{
        for(let i = 0; i<result.length;++i){
            if(result[i].status == "production"){
                orders.push(result[i]);
            }//if
        }//for
        callback(orders);
    });
}//getOrdersInProduction

module.exports.getReadyOrders = function(callback){
    let orders = [];
    salesorder.getAllSalesOrder((err,result)=>{
        for(let i = 0; i<result.length;++i){
            if(result[i].status == "ready"){
                orders.push(result[i]);
            }//if
        }//for
        callback(orders);
    });
}//getOrdersReady



module.exports.insertSalesOrder = function(salesOrderObj,callback ){
    salesOrderObj.save(callback);

}//insertSalesOrder

module.exports.updateSalesOrder = function(SO_id,update,callback){
    salesorder.findOneAndUpdate(SO_id,update,callback);
}//updateSalesOrder

module.exports.getSalesOrderByCusId = function(cusId,callback){
    salesorder.find(cusId,callback);
}//getSalesOrderByCusId