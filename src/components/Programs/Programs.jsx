import React from 'react'
import "./Programs.css";
import { programsData } from '../../data/programsData';
import rightArrow from "../../assets/rightArrow.png"

const Programs = () => {
  return (
    <div className='Programs' id='Programs'>
      <div className='Programs-header'>
        <span className='stroke-text'>Explore</span>
        <span className='stroke-text'>Our</span>
        <span >Programs</span>
      </div>
      <div className='programs-categories'>
        {programsData.map((program) => (
          <div className='category'>
            {program.image}

            <span> {program.heading}</span>
            <span>{program.details}</span>
            <div className='join-now'>
              <span>Join Now</span>
              <img src={rightArrow} alt="right arrow"></img>
            </div>


          </div>
        ))}

      </div>
    </div>

  )
}

export default Programs