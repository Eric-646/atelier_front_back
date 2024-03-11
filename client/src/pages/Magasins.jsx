import { Form } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

export default function Magasins() {
  const [ticketData, setTicketData] = useState([
    {
      ticketNumber: 301101101,
      dateDelivered: "",
      delai: "12 jours",
      statut: "En cours",
      categorie: "Horlogerie",
      dateCreated: "01/01/2024",
      dateModified: "01/01/2024",
      devis: "oui",
      origineDevis: "Devis atelier",
    },
  ]);

  const [formData, setFormData] = useState({
    ticketNumber: "",
    date: "",
    delai: "",
    statut: "",
    categorie: "",
    dateCreated: "",
    dateModified: "",
    devis: "",
    origineDevis: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const createTicket = () => {
    const newTicket = {
      ticketNumber: formData.ticketNumber,
      dateDelivered: formData.dateDelivered,
      delai: formData.delai,
      statut: formData.statut,
      categorie: formData.categorie,
      dateCreated: formData.dateCreated,
      dateModified: formData.dateModified,
      devis: formData.devis,
      origineDevis: formData.origineDevis,
    };

    fetch("http://localhost:3000/api/createTicket", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTicket),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Ticket créé avec succès :", data);
      })
      .catch((error) => {
        console.error("Erreur lors de la création du ticket :", error);
      });
  };
  const addRow = () => {
    const currentDate = new Date();
    const formattedDate =
      currentDate.getDate() +
      "/" +
      (currentDate.getMonth() + 1) +
      "/" +
      currentDate.getFullYear();

    const newRow = {
      ticketNumber: formData.ticketNumber,
      dateDelivered: "",
      delai: "",
      statut: "En cours",
      categorie: "",
      dateCreated: formattedDate,
      dateModified: "",
      devis: "",
      origineDevis: "",
    };

    setTicketData([...ticketData, newRow]);

    setFormData({
      ticketNumber: "",
      dateDelivered: "",
      delai: "",
      statut: "",
      categorie: "",
      dateCreated: "",
      dateModified: "",
      devis: "",
      origineDevis: "",
    });

    createTicket();
  };

  return (
    <div className="main p-3">
      <div className="text-center">
        <h1>Magasins</h1>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Numéro de ticket</Form.Label>
          <Form.Control
            type="number"
            placeholder="Entrer un numéro SAV"
            name="ticketNumber"
            value={formData.ticketNumber}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="button" onClick={addRow}>
          Valider
        </Button>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>NuméroCodeBarre</th>
              <th>Date livraison</th>
              <th>Delai</th>
              <th>Statut</th>
              <th>Catégorie</th>
              <th>Créé le</th>
              <th>Modifié le</th>
              <th>Devis</th>
              <th>Origine devis</th>
            </tr>
          </thead>
          <tbody>
            {ticketData.map((row) => (
              <tr key={row.ticketNumber}>
                <td>{row.ticketNumber}</td>
                <td>{row.dateDelivered}</td>
                <td>{row.delai}</td>
                <td>{row.statut}</td>
                <td>{row.categorie}</td>
                <td>{row.dateCreated}</td>
                <td>{row.dateModified}</td>
                <td>{row.devis}</td>
                <td>{row.origineDevis}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Form>
    </div>
  );
}
