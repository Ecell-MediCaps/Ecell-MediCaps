import React from 'react'
import './card.css'



const Card = (props) => {
  return (
    <div className='aboutcard'>
        <div className='aboutimgbox'>
            <img src={props.image} alt={props.title}/>
        </div>

        <div className="detail">
        <h2>{props.title}</h2>
        <p>{props.detail}</p>
      </div>  
    </div>
  )
}

export default Card
