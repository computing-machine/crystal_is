//import classes
const express = require('express');
const mongoose = require('mongoose');
const salesorder = require('../dtos/sales_order');
//configration 
let router = express.Router();
//datebase connection
mongoose.connect("mongodb://umo:marium13@ds123181.mlab.com:23181/mytestdbfortestproject");



router.get('/SalesOrders',function(req,res){
    salesorder.getAllSalesOrder(function(err,salesorders){
        if(err) res.status(505).send(err);
        else{
            res.status(200).send(salesorders);
        }//else
    });//getAllSalesOrder
});//get all salesorders

router.get('/SalesOrders/Estimates/:id',function(req,res){
    let _id= req.params.id;
    salesorder.getEstimates(_id,(err,result)=>{
        if(err){
            return res.send(err);
        }
        else{
            return res.status(200).send(result);
        }//else
    });
});//get Estimate

router.get('/SalesOrders/deliveredOrders/:id',function(req,res){
    let _id= req.params.id;
    salesorder.getDeliveredOrders(_id,(err,result)=>{
       if(err) return res.send(err);
       else{return res.send(result)};
    });
});

router.get('/SalesOrders/confirmedOrders/:id',function(req,res){
    let _id= req.params.id;
    salesorder.getConfirmedOrdersBySalperId(_id,(err,result)=>{
        if(err) return res.send(err);
        else{
            return res.send(result);}
    });
});

router.get('/SalesOrders/ready/:id',function(req,res){
    let _id= req.params.id;
    salesorder.getReadyOrders(_id,(err,result)=>{
        if(err) return res.send(err);
        else{return res.send(result);}
    });
});

router.get('/SalesOrders/production/:id',function(req,res){
    let _id= req.params.id;
    salesorder.getOrdersInProduction(_id,(err,result)=>{
        if(err) return res.send(err);
        else{return res.send(result);}
    });
});

router.get('/SalesOrder/:_id',function(req,res){
    let id = req.params._id;
    salesorder.getSalesOrderById(id,(err,salesOrder)=>{
        if(err) return res.status(505).send(err);
        else{
            res.status(200).send(salesOrder);
        }//else
    });
});//get salesOrderbyId


router.get('/SalesOrder/:_id/Customer',function(req,res){
    let id = req.params._id;
    salesorder.getCustomerInSO(id,(result)=>{
        res.send(result);
    });
});


router.put("/SalesOrder/update/:id",function(req,res){
    let query = {_id : req.params.id};
    let Estimate = req.body;
    salesorder.updateSalesOrder(query,Estimate,(err,result)=>{
        if(err) return res.status(505).send(err);
        else{
         return res.status(200).send(result);
        }//else
    });//updateSalesOrder
});//update customer

router.post('/SalesOrder/insert',function(req,res){
    const data = req.body;
    let newsalesorder = new salesorder(data);
   salesorder.insertSalesOrder(newsalesorder,(err,salesOrder)=>{
    if(err) res.status(505).send(err);
    else{
        res.status(200).send(salesOrder);
    }//else
   });//insertSalesOrder
});//post salesOrder

router.get('/SalesOrders/cusId/:id/salperId/:salperId',function(req,res){
    let id = req.params.id;
    salesorder.find({ $and:[{customer_id:{$eq:id}},{salesperson_id : {$eq:req.params.salperId} }]},(err, salesorders)=>{
        if(err){console.log(err);}//if
        else{
            res.send(salesorders);
        }
    });
 });

 router.delete("/Estimate/delete/:_id",function(req,res){
    let query = {_id : req.params._id};
    salesorder.deleteEstimate(query,(err,estimate)=>{
        if(err) return res.status(505).send(err);
        else{
            return res.status(200).send(estimate);
        }//else
    });//delete customer
});//delete customer



module.exports = router;