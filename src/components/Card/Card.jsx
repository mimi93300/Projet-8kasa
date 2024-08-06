import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import './card.css';

export default function Card({ location }) {
  return (
    <Link to={"/logement/" + location.id} className="card">
      <img src={location.cover} alt={location.title} className="card__image" />
      <h2 className="card__title">{location.title}</h2>
    </Link>
  );
}

Card.propTypes = {
  location: PropTypes.shape({
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
