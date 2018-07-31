let mongoose=require("mongoose");
let RawMaterial=require("./raw_material");
let Intermediary=require("./intermediary");
let Unit=require("./unit");

BomSchema=mongoose.Schema({
    rm:[{"id":{type:mongoose.Schema.Types.ObjectId, ref:RawMaterial}, unit:{type:mongoose.Schema.Types.ObjectId, ref:Unit}, quantity:Number}],
    inter:[{"id":{type:mongoose.Schema.Types.ObjectId, ref:Intermediary},unit:{type:mongoose.Schema.Types.ObjectId, ref:Unit}, quantity:Number}]
});

let BOM=module.exports=mongoose.model("BOM", BomSchema, "BOM");

module.exports.getAll=(callback)=>{
    BOM.find(callback);
}//method

module.exports.getById=(id,callback)=>{
    BOM.findById(id, callback);
}//method