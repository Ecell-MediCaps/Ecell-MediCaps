import React,{ useState, useEffect } from 'react'
import { FaInstagram, FaFacebook } from "react-icons/fa";
import './HorizontalCard.css'

const HorizontalCard = ({instagram, facebook, headline, description, img, alt, start}) => {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {
        window.removeEventListener("resize", handleResize);
        };
    }, []);

  return (
    <div className='horizontal-card'>
        <div className='horizontal-inner-card' style={{ flexDirection: width < 960 ? 'column' : start}}>
            <div className='card-image'>
                <img src={img} alt={alt} />
            </div>
            <div className='card-text'>
                    <div className='wrapper'>
                        <h2>{headline}</h2>
                        <a href={instagram} className="icon">
                            <FaInstagram  />
                        </a>
                        <a href={facebook} className="icon">
                            <FaFacebook  />
                        </a>
                    </div>
                <p>{description}</p>
            </div>
        </div>
      
    </div>
  )
}

export default HorizontalCard
