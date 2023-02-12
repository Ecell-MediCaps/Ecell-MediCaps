import React from 'react'
import './TeamCard.css'
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const TeamCard = ({name,title,IGid,Linkedinid,profile}) => {
  return (
    <div class="profile-card">
        <div class="img">
            <img src={profile} alt='MemberPhoto' />
        </div>
        <div class="caption">
                <h3>{name}<br /><span>{title}</span><br/><span> <a href={Linkedinid} className="icon"><FaLinkedin  /></a></span><span>
                 <a href={IGid} className="icon"><FaInstagram /></a></span></h3> <br/>  
        </div>
    </div>
  )
}

export default TeamCard
