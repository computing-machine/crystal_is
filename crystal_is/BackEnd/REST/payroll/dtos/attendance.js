let mongoose=require("mongoose");
let Employee=require("../dtos/employee");


let AttendanceSchema=mongoose.Schema({
    employee_id:{type:mongoose.Schema.Types.ObjectId, ref:Employee},
    year:Number,
    months:[{name:String, days:[{date:Number, start_time:Number, end_time:Number}]}]
});

let Attendance=module.exports=mongoose.model("Attendance", AttendanceSchema, "Attendance");