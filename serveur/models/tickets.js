const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema({
    number: { type: Number, required: true },
    dateDelivered: { type: Date, required: false },
    statut: { type: String, required: true },
    dateCreated: { type: Date, required: true },
    dateModified: { type: String, required: true },
    devis: { type: Boolean, required: false },
    origineDevis: { type: String, required: false }
});

module.exports = mongoose.model('Ticket', ticketSchema);