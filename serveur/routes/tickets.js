
const express=require('express');

const router=express.Router();
// const Ticket=require('./models/ticket');
const Ticket=require('../models/ticket');

router.get('/tickets', async(req,res)=>{
    try{
        const tickets=await db.collection('tickets').find().toArray();
        res.status(200).json(tickets);
    }catch(err){
        console.log(err);
        throw err;
    }
})

router.get('/ticket/:id', async(req,res)=>{
    const id= parseInt(req.params.id);
    try{
        const ticket=await db.collection('tickets').findOne({number:id});
        res.status(200).json(ticket);
    }catch(err){
        console.log(err);
        throw err;
    }
})

router.post('/ticket', async(req,res)=>{
    
    try{
        const ticketData=req.body;
        const ticket=await db.collection('tickets').insertOne(ticketData);
        res.status(201).json(ticket);
    }catch(err){
        console.log(err);
        throw err;
    }
})

router.put('/ticket/:id', async(req,res)=>{
    try{
        const id= parseInt(req.params.id);
        const replacementTicket=req.body;
        const ticket=await db.collection('tickets').replaceOne({id},replacementTicket);
        res.status(200).json(ticket);
    }catch(err){
        console.log(err);
        throw err;
    }
})

router.patch('/ticket/:id', async(req,res)=>{
    try{
        const id= parseInt(req.params.id);
        const update=req.body;
        const ticket=await db.collection('tickets').updateOne({id},{$set:update}, {upsert:true});
        res.status(200).json(ticket);
    }catch(err){
        console.log(err);
        throw err;
    }
})

router.delete('/ticket/:id', async(req,res)=>{
    try{
        const id= parseInt(req.params.id);
        const ticket=await db.collection('tickets').deleteOne({id});
        res.status(200).json(ticket);
    }catch(err){
        console.log(err);
        throw err;
    }
})


module.exports=router;
