import React from "react";
import { FaMapMarkedAlt, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/images/e_summit.png"
import "./Footer.css"
const Footer = () => {
    return (
        <div className="footer-distributed">
            <div className="footer-left">
                <div className="col">
                    <img className="col" src={logo} alt="logo" style={{ width: '15rem' }} />
                    <div className="copy">
                        <p style={{ fontSize: 'small', display: 'block', color: 'aliceblue' }}>
                            Copyright © 2023 E-cell MediCaps
                        </p>
                        <p style={{ fontSize: '15px',marginTop:'2px', color: '#92999f' }}>
                            Website developed by E-CELL
                        </p>
                    </div>
                </div>
                <p className="footer-links">
                    <a className="link-1" href="/">Home</a>
                    <a href="/esummit">E-summit</a>
                    <a href="/contact">Contact Us</a>
                    <a href="/register">Register Now</a>
                </p>
            </div>

            <div className="footer-center"></div>

            <div className="footer-right">
                <p className="footer-company-about">
                    E-cell, founded in 2008, empowers students with entrepreneurial
                    skills, fostering innovation, and prepping them for industrial
                    challenges. Established as a club in 2018.
                </p>
                <div className="footer-icons">
                    <a href="https://goo.gl/maps/febYS8gU1YjHS7hb8"><FaMapMarkedAlt /></a> 
                    <a href="https://www.instagram.com/ecell.medicaps/"><FaInstagram /></a> 
                    <a href="https://www.linkedin.com/company/ecell-medi-caps/?originalSubdomain=in"><FaLinkedin /></a> 
                    {/* Add other icons similarly */}
                </div>
            </div>
        </div>
    );
}

export default Footer;
