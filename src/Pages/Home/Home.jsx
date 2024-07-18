
import React from "react";
import Banner from '../../Layout/Banner/banner';
import Card from "../../components/Card/Card";
import logements from "../../data/data.json";
import img from "../../assets/banner.png";
import './home.css';

export default function Home() {
  
  
  return (
    <main>
      <Banner
        image={img}
        text="Chez vous, partout et ailleurs"
        alt="Image de la bannière"
      />
      <section className="cardsContainer">
        {logements.map((location, index) => (
          <Card location={location} key={index} />
        ))}
      </section>
    </main>
  );
}



