import React, { useState } from 'react';
import './card2.css'

const Card2 = (props) => {
    const [isActive, setActive] = useState(false);

  const handleClick =() => {
    setActive(!isActive);
  }


  return (
    <div className='card2'>
        <div className= {`card__inner ${isActive ? "is-flipped" : ""}`}onClick={handleClick}>

            <div className='card__face card__face--front'>
                <img src={props.image} className='img' alt={props.title}/>
                <h3>{props.date}</h3>
                <h2>{props.title}</h2>
            </div>

            <div className='card__face card__face--back'>
                <div className='card__content'>
                    <div className='card__header'>
                        <img src={props.image} className='img' alt={props.title}/>
                        <h3>{props.date}</h3>

                    </div>
                    <div className='card__body'>
                        <p>{props.details}</p>
                    </div>
                </div>
            </div>
        {/* Your card content goes here */}
        </div>
    </div>
  );
};

export default Card2;