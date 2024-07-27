import React from 'react';
import './logementHeader.css';

function LogementHeader({ chooseAppartment }) {


    const name = chooseAppartment.host.name.split(' ');//nom de l'hôte split('') sert a diviser le nom en 2


    return ( //le titre, l'emplacement, les balises, le nom de l'hôte, la photo de l'hôte et la notation 
        <section className="apartment__header">
            <div className='apartment__title'>
                <h1>{chooseAppartment.title}</h1>
                <p>{chooseAppartment.location}</p>
                <div className="apartment__tags">
                    {chooseAppartment.tags.map((tag) => (//map pour itérer sur le tableau de balises et créer un élément <span> pour chaque balise.
                        <span key={tag}>{tag}</span>
                    ))}
                </div>
            </div>

            <div className="apartment__owner">
                <div className="apartment__owner__details">
                    <h3>
                        <span>{name[0]}</span>
                        <span>{name[1]}</span>
                    </h3>
                    <div className="apartment__owner__badge">
                        <img src={chooseAppartment.host.picture} />
                    </div>
                </div>
                <div className='apartment__owner__stars'>
                    {[1, 2, 3, 4, 5].map((num) => (//Pour chaque nombre, un élément <span> est créé "on" est ajoutée si 
                        //la notation du propriétaire est supérieure ou égale à ce nombre
                        <span key={num} className={chooseAppartment.rating >= num ? "on" : ""}>★</span>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default LogementHeader
