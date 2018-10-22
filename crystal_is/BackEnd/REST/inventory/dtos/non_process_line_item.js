let Unit=require("../dtos/unit");
let PurchaseHistory=require("../dtos/purchase_history");

let mongoose=require("mongoose");

NonProcessLineItemSchema=mongoose.Schema({
    name:{type:String, required:true, unique:true},
    description:String,
    stock_info:{unit_id:{type:mongoose.Schema.Types.ObjectId, ref:Unit}, available:Number, Minimum:Number},
    attributes:{quantitative_attributes:[{name:String, unit_id:{type:mongoose.Schema.Types.ObjectId, ref:Unit}, magnitude:Number}],
    qualitative_attributes:[{name:String, description:String}]},
    cost:Number,
    purchase_history_id:{type:mongoose.Schema.Types.ObjectId, ref:PurchaseHistory},
    status:String
});

let NonProcessLineItem=module.exports=mongoose.model("NonProcessLineItem", NonProcessLineItemSchema, "NonProcessLineItem");

module.exports.getAll=(callback)=>{
    NonProcessLineItem.find(callback);
}//method

module.exports.getById=(id,callback)=>{
    NonProcessLineItem.findById(id, callback);
}//method

module.exports.saveInDb= function(given_non_process, callback){
    given_non_process.save(callback);
}//insertCustomer

module.exports.getActiveNonProcessLineItems=(callback)=>{
    NonProcessLineItem.find({status:{$eq:"active"}}, callback);
}//method

module.exports.getInactiveNonProcessLineItems=(callback)=>{
    NonProcessLineItem.find({status:{$eq:"inactive"}}, callback);
}//method

module.exports.updateNonProcessLineItem = function(id ,update, callback){
    NonProcessLineItem.update({ _id: id }, { $set: update }, callback);
}//update Customer