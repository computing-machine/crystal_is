let mongoose = require("mongoose");
let Employee=require("../../payroll/dtos/employee");
let Vendor=require("./vendor");
let RawMaterial=require("../../inventory/dtos/raw_material");

let PurchaseOrderSchema = mongoose.Schema({
    purchaser_id:{type:mongoose.Schema.Types.ObjectId, ref:Employee, required:true},
    vendor_id:{type:mongoose.Schema.Types.ObjectId, ref:Vendor, required:true},
    order_date:{type:Date, required:true},
    due_date:Date,
    payable:Number,
    deliverables:[{rm_id:{type:mongoose.Schema.Types.ObjectId, ref:RawMaterial, required:true}, quantity:Number}],
    recieved:[{rm_id:{type:mongoose.Schema.Types.ObjectId, ref:RawMaterial, ref:RawMaterial}, quantity:Number, date:Date, stockkeeper_id:{type:mongoose.Schema.Types.ObjectId, ref:Employee}}],
    invoiced:{ref_number:Number, status:Boolean, date:Date, payments:[{date:Date, amount:Number}]},
    delivery:{status:Boolean, date:Date, builty:{status:Boolean, num:String}}
});

let PurchaseOrder=module.exports = mongoose.model("PurchaseOrder",PurchaseOrderSchema,"PurchaseOrder");

module.exports.getAll=(callback)=>{
    PurchaseOrder.find(callback);
}//method

module.exports.getById=(id, callback)=>{
    PurchaseOrder.findById(id, callback);
}//method

module.exports.getByPurchaser=(id, callback)=>{
    PurchaseOrder.find({purchaser_id:{$eq:id}}, callback);
}//method

module.exports.getByVendor=(id, callback)=>{
    PurchaseOrder.find({vendor_id:{$eq:id}},callback);
}//method


module.exports.getNotCleared=(callback)=>{
    PurchaseOrder.find({payable:{$ne:0}}, callback);
}//method

module.exports.getPurchaseOrdersNotCompleted=(callback)=>{
    PurchaseOrder.find({purchase_order_completed:{$eq:false}},callback);
}//method