const express=require("express");
const mongoose=require("mongoose");
const Customer=require("../dtos/customer");
const router=express.Router()

mongoose.connect("mongodb://umo:marium13@ds123181.mlab.com:23181/mytestdbfortestproject");

router.get("/Customers", function(req, res){
    Customer.getAllCustomer(function(err,customers){ //call customer.js function to get all customers
        if(err) throw err;
        else{
            return res.status(200).send(customers);
        }//else
    });
});//get list of customers

router.get("/Customers/:_id",function(req,res){
    let query = {_id :req.params._id};
    Customer.getCustomerById(query ,function(err,customer){//call customer.js function to get customer by id
        if(err){res.status(505).send(err);
        }
        else{
            return res.status(200).send(customer);
        }//else
    });//getCustomerByI
})//get

router.post("/Customers/insert",function(req,res){
    const data = req.body;
    const newCustomer = new Customer(data); 
    Customer.insertCustomer(newCustomer , (err,list)=>{
        if(err) res.status(505).send(err);
        else{
            res.status(200).send(list);
        }//else
    }); 

});//post data

router.put("/Customers/update/:_id",function(req,res){
    let query = {_id : req.params._id};
    let updatedCust = req.body;
    
    Customer.updateCustomer(query, updatedCust,(err,result)=>{//call customer.js function to update customer
       if(err) return res.status(505).send(err);
       else{
        return res.status(200).send(result);
       }//else
    });
});//update customer

router.delete("/Customers/:_id",function(req,res){
    let query = {_id : req.params._id};
    Customer.deleteCustomer(query,(err,customer)=>{
        if(err) return res.status(505).send(err);
        else{
            return res.status(200).send(customer);
        }//else
    });//delete customer
});//delete customer


module.exports=router;
