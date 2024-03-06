import { useState } from "react";
import "./authentification.css";

export default function Authentification() {
  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
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
              <div className="form-group mt-3">
                <label>Adresse Email</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Entrer l'email"
                />
              </div>
              <div className="form-group mt-3">
                <label>Mot de passe</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Entrer le mot de passe"
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
            <div className="form-group mt-3">
              <label>Nom</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Dupont"
              />
            </div>
            <div className="form-group mt-3">
              <label>Adresse Email</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
              />
            </div>
            <div className="form-group mt-3">
              <label>Mot de passe</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Mot de passe"
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
