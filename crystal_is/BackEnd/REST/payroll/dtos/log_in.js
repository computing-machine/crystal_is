let mongoose=require("mongoose");

let LogInSchema=mongoose.Schema({
    user:{type:String, unique:true},
    pass:String
});

let LogIn=module.exports=mongoose.model("LogIn", LogInSchema, "LogIn");

module.exports.getLogIn=(given_user, given_pass, callback)=>{
    LogIn.find({ $and: [ { user: { $eq: given_user } }, { pass: { $eq: given_pass } } ] }, callback);
}//getLogIn

module.exports.getById=(id, callback)=>{
    LogIn.findById(id, callback);
}//getById

module.exports.getAll=(callback)=>{
    LogIn.find(callback);
}//getAll