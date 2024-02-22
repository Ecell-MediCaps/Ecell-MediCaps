import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import {startup1,startup2, associate1,associate2,associate3,associate4,associate5} from './startupdata'
import HorizontalCard from '../components/HorizontalCard/HorizontalCard'
import OurSponsors from '../components/OurSponsors'
import { Parallax } from 'react-parallax';
import building from '../assets/images/building.jpg'
import cardimg from '../assets/images/cardimg.jpg'



const Archives = () => {
  return (
    <div  style={{width: "100vw"}} className="archives">
      <Parallax strength={800} bgImage={cardimg} bgImageAlt="building">
        <div className='speakers'>
            <h1>Past Speakers</h1>
            <Carousel />
        </div>
      </Parallax>
      <Parallax strength={500} bgImage={building} bgImageAlt="building">
        <div className='startup'>
          <h1>Start Up's</h1>
          <HorizontalCard {...startup2} />
          <></>
          <HorizontalCard {...startup1} />
        </div>
      </Parallax>
      <Parallax strength={800}  bgImage={cardimg} bgImageAlt="building">     
        <div className='associates'>
          <h1>Our Associates</h1>
          <HorizontalCard {...associate1} />
          <></>
          <HorizontalCard {...associate2} />
          <></>
          <HorizontalCard {...associate3} />
          <></>
          <HorizontalCard {...associate4} />
          <></>
          <HorizontalCard {...associate5} />
          </div>
        </Parallax> 
        <Parallax strength={500} bgImage={building} bgImageAlt="building">
          <div className='startup'>
            <div className='sponsors'>
              <h1>Past Sponsors</h1>
              <OurSponsors />
            </div>
          </div>
        </Parallax>
        </div>

  )
}

export default Archives
