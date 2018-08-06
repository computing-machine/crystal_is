let mongoose=require("mongoose");

let customerSchema=mongoose.Schema({
    
    name:{type:String },
    company:[{name:String}],
    contact_no :[ String ],
    address:[{address:String}],
});//schema

let Customer = module.exports=mongoose.model("customer", customerSchema, "Customer");//export model

module.exports.getAllCustomer=function(callback){
    Customer.find(callback);
}//getCustomerlist

module.exports.getCustomerById = function(id,callback){
    Customer.findById(id,callback);
}//getCustomerById

module.exports.insertCustomer = function(newCustomer, callback){
    newCustomer.save(callback);
}//insertCustomer

module.exports.updateCustomer = function(query ,updated, callback){
    Customer.findOneAndUpdate(query,updated,callback);
}//update Customer

module.exports.deleteCustomer = function(query, callback){
    Customer.remove(query,callback);
}//deleteCustomer





