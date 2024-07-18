import React from "react";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <header>
      <nav>
        <img src={logo} alt="Logo" />
        <ul>
          <li>
            <Link
              to={"/"}
              className={location.pathname === "/" ? "active" : ""}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to={"/a-propos"}
              className={location.pathname === "/about" ? "active" : ""}
            >
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
