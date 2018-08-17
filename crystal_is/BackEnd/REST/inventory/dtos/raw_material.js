let Unit=require("../dtos/unit");
let PurchaseHistory=require("../dtos/purchase_history");

let mongoose=require("mongoose");

RawMaterialSchema=mongoose.Schema({
    name:{type:String, required:true, unique:true},
    description:String,
    stock_info:{unit_id:{type:mongoose.Schema.Types.ObjectId, ref:Unit}, available:Number, Minimum:Number},
    attributes:{quantitative_attributes:[{name:String, unit_id:{type:mongoose.Schema.Types.ObjectId, ref:Unit}, magnitude:Number}],
    qualitative_attributes:[{name:String, description:String}]},
    wastage:Number,
    cost:Number,
    purchase_history_id:{type:mongoose.Schema.Types.ObjectId, ref:PurchaseHistory},
    status:String
});

let RawMaterial=module.exports=mongoose.model("RawMaterial", RawMaterialSchema, "RawMaterial");

module.exports.getAll=(callback)=>{
    RawMaterial.find(callback);
}//method

module.exports.getById=(id,callback)=>{
    RawMaterial.findById(id, callback);
}//method

module.exports.saveInDb= function(given_raw_material, callback){
    given_raw_material.save(callback);
}//insertCustomer

module.exports.getActiveRawMaterials=(callback)=>{
    RawMaterial.find({status:{$eq:"active"}}, callback);
}//method

module.exports.getInactiveRawMaterials=(callback)=>{
    RawMaterial.find({status:{$eq:"inactive"}}, callback);
}//method

module.exports.updateRawMaterial = function(id ,update, callback){
    RawMaterial.update({ _id: id }, { $set: update }, callback);
}//update Customer