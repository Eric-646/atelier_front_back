import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "./components/sidebar";
import Ticket from "./pages/Ticket";
import PageError from "./components/pageError";
import Profil from "./pages/Profil";
import Deconnexion from "./pages/Authentification/Deconnexion";
import Connexion from "./components/connexion";
import Tickets from "./pages/Tickets";
import Atelier from "./pages/Atelier";
import Magasins from "./pages/Magasins";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar />,
    errorElement: <PageError />,

    children: [
      { path: "/tickets", element: <Tickets /> },
      { path: "ticket/:id", element: <Ticket /> },
      { path: "profil", element: <Profil /> },
      { path: "deconnexion", element: <Deconnexion /> },
      { path: "atelier", element: <Atelier /> },
      { path: "magasins", element: <Magasins /> },
      { path: "connexion", element: <Connexion /> },
    ],
  },
]);

// function App() {

const App = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("/api/data")
      .then((response) => {
        setData(response.data.message);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données", error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{data}</h1>
      </header>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
