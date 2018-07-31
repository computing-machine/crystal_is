let mongoose=require("mongoose");
let RawMaterial=require("./raw_material");
let Unit=require("./unit");
let BOM=require("./bom");

IntermediarySchema=mongoose.Schema({
    name:{type:String, required:true, unique:true},
    description:String,
    unit_id:{type:mongoose.Schema.Types.ObjectId, ref:Unit},
    stock:Number,
    attributes:{quantitative_attributes:[{name:String, unit_id:{type:mongoose.Schema.Types.ObjectId, ref:Unit}, magnitude:Number}],
    qualitative_attributes:[{name:String, description:String}]},
    line:String,
    wastage:Number,
    bom_id:{type:mongoose.Schema.Types.ObjectId, ref:BOM}
});

let Intermediary=module.exports=mongoose.model("Intermediary", IntermediarySchema, "Intermediary");

module.exports.getAll=(callback)=>{
    Intermediary.find(callback);
}//method

module.exports.getById=(id,callback)=>{
    Intermediary.findById(id, callback);
}//method

module.exports.getBOMbyId=(id, callback)=>{
    Intermediary.findById(id, (err, intermediary)=>{
        if(err){console.log(err);}//if
        else{
            let rm=[];
            for(let i=0; i<intermediary.bom.rm.length; i++)
                rm.push(intermediary.bom.rm[i].id);
            RawMaterial.find({"_id":{$in:rm}},(err, raw_material_list)=>{
                if(err){console.log(err)}//if
                else{
                        let result=[{"type":"raw_material", "list":raw_material_list}];
                        let intermed=[];
                        for(let i=0; i<intermediary.bom.inter.length; i++)
                            intermed.push(intermediary.bom.inter[i].id);
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