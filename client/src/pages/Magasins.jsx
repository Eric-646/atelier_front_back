import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
// import { set } from "mongoose";

export default function Magasins() {
  const [ticketData, setTicketData] = useState([]);

  const fetchTickets = async () => {
    try {
      const response = await fetch("http://localhost:3000/ticket");
      const data = await response.json();
      setTicketData(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des tickets :", error);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

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

    fetch("http://localhost:3000/ticket", {
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

  const deleteRow = () => {
    const ticketNumberToDelete = formData.ticketNumber;
    const updatedData = ticketData.filter(
      (item) => item.ticketNumber !== ticketNumberToDelete
    );
    setTicketData(updatedData);

    fetch(`http://localhost:3000/ticket/${ticketNumberToDelete}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Ticket supprimé avec succès :", data);
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression du ticket :", error);
      });

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
  };

  const handleRowClick = (ticket) => {
    setFormData({
      ticketNumber: ticket.ticketNumber,
      dateDelivered: ticket.dateDelivered,
      delai: ticket.delai,
      statut: ticket.statut,
      categorie: ticket.categorie,
      dateCreated: ticket.dateCreated,
      dateModified: ticket.dateModified,
      devis: ticket.devis,
      origineDevis: ticket.origineDevis,
    });
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
        </Button>{" "}
        <Button variant="danger" type="button" onClick={deleteRow}>
          Supprimer
        </Button>
        <div className="table-container ">
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
                <tr key={row.ticketNumber} onClick={() => handleRowClick(row)}>
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
        </div>
      </Form>
    </div>
  );
}
