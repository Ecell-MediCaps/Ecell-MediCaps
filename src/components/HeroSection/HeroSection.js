import React from 'react'
import { Link } from "react-router-dom";
import videoBg from '../../assets/videos/Network.mp4'
import './HeroSection.css'
import Typewriter from 'typewriter-effect';
import hero from '../../assets/images/hero.gif'
import building from '../../assets/images/building.png'


const HeroSection = () => {
  
  return (
    <div className='main'>
      <div className='overlay'>
        <img src={building} alt='buildings' />
      </div>
        <video src={videoBg}  autoPlay loop muted/>
        <div className='herowrapper'>
          <div className='content'>
            <h3 className='title'>Welcome To</h3>
            <h1>
              <Typewriter options={{
                autoStart: true,
                loop: true,
                delay: 60,
                strings: [
                  "ENTREPRENEURSHIP Cell"
                ],
              }} />
            </h1>
            <h2 className='titleTwo'>Medi-Caps University</h2>
            <h3 className='titleThree'>
              <span>Ideate  &#10022;  </span>
              <span>Initiate  &#10022;  </span>
              <span>Innovate</span>
            </h3>
            <Link to="/paymentform" target="_blank">
              <button className='btn'>Register Now</button>
            </Link>
          </div>
          <div className='heroImg'>
            <img src={hero} alt='hero' />
          </div>
        </div>
    </div>
  )
}

export default HeroSection

