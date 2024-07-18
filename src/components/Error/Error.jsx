import React from 'react'
import { Link } from 'react-router-dom';
import './error.css';

function error() {
  return (

      <div className="error-page">
          <div>
              <h1>404</h1>
              <p>Oups! La page que vous demandez n'existe pas.</p>
          </div>
          <Link to="/">Retourner sur la page d'accueil</Link>
      </div>

  )
}

export default error