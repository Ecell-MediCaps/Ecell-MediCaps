import React from 'react'
import Card2 from './card2'
import './initiatives.css'
import esummit from '../../assets/images/initiatives/esummit.png'
import chai from '../../assets/images/initiatives/chai.png'
import drop from '../../assets/images/initiatives/drop.png'
import ideabox from '../../assets/images/initiatives/ideabox.png'
import onedollar from '../../assets/images/initiatives/onedollar.png'
import what from '../../assets/images/initiatives/what.png'
import jsondata from './data.json'

const Initiatives = () => {
  return (
    <div className='initiative'>
      <h1>Our Initiatives</h1>
      <div className='card2container'>
      <Card2 image={esummit} date ={jsondata.esummit.date} details={jsondata.esummit.detail} title={jsondata.esummit.title}/>
      <Card2 image={chai} date ={jsondata.chai.date} details={jsondata.chai.detail} title={jsondata.chai.title}/>
      <Card2 image={drop} date ={jsondata.drop.date} details={jsondata.drop.detail} title={jsondata.drop.title}/>
      <Card2 image={ideabox} date ={jsondata.ideabox.date} details={jsondata.ideabox.detail} title={jsondata.ideabox.title}/>
      <Card2 image={onedollar} date ={jsondata.onedollar.date} details={jsondata.onedollar.detail} title={jsondata.onedollar.title}/>
      <Card2 image={what} date ={jsondata.what.date} details={jsondata.what.detail} title={jsondata.what.title}/>
      </div>
      
    </div>
  )
}

export default Initiatives
