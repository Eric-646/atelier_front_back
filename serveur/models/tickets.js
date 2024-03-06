const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema({
    ticketNumber: { type: Number, required: true, unique: true},
    dateDelivered: { type: String, required: false },
    delai: { type: String, required: false },
    statut: { type: String, required: false },
    categorie: { type: String, required: false },
    dateCreated: { type: String, required: false },
    dateModified: { type: String, required: true },
    devis: { type: String, required: false },
    origineDevis: { type: String, required: false }
});

module.exports = mongoose.model('Ticket', ticketSchema);