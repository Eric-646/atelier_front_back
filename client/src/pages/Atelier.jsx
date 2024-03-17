import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
// import TableTicketList from "../components/TableTicketList";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import { use } from "../../../serveur/routes/home";
// import { set } from "mongoose";
// import { set } from "mongoose";
import axios from "axios";
// import { set } from "mongoose";
// import tickets from "../../../serveur/models/tickets";

export default function Atelier() {
  const [ticketData, setTicketData] = useState([]);
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

  useEffect(() => {
    if (!formData.dateModified) {
    setFormData((prevState) => ({
      ...prevState,
      dateModified: new Date().toLocaleDateString(),
    }));
  }
  }, [formData]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get("http://localhost:3000/ticket");
        setTicketData(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des tickets :", error);
      }
    };

    fetchTickets();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const updateTicket = async () => {
    try {
      await axios.patch(
        `http://localhost:3000/ticket/${formData.ticketNumber}`,formData);
      setTicketData(ticketData.map((ticket) =>
          ticket.ticketNumber === formData.ticketNumber ? formData : ticket
        )
      );
      resetForm();
    } catch (error) {
      console.error("Erreur lors de la mise à jour du ticket :", error);
    }
  };

  const selectRow = (row) => {
    setFormData(row);
  };

  // const initialformData = {
  //   ticketNumber: "",
  //   date: "",
  //   delai: "",
  //   statut: "",
  //   categorie: "",
  //   dateCreated: "",
  //   dateModified: "",
  //   devis: "",
  //   origineDevis: "",
  // };

  // const resetForm = () => {
  //   setFormData(initialformData);
  // };

  const resetForm = () => {
    setFormData((prevState) => ({
      ...prevState,
      ticketNumber: "",
      date: "",
      delai: "",
      statut: "",
      categorie: "",
      dateCreated: "",
      dateModified: new Date().toLocaleDateString(),
      devis: "",
      origineDevis: "",
    }));
  };

  const handleselectchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //   const addDays = (date, days) => {
  //     const newDate = new Date(date);
  //     newDate.setDate(newDate.getDate() + days);
  //     return newDate;
  //   };

  //   const addRow = () => {
  //     const currentDate = new Date();
  //     const formattedDate =
  //       currentDate.getDate() +
  //       "/" +
  //       (currentDate.getMonth() + 1) +
  //       "/" +
  //       currentDate.getFullYear();

  //       const modifiedDate = addDays(currentDate,parseInt(formData.delai));
  //       const formattedModifiedDate =
  //       modifiedDate.getDate() +
  //       "/" +
  //       (modifiedDate.getMonth() + 1) +
  //       "/" +
  //       modifiedDate.getFullYear();

  //   const newRow = {
  //     ticketNumber: formData.ticketNumber,
  //     dateDelivered: formattedModifiedDate,
  //     delai: formData.delai,
  //     statut: formData.statut,
  //     categorie: formData.categorie,
  //     dateCreated: "01/01/2024",
  //     dateModified: formattedDate,
  //     devis: "oui",
  //     origineDevis: "Devis atelier",
  //   };
  //   setTicketData([...ticketData, newRow]);

  //   setFormData({
  //     ticketNumber: "",
  //     dateDelivered: "",
  //     delai: "",
  //     statut: "",
  //     categorie: "",
  //     dateCreated: "",
  //     dateModified: "",
  //     devis: "",
  //     origineDevis: "",
  //   });
  // }
  // const selectRow = (row) => {
  //   setFormData(row);
  // }

  // const initialformData = {
  //   ticketNumber: "",
  //   date: "",
  //   delai: "",
  //   statut: "",
  //   categorie: "",
  //   dateCreated: "",
  //   dateModified: "",
  //   devis: "",
  //   origineDevis: "",
  // };

  // const updateRow = () => {
  //   const isRowExists = ticketData.some((item) => item.ticketNumber === formData.ticketNumber);
  //   if (isRowExists) {
  //     const updatedData = ticketData.map((item) =>
  //        item.ticketNumber === formData.ticketNumber ? formData : item
  //     );
  //     setTicketData(updatedData);
  //   } else {
  //     setTicketData([...ticketData, formData]);
  //   }
  //   setFormData(initialformData);
  // }

  // const deleteRow = () => {
  //   const updatedData = ticketData.filter((item) => item.ticketNumber !== formData.ticketNumber);
  //   setTicketData(updatedData);
  //   setFormData(initialformData);
  // };

  return (
    <div className="main p-3">
      <div className="text-center">
        <h1>Atelier</h1>
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
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDelai">
          <Form.Label>Délai</Form.Label>
          <Form.Control
            type="entier"
            placeholder="Delai"
            name="delai"
            value={formData.delai}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicSelect">
          <Form.Label>Catégorie</Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="categorie"
            value={formData.categorie}
            onChange={handleselectchange}
          >
            <option>Choisir une catégorie</option>
            <option value="horlogerie">Horlogerie</option>
            <option value="Bijoux">Bijoux</option>
            <option value="Gravure">Gravure</option>
            <option value="Autres">Autres</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicSelect">
          <Form.Label>Statut</Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="statut"
            value={formData.statut}
            onChange={handleselectchange}
          >
            <option>Choisir un statut</option>
            <option value="Direct atelier">Direct atelier</option>
            <option value="Diagnostic">Diagnostic</option>
            <option value="Garantie">Garantie</option>
            <option value="Irréparable">Irréparable</option>
            <option value="Non traitable atelier">Non traitable atelier</option>
            <option value="Pièces en commande">Pièces en commande</option>
            <option value="Direct atelier retouch">
              Direct atelier retouche
            </option>
            <option value="En cours">En cours</option>
          </Form.Select>
        </Form.Group>
        {/* <Button variant="primary" type="button" onClick={addRow}>
          Valider
        </Button>{" "} */}
        <Button variant="info" type="button" onClick={updateTicket}>
          Modifier
        </Button>{" "}
        {/* <Button variant="danger" type="button" onClick={deleteRow}>
          Supprimer
        </Button> */}
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
              <tr key={row.ticketNumber} onClick={() => selectRow(row)}>
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
