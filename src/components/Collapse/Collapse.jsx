// Collapse.jsx
import React, { useState } from 'react';
import "./collapse.css";

const Collapse = (props) => {
  const [isShow, setIsShow] = useState(false); // isShow gère l'état d'affichage du contenu (caché ou visible).

  const showContent = () => { // showContent est appelée lorsqu'on clique sur l'en-tête, elle inverse l'état de isShow entre true et false.
    setIsShow(!isShow);
  };

  const contentClass = (isShow ? "visible" : "hidden") + " collapse__content";
  const chevronClass = (isShow ? "fa-chevron-up" : "fa-chevron-down") + " fas";
  // détermine les classes CSS en fonction de l'état de isShow.

  return (
    <div className='collapse__panel'>
      <p className='collapse__header' onClick={showContent}>
        <span>{props.title}</span>
        <i className={chevronClass}></i>
      </p>
      {isShow && <p className={contentClass}>{props.content}</p>}
      {/* Si isShow est vrai, un autre paragraphe avec la classe CSS collapse__content est rendu, affichant le contenu (props.content). */}
    </div>
  );
};

export default Collapse;
