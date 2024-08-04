import React from "react";
import { useParams } from "react-router-dom"; // Importer useParams pour extraire les paramètres de l'URL
import Card from "../../components/Card/Card";
import Collapse from '../../components/Collapse/Collapse'; 
import logements from "../../data/data.json"; 
import { SlideShow } from '../../components/SlideShow/SlideShow';
import LogementHeader from "../../components/LogementHeader/LogementHeader"; 
import Error from "../Error/Error"; 
import './logement.css';

export default function Logement() {
    const { id } = useParams(); // Utiliser useParams pour extraire l'ID de l'URL
    const chooseAppartment = logements.find(data => data.id === id); // Rechercher le logement correspondant à l'ID

    if (!chooseAppartment) {
        return <Error />; // Si aucun logement n'est trouvé, afficher le composant Error
    }

    return (
        <main>
            <div className='logement-page'>
                {chooseAppartment && <SlideShow pictures={chooseAppartment.pictures} numberPhotos={chooseAppartment.pictures.length} />}
                <LogementHeader chooseAppartment={chooseAppartment} />
                <div className='logement__description__collapse'>
                    <Collapse title="Description" content={chooseAppartment.description} />
                    <Collapse title="Équipements" content={chooseAppartment.equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li> // Utiliser equipment au lieu de equipments pour correspondre à la variable
                    ))} />
                </div>
            </div>
        </main>
    );
}
