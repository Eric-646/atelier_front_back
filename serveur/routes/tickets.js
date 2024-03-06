
const express=require('express');

const router=express.Router();

const Ticket=require('../models/tickets');

// Create - Ajouter un ticket
router.post('/', async(req,res)=>{
    
    try{
        const ticketData=req.body;
        const ticket=await db.collection('tickets').insertOne(ticketData);
        res.status(201).json(ticket);
    }catch(err){
        console.log(err);
        throw err;
    }
})
// Read - Récupérer tous les tickets
router.get('/', async(req,res)=>{
    try{
        const tickets=await db.collection('tickets').find().toArray();
        res.status(200).json(tickets);
    }catch(err){
        console.log(err);
        throw err;
    }
})

router.get('/:ticketNumber', async(req,res)=>{
    const id= parseInt(req.params.id);
    try{
        const ticket=await db.collection('tickets').findOne({number:id});
        res.status(200).json(ticket);
    }catch(err){
        console.log(err);
        throw err;
    }
})

// Update - Mettre à jour un ticket
router.put('/:ticketNumber', async(req,res)=>{
 const {ticketNumber}=req.params;
 try{
 const updatedTicket=await Ticket.findOneAndUpdate({ticketNumber},req.body,{res.status(200).json(updatedTicket)});
    }catch(err){
        console.error('Erreur lors de la mise à jour du ticket',error);
        res.status(500).json({error:'Erreur serveur'});
    }
})
// // Update - Mettre à jour un ticket
// router.patch('/ticket/:id', async(req,res)=>{
//     try{
//         const id= parseInt(req.params.id);
//         const update=req.body;
//         const ticket=await db.collection('tickets').updateOne({id},{$set:update}, {upsert:true});
//         res.status(200).json(ticket);
//     }catch(err){
//         console.log(err);
//         throw err;
//     }
// })
// Delete - Supprimer un ticket
router.delete('/:ticketNumber', async(req,res)=>{
  const {ticketNumber}=req.params;
    try{
  await Ticket.findOneAndDelete({ticketNumber});
  res.status(200).json({message:'Ticket supprimé avec succès'});
    }catch(err){
        console.error('Erreur lors de la suppression du ticket',error);
        res.status(500).json({error:'Erreur serveur'});
    }
})   


module.exports=router;
