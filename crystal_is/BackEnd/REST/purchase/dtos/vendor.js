let mongoose = require("mongoose");


let VendorSchema = mongoose.Schema({

    name:{type:String, required:true},
    company:[{name:String}],
    address:[{city:String,street:String,house_no:String}],
    contact_no:[{type:Number ,required:true}],
    payable:Number

});

let Vendor=module.exports = mongoose.model("Vendor",VendorSchema,"Vendor");


module.exports.getAllVendors=(callback)=>{
    Vendor.find(callback);
}//method

module.exports.getById=(id, callback)=>{
    Vendor.findById(id, callback);
}//method
