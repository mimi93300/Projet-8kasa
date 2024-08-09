import React, { useState } from 'react';
import './collapse.css';

const Collapse = (props) => {
  const [isShow, setIsShow] = useState(false);

  const toggleContent = () => {
    setIsShow(!isShow);
  };

  const contentClass = isShow ? "collapse__content visible" : "collapse__content hidden";
  const chevronClass = isShow ? "chevron rotate" : "chevron";

  return (
    <div className='collapse__panel'>
      <p className='collapse__header' onClick={toggleContent}>
        <span>{props.title}</span>
        <i className={`fas fa-chevron-up ${chevronClass}`}></i>
      </p>
      <div className={contentClass}>
        {Array.isArray(props.content) ? (
          <ul>
            {props.content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{props.content}</p>
        )}
      </div>
    </div>
  );
};

export default Collapse;
