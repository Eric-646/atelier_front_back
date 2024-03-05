import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

import "./sidebar.css";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="wrapper">
        <aside id="sidebar" className={isExpanded ? "expand" : ""}>
          <div className="d-flex">
            <button
              className="toggle-btn"
              type="button"
              onClick={handleToggleClick}
            >
              <i className="lni lni-grid-alt"></i>
            </button>
            <div className="sidebar-logo">
              <NavLink to="/">SAV Atelier Aélys</NavLink>
            </div>
          </div>
          <ul className="sidebar-nav">
            <li className="sidebar-item">
              <NavLink to="/profil" className="sidebar-link">
                <i className="lni lni-user"></i>
                <span>Profil</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink to="/tickets" className="sidebar-link">
                <i className="lni lni-ticket"></i>
                <span>Tickets</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <a
                href="#"
                className="sidebar-link collapsed has-dropdown"
                data-bs-toggle="collapse"
                data-bs-target="#auth"
                aria-expanded="false"
                aria-controls="auth"
              >
                <i className="lni lni-protection"></i>
                <span>Authentification</span>
              </a>
              <ul
                id="auth"
                className="sidebar-dropdown list-unstyled collapse"
                data-bs-parent="#sidebar"
              >
                <li className="sidebar-item">
                  <NavLink to="/connexion" className="sidebar-link">
                    Connexion
                  </NavLink>
                </li>
                <li className="sidebar-item">
                  <NavLink to="/inscription" className="sidebar-link">
                    Inscription
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="sidebar-item">
              <a
                href="#"
                className="sidebar-link collapsed has-dropdown"
                data-bs-toggle="collapse"
                data-bs-target="#multi"
                aria-expanded="false"
                aria-controls="multi"
              >
                <i className="lni lni-layout"></i>
                <span>Ticket</span>
              </a>
              <ul
                id="multi"
                className="sidebar-dropdown list-unstyled collapse"
                data-bs-parent="#sidebar"
              >
                <li className="sidebar-item">
                  <a
                    href="#"
                    className="sidebar-link collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#multi-two"
                    aria-expanded="false"
                    aria-controls="multi-two"
                  >
                    Rôle
                  </a>
                  <ul
                    id="multi-two"
                    className="sidebar-dropdown list-unstyled collapse"
                  >
                    <li className="sidebar-item">
                      <NavLink to="/magasins" className="sidebar-link">
                        Magasins
                      </NavLink>
                    </li>
                    <li className="sidebar-item">
                      <NavLink to="/atelier" className="sidebar-link">
                        Atelier
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="sidebar-item">
              <NavLink to="/notifications" className="sidebar-link">
                <i className="lni lni-popup"></i>
                <span>Notification</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <i className="lni lni-cog"></i>
                <span>Setting</span>
              </a>
            </li>
          </ul>
          <div className="sidebar-footer">
            <NavLink to="/deconnexion" className="sidebar-link">
              <i className="lni lni-exit"></i>
              <span>Deconnexion</span>
            </NavLink>
          </div>
        </aside>
        <div className="main p-3">
          <Outlet />
        </div>
      </div>
    </>
  );
}
