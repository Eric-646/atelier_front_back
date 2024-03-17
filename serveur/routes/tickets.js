const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Ticket = require("../models/ticketModel");
const mongoose = require("mongoose");

const validateTicketNumber = [
  body("ticketNumber")
    .notEmpty()
    .withMessage("Le numéro de ticket est obligatoire")
    .isNumeric()
    .withMessage("Le numéro de ticket doit être un nombre")
    .isLength({ min: 9, max: 9 })
    .withMessage("Le numéro de ticket doit comporter exactement 9 chiffres"),
];

// Create - Ajouter un ticket
router.post("/", validateTicketNumber, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, "0");
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const year = currentDate.getFullYear();
    const date = `${day}/${month}/${year}`;

    const newTicket = new Ticket(req.body);
    newTicket.dateCreated = date;
    await newTicket.save();
    res.status(201).json(newTicket);
  } catch (err) {
    console.log("Erreur lors de la création du tichet :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// Read - Récupérer tous les tickets
router.get("/", async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (err) {
    console.log("Erreur lors de la récupération des tickets :", err);
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
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, "0");
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const year = currentDate.getFullYear();
    const date = `${day}/${month}/${year}`;

    const ticketNumber = req.params.ticketNumber;

    const update = {
    ...req.body,
    dateModified: date
  };
  
    const ticket = await Ticket.findOneAndUpdate({ ticketNumber }, update, {
      new: true});
      if (!ticket) {
        return res.status(404).json({ message: "Ticket non trouvé" });
      }
    
    res.status(200).json(ticket);
  } catch (err) {
    console.log("Erreur lors de la mise à jour du ticket", err);
    res.status(500).json({ error: "Erreur serveur" });
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
