import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from 'framer-motion';
import NumberCounter from "number-counter"

const Hero = () => {
  const transition = {type:"spring",duration :3}
  const mobile = window.innerWidth<=768 ? true:false;
  return (
    <div className="hero" id='Home'>
    <div className='blur hero-blur'></div>
      <div className="left-h">
        <Header />
        {/* the best add section */}
        <div className="the-best-ad">
          <motion.div 
          initial={{left:mobile?"168px":"238px"}}
          whileInView={{left:'9px'}}
          transition={transition}
          ></motion.div>
          <span>The best fitness club in the city</span>
        </div>
        {/* shape your Ideal Body text */}
        <div className='hero-text'>
          <div>
            <span className='stroke-text'>Shape</span>
            <span> your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              in here we will help you to shape and build your ideal body And
              live up your life to fullest
            </span>
          </div>
       </div>

       {/* Figures */}
       <div className='figures'>
        <div>
      <span><NumberCounter start={100} end={140} delay='4' preFix="+">
      </NumberCounter></span>
      <span>Expert Coachs</span>
        </div>
        <div>
      <span><NumberCounter start={200} end={252} delay='4' preFix="+">
      </NumberCounter></span>
      <span>Members Joined</span>
        </div>
        <div>
      <span><NumberCounter start={1} end={10} delay='2' preFix="+">
      </NumberCounter></span>
      <span>Fitness Programs</span>
        </div>

       </div>
       <div className='hero-button'>
        <button className='btn'>Get Started</button>
        <button className='btn'>Learn More</button>

       </div>
      </div>
      {/* right side of hero */}
      <div className="right-h">
        <button className='btn'>Join Now</button>
        <motion.div
        initial={{right:'10rem'}}
          whileInView={{right:'4rem'}}
          transition={transition}
         className='heart-rate'>
        <img src={Heart} alt="heart"></img>
        <span>Heart Rate</span>
        <span><NumberCounter start={200} end={240} delay='4' postFix="BPM">
      </NumberCounter></span>
        </motion.div>
      {/* fitness hero Images */}
      <img src={hero_image} alt="hero_img" className='hero_img'></img>
  
      <motion.img
       initial={{right:'11rem'}}
          whileInView={{right:'20rem'}}
          transition={transition}
       src={hero_image_back} alt="hero_img_back" className='hero_img_back'></motion.img>
      {/* calories  */}
      <motion.div
      initial={{right:'8rem'}}
          whileInView={{right:'2rem'}}
          transition={transition}
       className='calories'>
        <img src={Calories} alt="calories"></img>
        <div>
          <span>Calories Burned</span><span><NumberCounter start={180} end={242} delay='4' postFix="Kcal">
      </NumberCounter></span>
        </div>
      </motion.div>
  
      </div>

    </div>
  )
}

export default Hero;