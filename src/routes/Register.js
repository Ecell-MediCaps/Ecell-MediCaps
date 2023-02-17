import React from 'react'
import {FaArrowRight} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='register'>
      <div className='register-overlay'>
        <div className='register-links'>
          <Link className='register-btn' to="https://forms.gle/ieqmHnHWR7FVReaUA" target={'_blank'}>Individual Pass<span><FaArrowRight/></span></Link>
          <Link className='register-btn' to="https://forms.gle/7P9svZbd14CvNVXN8" target={'_blank'}>Group Pass<span><FaArrowRight/></span></Link>
        </div>
      </div>
    </div>
  )
}

export default Register
