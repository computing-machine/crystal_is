let Unit=require("../dtos/unit");
let PurchaseHistory=require("../dtos/purchase_history");

let mongoose=require("mongoose");

RawMaterialSchema=mongoose.Schema({
    name:{type:String, required:true, unique:true},
    description:String,
    unit_id:{type:mongoose.Schema.Types.ObjectId, ref:Unit},
    stock:Number,
    attributes:{quantitative_attributes:[{name:String, unit_id:{type:mongoose.Schema.Types.ObjectId, ref:Unit}, magnitude:Number}],
    qualitative_attributes:[{name:String, description:String}]},
    wastage:Number,
    purchase_history_id:{type:mongoose.Schema.Types.ObjectId, ref:PurchaseHistory}
});

let RawMaterial=module.exports=mongoose.model("RawMaterial", RawMaterialSchema, "RawMaterial");

module.exports.getAll=(callback)=>{
    RawMaterial.find(callback);
}//method

module.exports.getById=(id,callback)=>{
    RawMaterial.findById(id, callback);
}//method

module.exports.updateRawMaterial=(id, update, callback)=>{
    RawMaterial.findOneAndUpdate(id, update, callback);
}//method