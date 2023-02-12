import React from "react";
import { FaMapMarkedAlt, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/images/E-Cell_white.png"
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='col'>
                    <img className="col" src={logo} alt="logo"/>
                    <p>Copyright &#169; {new Date().getFullYear()} E-cell MediCaps</p>
                    <p>Website developed by Himadri Pathak</p>
                </div>
                <div className='social col'>
                    <a href="https://www.linkedin.com/company/ecell-medi-caps/?originalSubdomain=in" className="icon">
                        <FaLinkedin  />
                    </a>

                    <a href="https://www.instagram.com/ecell.medicaps/" className="icon">
                        <FaInstagram  />
                    </a>

                    <a href="https://goo.gl/maps/febYS8gU1YjHS7hb8" className="icon">
                        <FaMapMarkedAlt  />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
