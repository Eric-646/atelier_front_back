import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Notification() {
  return (
    <div className="main p-3">
      <div className="text-center">
        <h1>Notification</h1>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Numéro de ticket</Form.Label>
          <Form.Control type="number" placeholder="Entrer un numéro SAV" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDelai">
          <Form.Label>Délai</Form.Label>
          <Form.Control type="entier" placeholder="Delai" />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
        <Form.Group className="mb-3" controlId="formBasicSelect">
          <Form.Label>Catégorie</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Choisir une catégorie</option>
            <option value="1">Horlogerie</option>
            <option value="2">Bijoux</option>
            <option value="3">Gravure</option>
            <option value="4">Autres</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicSelect">
          <Form.Label>Statut</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Choisir un statut</option>
            <option value="1">Direct atelier</option>
            <option value="2">Diagnostic</option>
            <option value="3">Garantie</option>
            <option value="4">Irréparable</option>
            <option value="5">Non traitable atelier</option>
            <option value="6">Pièces en commande</option>
            <option value="7">Direct atelier retouche</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Valider
        </Button>
      </Form>
    </div>
  );
}
