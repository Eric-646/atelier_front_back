import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import Sidebar from "./components/sidebar";
import Ticket from "./pages/Ticket";
import PageError from "./components/pageError";
import Profil from "./pages/Profil";
import Connexion from "./pages/Authentification/Connexion";
import Inscription from "./pages/Authentification/Inscription";
import Deconnexion from "./pages/Authentification/Deconnexion";
import Tickets from "./pages/Tickets";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
