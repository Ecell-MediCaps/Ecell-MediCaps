import React, {useState} from 'react'
import Card from './Card'
import data from './data.json'
import Ideate from '../../assets/images/ideate.svg'
import Initiate from '../../assets/images/initiate.svg'
import Innovate from '../../assets/images/innovate.svg'
import './about.css'


const AboutUs = () => {
  const [jsonData] = useState(data);
  return (
    <div className='about'>
      <div className='aboutheader'>
        <h1>About Us</h1>
        <p>{jsonData.AboutUs.description}</p>
      </div>
      

      <div className='cardcomponent'>
        <Card image={Ideate} title={jsonData.Ideate.title} detail={jsonData.Ideate.detail}/>

        <Card image={Initiate} title={jsonData.Initiate.title} detail={jsonData.Initiate.detail}/>

        <Card image={Innovate} title={jsonData.Innovate.title} detail={jsonData.Innovate.detail}/>
      </div>
      
    </div>
  )
}

export default AboutUs
