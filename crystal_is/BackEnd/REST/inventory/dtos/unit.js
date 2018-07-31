let mongoose=require("mongoose");

UnitSchema=mongoose.Schema({
    name:{type:String, required:true, unique:true},
    converters:[{unit_name:String, factor:Number}]
});

let Unit=module.exports=mongoose.model("Unit", UnitSchema, "Unit");

module.exports.getAll=(callback)=>{
    Unit.find(callback);
}//method

module.exports.getById=(id,callback)=>{
    Unit.findById(id, callback);
}//method

module.exports.addUnit=(unit, callback)=>{
    Unit.create(unit, callback);
}