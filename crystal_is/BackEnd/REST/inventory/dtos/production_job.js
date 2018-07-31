let mongoose=require("mongoose");
let FinishedGood=require("./finished_good");
let RawMaterial=require("./raw_material");
let Intermediary=require("./intermediary");
let SalesOrder=require("../../sales/dtos/sales_order");

ProductionJobSchema=mongoose.Schema({
    job:{type:{}, enum:[{sales_order_id:{type:mongoose.Schema.Types.ObjectId, ref: SalesOrder}, finished_good_id:{type:mongoose.Schema.Types.ObjectId, ref: FinishedGood}},
        {finished_good_id:{type:mongoose.Schema.Types.ObjectId, ref: FinishedGood}, quantity:Number}]},
    item_id:{type:mongoose.Schema.Types.ObjectId, enum:[{type:mongoose.Schema.Types.ObjectId, ref: RawMaterial},{type:mongoose.Schema.Types.ObjectId, ref: Intermediary}]},
    usage:{
        issued:Number,
        returned:Number,
        wastage:Number
    },
    time:{
        production_date:Date,
        start_time:Date,
        end_time:Date
    }
});

let ProductionJob=module.exports=mongoose.model("ProductionJob", ProductionJobSchema, "ProductionJob");

module.exports.getAll=(callback)=>{
    ProductionJob.find(callback);
}//method

module.exports.getById=(id,callback)=>{
    ProductionJob.findById(id, callback);
}//method

module.exports.getBySalesOrder=(id, callback)=>{
    ProductionJob.find({job:{$eq:{id}}}, callback);
}//method