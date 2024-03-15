const express = require("express");
const router = express.Router();
const Ticket = require("../models/ticketModel");
const mongoose = require("mongoose");

// Create - Ajouter un ticket
router.post("/", async (req, res) => {
  try {
    console.log("Création du ticket :", req.body);
    const newTicket = new Ticket(req.body);
    await newTicket.save();
    res.status(201).json(newTicket);
  } catch (err) {
    console.log("Erreur lors de la création du tichet :",err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// Read - Récupérer tous les tickets
router.get("/", async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
    } catch (err) {
    console.log("Erreur lors de la récupération des tickets :",err);
    res.status(500).json({ error: "Erreur serveur" });
    }
});

router.get("/:ticketNumber", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const ticket = await db.collection("tickets").findOne({ number: id });
    res.status(200).json(ticket);
  } catch (err) {
    console.log(err);
    throw err;
  }
});

// Mettre à jour un ticket
router.patch("/:ticketNumber", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const update = req.body;
    const ticket = await db
      .collection("tickets")
      .updateOne({ id }, { $set: update }, { upsert: true });
    res.status(200).json(ticket);
  } catch (err) {
    console.log(err);
    throw err;
  }
});

// Delete - Supprimer un ticket
router.delete("/:ticketNumber", async (req, res) => {
  const { ticketNumber } = req.params;
  try {
    await Ticket.findOneAndDelete({ ticketNumber });
    res.status(200).json({ message: "Ticket supprimé avec succès" });
  } catch (err) {
    console.error("Erreur lors de la suppression du ticket", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

module.exports = router;
