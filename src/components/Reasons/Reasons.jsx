import React from 'react'
import "./Reasons.css";
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"


const Reasons = () => {
  return (
    <div className='Reasons' id='reasons'>
    <div className='left-r'>
    <img src={image1} alt="mens images"></img>
    <img src={image2} alt="mens images"></img>
    <img src={image3} alt="mens images"></img>
    <img src={image4} alt="mens images"></img>
    </div>

    </div>
  )
}

export default Reasons
