


// const createTicket = () => {
//     // Construire l'objet de données à partir du formulaire
//     const newTicket = {
//         ticketNumber: formData.ticketNumber,
//         dateDelivered: formData.dateDelivered,
//         delai: formData.delai,
//         statut: formData.statut,
//         categorie: formData.categorie,
//         dateCreated: formData.dateCreated,
//         dateModified: formData.dateModified,
//         devis: formData.devis,
//         origineDevis: formData.origineDevis,
//     };

//     // Envoyer les données au serveur (utilisez Axios, Fetch, ou toute autre méthode)
//     // Remplacez 'YOUR_SERVER_URL' par l'URL réelle de votre serveur
//     fetch('YOUR_SERVER_URL/api/createTicket', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newTicket),
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Ticket créé avec succès :', data);
//         // Mettre à jour l'état ou effectuer d'autres actions si nécessaire
//     })
//     .catch(error => {
//         console.error('Erreur lors de la création du ticket :', error);
//     });
// };
