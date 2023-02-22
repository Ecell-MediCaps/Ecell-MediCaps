import React, {useState} from 'react'
import {FaArrowRight} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Register = () => {
  const [active, setActive] = useState("null")
  return (
    <div className='register'>
      <div className='register-overlay'>

        {active === "null" && <div className='register-links'>
            <button className='register-btn' onClick={() => setActive("MediCaps_University")}>MediCaps University<span> <FaArrowRight/></span></button>
            <button className='register-btn' onClick={() => setActive("Other_University")}>Other University<span><FaArrowRight/></span></button>
        </div>
        }
        
        {active === "MediCaps_University" &&
          <div className='register-links'>
            <Link className='register-btn' to="https://forms.gle/ieqmHnHWR7FVReaUA" target={'_blank'}>Individual Pass<span><FaArrowRight/></span></Link>
            <Link className='register-btn' to="https://forms.gle/7P9svZbd14CvNVXN8" target={'_blank'}>Group Pass<span><FaArrowRight/></span></Link>
            <button className='register-btn' onClick={() => setActive("null")}>Go Back<span><FaArrowRight/></span></button>
          </div>
        }

        {active === "Other_University" &&
          <div className='register-links'>
            <Link className='register-btn' to="https://forms.gle/YwZeX2LpdU6eizC46" target={'_blank'}>Individual Pass<span><FaArrowRight/></span></Link>
            <Link className='register-btn' to="https://forms.gle/7JXWb3NoAdSCwc7z9" target={'_blank'}>Group Pass<span><FaArrowRight/></span></Link>
            <button className='register-btn' onClick={() => setActive("null")}>Go Back<span><FaArrowRight/></span></button>
          </div>
        }
      </div>
    </div>
  )
}

export default Register
