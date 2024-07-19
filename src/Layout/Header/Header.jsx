import React from "react";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import "./header.css";
export default function Header() {
  const location = useLocation();
  return (
    <header>
        <img src={logo} alt="Logo" className="logo" />
      <nav>
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
              to={"/about"}
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