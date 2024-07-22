import React, { useState } from 'react';
import './slideShow.css';

export function SlideShow(props) {

    const pictures = props.pictures;

    const [currentPicture, setCurrentPicture] = useState(0);//useState pour suivre l'index de l'image actuellement
    // affichée dans le carrousel(currentPicture).

    const getClassName = (index) => {
        if (index === currentPicture) return "show";
        return "";
    };//getClassName renvoie la classe "show" si l'index fourni correspond à l'index de l'image actuellement affichée

    // Flèche suivante
    const moveToNext = () => {
        setCurrentPicture((currentPicture + 1) % pictures.length);
    };

    // Flèche précédente et retour à la photo 1
    const moveToPrevious = () => {
        const newCurrentPicture = currentPicture - 1;
        if (newCurrentPicture < 0) {
            setCurrentPicture(pictures.length - 1)
            return;
        }
        setCurrentPicture(currentPicture - 1);
    };

    const isPicturesOk = () => {
        return pictures && pictures.length > 0;
    };

    // Carousel ou image par défaut
    const CarouselorImgDefault = () => {
        if (!isPicturesOk()) {
            return
        }
        return pictures.map((picture, index) => (
            <img key={picture} src={picture} alt="" className={getClassName(index)}></img>
        ));
    };//rend soit le caroussel des images fournies (pictures),


    return (

        <div className='image__banner_img'>
            <div className="image__container">
                {/* Condition carousel: nombre de photos et flèches */}
                {CarouselorImgDefault()}
            </div>
            {isPicturesOk() &&
                <>
                    {props.numberPhotos > 1 ? <button id='button' className='btn btn-previous' onClick={moveToPrevious}>
                        { /*Lorsqu'elle est cliquée, elle appelle la fonction moveToPrevious pour passer à l'image précédente.*/}
                        <i className='fas fa-chevron-left'></i>
                    </button> : <span></span>}
                    {/* pour créer des espaces vides lorsque certaines conditions ne sont pas remplies, afin de maintenir la mise en page.*/}
                    {props.numberPhotos > 1 ? <span className='slide__counter'>
                        {currentPicture + 1} / {pictures.length}
                        {/*Affiche le numéro de l'image actuelle et le nombre total d'images*/}
                    </span> : <span></span>}

                    {props.numberPhotos > 1 ? <button className='btn btn-next' onClick={moveToNext}>
                        { /*Lorsqu'elle est cliquée, elle appelle la fonction moveToPrevious pour passer à l'image suivante.*/}
                        <i className='fas fa-chevron-right'></i>
                    </button> : <span></span>}
                </>
            }
        </div>
    )
}


