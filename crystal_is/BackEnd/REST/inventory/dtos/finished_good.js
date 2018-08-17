let mongoose=require("mongoose");
let RawMaterial=require("./raw_material");
let Intermediary=require("./intermediary");
let Unit=require("./unit");
let BOM=require("./bom");

FinishedGoodSchema=mongoose.Schema({
    name:{type:String, required:true, unique:true},
    description:String,
    stock_info:{unit_id:{type:mongoose.Schema.Types.ObjectId, ref:Unit}, available:Number, minimum:Number},
    attributes:{quantitative_attributes:[{name:String, unit_id:{type:mongoose.Schema.Types.ObjectId, ref:Unit}, magnitude:Number}],
    qualitative_attributes:[{name:String, description:String}]},
    line:String,
    bom_id:{type:mongoose.Schema.Types.ObjectId, ref:BOM},
    price:Number,
    status:String
});

let FinishedGood=module.exports=mongoose.model("FinishedGood", FinishedGoodSchema, "FinishedGood");

module.exports.getAll=(callback)=>{
    FinishedGood.find(callback);
}//getAllFinishedGoods

module.exports.getById=(id, callback)=>{
    FinishedGood.findById(id, callback);
}//getFinishedGoodById

module.exports.getBOMbyId=(id, callback)=>{
    FinishedGood.findById(id, (err, finished_good)=>{
        if(err){console.log(err);}//if
        else{
            let rm=[];
            for(let i=0; i<finished_good.bom.rm.length; i++)
                rm.push(finished_good.bom.rm[i].id);
            RawMaterial.find({"_id":{$in:rm}},(err, raw_material_list)=>{
                if(err){console.log(err)}//if
                else{
                        let result=[{"type":"raw_material", "list":raw_material_list}];
                        let intermed=[];
                        for(let i=0; i<finished_good.bom.inter.length; i++)
                            intermed.push(finished_good.bom.inter[i].id);
                        Intermediary.find({"_id":{$in:intermed}},(err, intermediary_list)=>{
                            if(err){console.log(err)}//if
                            else{
                                result.push({"type":"intermediary", "list":intermediary_list});
                                callback(result);
                            }//else
                    });
                }//else
            });
        }//else
    });
}//method

module.exports.saveInDb= function(given_finished_good, callback){
    given_finished_good.save(callback);
}//save new object

module.exports.updateFinishedGood = function(id ,update, callback){
    FinishedGood.update({ _id: id }, { $set: update }, callback);
}//update Customer

module.exports.getActiveFinishedGoods=(callback)=>{
    FinishedGood.find({status:{$eq:"active"}}, callback);
}//method

module.exports.getInactiveFinishedGoods=(callback)=>{
    FinishedGood.find({status:{$eq:"inactive"}}, callback);
}//method