import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        {/* the best add section */}
        <div className="the-best-ad">
          <div></div>
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
      <span>+14</span>
      <span>Expert Coachs</span>
        </div>
        <div>
      <span>+274</span>
      <span>Members Joined</span>
        </div>
        <div>
      <span>+10</span>
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
        <div className='heart-rate'>
        <img src={Heart} alt="heart"></img>
        <span>Heart Rate</span>
        <span>116 BPM</span>
        </div>
      {/* fitness hero Images */}
      <img src={hero_image} alt="hero_img" className='hero_img'></img>
      <img src={hero_image_back} alt="hero_img_back" className='hero_img_back'></img>
      {/* calories  */}
      <div className='calories'>
        <img src={Calories} alt="calories"></img>
        <div>
          <span>Calories Burned</span><span>220 Kcal</span>
        </div>
      </div>
  
      </div>

    </div>
  )
}

export default Hero;