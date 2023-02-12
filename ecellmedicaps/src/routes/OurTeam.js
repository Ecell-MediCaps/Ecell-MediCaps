import React from 'react'
import TeamCard from '../components/TeamCard/TeamCard'
import {teamdata} from './teamdata'
import teambg from '../assets/videos/teambg.mp4'

const OurTeam = () => {
  return (
    <div className='teampage'>
        <video src={teambg}  autoPlay loop muted/>
      <h1>Meet Our Team</h1>
    <div className="ourteam">
      <div className='teamcard'>
      {teamdata.map((item) => (
          <TeamCard {...item}/>
        ))}
      </div>
    </div>
  </div>
  )
}

export default OurTeam
