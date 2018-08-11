let mongoose=require("mongoose");

PurchaseHistorySchema=mongoose.Schema({
    purchase_records:[{price:Number, date:Date, quantity:Number}]
});

let PurchaseHistory=module.exports=mongoose.model("PurchaseHistory", PurchaseHistorySchema, "PurchaseHistory");

module.exports.getAll=(callback)=>{
    PurchaseHistory.find(callback);
}//method

module.exports.getById=(id,callback)=>{
    PurchaseHistory.findById(id, callback);
}//method

module.exports.saveInDb= function(given_purchase_history, callback){
    given_purchase_history.save(callback);
}//save new object