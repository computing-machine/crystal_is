let mongoose = require("mongoose");
let Employee=require("../../payroll/dtos/employee");
let Vendor=require("./vendor");
let RawMaterial=require("../../inventory/dtos/raw_material");
let Unit=require("../../inventory/dtos/unit");
 
let PurchaseOrderSchema = mongoose.Schema({
    purchaser_id:{type:mongoose.Schema.Types.ObjectId, ref:Employee, required:true},
    vendor_id:{type:mongoose.Schema.Types.ObjectId, ref:Vendor, required:true},
    order_date:{type:Date, required:true},
    status:String,
    due_date:Date,
    payable:Number,
    deliverables:[{rm_id:{type:mongoose.Schema.Types.ObjectId, ref:RawMaterial, required:true},
        unit_id:{type:mongoose.Schema.Types.ObjectId, ref:Unit, required:true},quantity:Number,
        price:Number,recievings:[{date:Date, quantity:Number, note:String, bilty:{status:Boolean, ref_number:Number}}]}],
    invoice:{ref_number:Number, payments:[{date:Date, amount:Number, reciept_number:Number, note:String}]},
    history:[{status:String, date:Date}]
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