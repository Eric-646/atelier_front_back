import "./connexion.css";

export default function Connexion() {
  return (
    <div className="main p-3">
      <div className="text-center">
        <h1>Connexion</h1>
      </div>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Se connecter</h3>
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
            <p className="forgot-password text-right mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
