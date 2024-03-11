import { useState } from "react";
import "./connexion.css";
// import { set } from "mongoose";
import axios from "axios";
// import api from "../api";

export default function Connexion() {
  let [authMode, setAuthMode] = useState("signin");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await api.post("/connexion", {
    //     username,
    //     email,
    //     password,
    //   });
    try {
      const response = await axios.post("http://localhost:3000/connexion", {
        username,
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (authMode === "signin") {
    return (
      <div className="main p-3">
        <div className="text-center">
          <h1>Authentification</h1>
        </div>
        <div className="Auth-form-container p-3">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Connexion</h3>
              <div className="text-center">
                Pas encore enregisté ?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Inscription
                </span>
              </div>
              <div className="form-group mt-3" onSubmit={handleSubmit}>
                <label>Adresse Email</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Entrer l'email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group mt-3" onSubmit={handleSubmit}>
                <label>Mot de passe</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Entrer le mot de passe"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Soumettre
                </button>
              </div>
              <p className="text-center mt-2">
                Forgot <a href="#">password?</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="main p-3">
      <div className="text-center">
        <h1>Inscription</h1>
      </div>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Inscription</h3>
            <div className="text-center">
              Déjà inscrit ?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Connexion
              </span>
            </div>
            <div className="form-group mt-3" onSubmit={handleSubmit}>
              <label>Nom</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Dupont"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group mt-3" onSubmit={handleSubmit}>
              <label>Adresse Email</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3" onSubmit={handleSubmit}>
              <label>Mot de passe</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Mot de passe"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Soumettre
              </button>
            </div>
            <p className="text-center mt-2">
              Retrouvez votre <a href="#">mot de passe</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
