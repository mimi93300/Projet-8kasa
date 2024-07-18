import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import './card.css';

export default function Card({ location }) {
  return (
    <article className="card">
    <Link to={"/logement/" + location.id} key={"" + location.id}>
        <img src={location.cover} alt={location.title} />
        <h2>{location.title}</h2>
    </Link>
    </article>
  );
}

Card.propTypes = {
  location: PropTypes.shape({
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
