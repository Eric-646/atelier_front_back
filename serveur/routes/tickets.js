
const express=require('express');

const router=express.Router();

const Ticket=require('../models/tickets');

// Read - Récupérer tous les tickets
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

// Create - Ajouter un ticket
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
// Update - Mettre à jour un ticket
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
// Update - Mettre à jour un ticket
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
// Delete - Supprimer un ticket
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
