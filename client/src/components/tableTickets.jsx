import Table from "react-bootstrap/Table";

import { useState } from "react";

export default function TableWithDynamicRows() {
  const [data, setData] = useState([
    {
      number: 301101101,
      date: "12/02/2024",
      statut: "En cours",
      dateCreated: "01/01/2024",
      dateModified: "01/01/2024",
      devis: "oui",
      origineDevis: "Devis atelier",
    },
    {
      number: 200589658,
      date: "13/02/2024",
      statut: "En cours",
      dateCreated: "01/01/2024",
      dateModified: "01/01/2024",
      devis: "oui",
      origineDevis: "Devis atelier",
    },
  ]);

  const addRow = () => {
    const newRow = {
      number: data.length + 1,
      date: "29/02/2024",
      statut: "En cours",
      dateCreated: "01/01/2024",
      dateModified: "01/01/2024",
      devis: "oui",
      origineDevis: "Devis atelier",
    };

    setData([...data, newRow]);
  };

  return (
    <div className="main p-3">
      <div className="text-center">
        <h1>Tickets</h1>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>NuméroCodeBarre</th>
              <th>Date livraison</th>
              <th>Statut</th>
              <th>Créé le</th>
              <th>Modifié le</th>
              <th>Devis</th>
              <th>Origine devis</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.number}>
                <td>{row.number}</td>
                <td>{row.date}</td>
                <td>{row.statut}</td>
                <td>{row.dateCreated}</td>
                <td>{row.dateModified}</td>
                <td>{row.devis}</td>
                <td>{row.origineDevis}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <button onClick={addRow}>Rajouter</button>
      </div>
    </div>
  );
}
