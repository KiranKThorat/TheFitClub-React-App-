import React from 'react'
import "./Reasons.css";
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import tick from "../../assets/tick.png"


const Reasons = () => {
  return (
    <div className='Reasons' id='Reasons'>
    <div className='left-r'>
    <img src={image1} alt="mens images"></img>
    <img src={image2} alt="mens images"></img>
    <img src={image3} alt="mens images"></img>
    <img src={image4} alt="mens images"></img>
    </div>
    <div className='right-r'>
      
      <span>Reasons</span>
      <div>
        <span className='stroke-text'>why </span>
        <span>Choose Us</span>
      </div>
      <div className='details-r'>
        <div>
          <img src={tick} alt="tick"></img>
          <span>14+ Expert Coachs</span>
        </div>
        <div>
          <img src={tick} alt="tick"></img>
          <span>10+ programs</span>
        </div>
        <div>
          <img src={tick} alt="tick"></img>
          <span>1 free program for new members</span>
        </div>
        <div>
          <img src={tick} alt="tick"></img>
          <span>train faster and smarter than before</span>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Reasons
