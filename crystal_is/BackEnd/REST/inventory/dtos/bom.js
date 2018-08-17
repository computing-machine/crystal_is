let mongoose=require("mongoose");
let RawMaterial=require("./raw_material");
let Intermediary=require("./intermediary");
let Unit=require("./unit");

BomSchema=mongoose.Schema({
    rm:[{id:{type:mongoose.Schema.Types.ObjectId, ref:RawMaterial}, unit_id:{type:mongoose.Schema.Types.ObjectId, ref:Unit}, quantity:Number}],
    inter:[{id:{type:mongoose.Schema.Types.ObjectId, ref:Intermediary},unit_id:{type:mongoose.Schema.Types.ObjectId, ref:Unit}, quantity:Number}]
});

let BOM=module.exports=mongoose.model("BOM", BomSchema, "BOM");

module.exports.getAll=(callback)=>{
    BOM.find(callback);
}//method

module.exports.getById=(id,callback)=>{
    BOM.findById(id, callback);
}//method

module.exports.saveInDb= function(given_bom, callback){
    given_bom.save(callback);
}//save new object

module.exports.updateBom = function(id ,update, callback){
    BOM.update({ _id: id }, { $set: update }, callback);
}//update Customer