import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
// import "./App.css";
import Sidebar from "./components/sidebar";
import Ticket from "./pages/Ticket";
import PageError from "./components/pageError";
import Profil from "./pages/Profil";
import Connexion from "./pages/Authentification/Connexion";
import Inscription from "./pages/Authentification/Inscription";
import Deconnexion from "./pages/Authentification/Deconnexion";
import Tickets from "./pages/Tickets";
import Notification from "./pages/Notification";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar />,
    errorElement: <PageError />,

    children: [
      { path: "/tickets", element: <Tickets /> },
      { path: "ticket/:id", element: <Ticket /> },
      { path: "profil", element: <Profil /> },
      { path: "connexion", element: <Connexion /> },
      { path: "inscription", element: <Inscription /> },
      { path: "deconnexion", element: <Deconnexion /> },
      { path: "notifications", element: <Notification /> },
    ],
  },
]);

// function App() {

const App = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('/api/data')
      .then((response) => {
        setData(response.data.message);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données', error);
      });
  }, []); 



  return (
    <div className="App">
      <header className="App-header">
        <h1>{data}</h1>
      </header>
      <RouterProvider router={router} />;
    </div>
  );

}

export default App;
