let mongoose=require("mongoose");

UnitSchema=mongoose.Schema({
    name:{type:String, required:true, unique:true},
    description:String,
    converters:[{unit_name:String, factor:Number}],
    status:String
});

let Unit=module.exports=mongoose.model("Unit", UnitSchema, "Unit");

module.exports.getAll=(callback)=>{
    Unit.find(callback);
}//method

module.exports.getActiveUnits=(callback)=>{
    Unit.find({status:{$eq:"active"}}, callback);
}//method

module.exports.getInactiveUnits=(callback)=>{
    Unit.find({status:{$eq:"inactive"}}, callback);
}//method

module.exports.getById=(id,callback)=>{
    Unit.findById(id, callback);
}//method

module.exports.RegisterUnit= function(given_unit, callback){
    given_unit.save(callback);
}//save new object

module.exports.updateUnit = function(id ,update, callback){
    Unit.update({ _id: id }, { $set: update }, callback);
}//update Customer