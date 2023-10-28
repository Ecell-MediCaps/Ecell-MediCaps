import React, { useState } from 'react';
import Card from './Card';
import data from './data.json';
import IdeateImg from '../../assets/images/ideate.svg';
import InitiateImg from '../../assets/images/initiate.svg';
import InnovateImg from '../../assets/images/innovate.svg';
import './about.css';

const AboutUs = () => {
  const [jsonData] = useState(data);
  return (
    <div className='about'>
      <div className='aboutheader'>
        <h1>About Us</h1>
        <p>{jsonData.AboutUs.description}</p>
      </div>

      <div className='ourmission'>
        <div className='ourmissionheader'>
          <h1>Our Mission</h1>
          <p>{jsonData.OurMission.description}</p>
        </div>

        <div className='cardcomponent'>
          <Card image={IdeateImg} title={jsonData.Ideate.title} detail={jsonData.Ideate.detail} />
          <Card image={InitiateImg} title={jsonData.Initiate.title} detail={jsonData.Initiate.detail} />
          <Card image={InnovateImg} title={jsonData.Innovate.title} detail={jsonData.Innovate.detail} />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
