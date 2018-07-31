let mongoose = require("mongoose");
let Customer=require("./customer");
let FinishedGood=require("../../inventory/dtos/finished_good");
let Employee=require("../../payroll/dtos/employee");

let SalesOrderSchema = mongoose.Schema({
    employee_id:{type:mongoose.Schema.Types.ObjectId, ref:Employee, required:true},
    customer_id:{type:mongoose.Schema.Types.ObjectId, ref:Customer, required:true},
    order_date:{type:Date, required:true},
    recievables:Number,
    deliverables:[{finished_good:{type:mongoose.Schema.Types.ObjectId, ref:FinishedGood, required:true}, quantity:Number}],
    Invoiced:{status:Boolean, date:Date, payments:[{date:Date, amount:Number}]},
    delivery:{status:Boolean, date:Date, builty:{status:Boolean, num:String}}
});

let SalesOrder=module.exports = mongoose.model("SalesOrder",SalesOrderSchema,"SalesOrder");
