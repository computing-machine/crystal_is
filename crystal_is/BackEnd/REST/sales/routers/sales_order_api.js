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

router.get('/SalesOrders/Estimates',function(req,res){
    salesorder.getEstimates((err,result)=>{
        if(err){
            return res.send(err);
        }
        else{
            return res.status(200).send(salesorder);
        }//else
    });
});//get Estimate

router.get('/SalesOrders/deliveredOrders',function(req,res){
    salesorder.getDeliveredOrders((err,result)=>{
       if(err) return res.send(err);
       else{return res.send(result)};
    });
});

router.get('/SalesOrders/confirmedOrders',function(req,res){
    salesorder.getConfirmedOrders((err,result)=>{
        if(err) return res.send(err);
        else{return res.send(result);}
    });
});

router.get('/SalesOrders/ready',function(req,res){
    salesorder.getReadyOrders((err,result)=>{
        if(err) return res.send(err);
        else{return res.send(result);}
    });
});

router.get('/SalesOrders/production',function(req,res){
    salesorder.getOrdersInProduction((err,result)=>{
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

router.get('/SalesOrder/Customer/:id',function(req,res){
    let cusId = {customer_id : req.params.id};
    //let query = {_id :req.params._id};
    salesorder.getSalesOrderByCusId(cusId,(err,result)=>{
        if(err) res.send(err);
        else{
            res.send(result);
        }
        
    });
});

router.put("/SalesOrder/update/:id",function(req,res){
    let query = {_id : req.params.id};
    let Estimate = req.body;
    salesorder.updateSalesOrder(query,Estimate,(err,result)=>{
        if(err) return res.status(505).send(err);
        else{
            console.log(result);
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


module.exports = router;