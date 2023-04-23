import React from 'react'
import "./Plans.css"
import { plansData } from "../../data/plansData"
import whiteTick from "../../assets/whiteTick.png"
const Plans = () => {
  return (
    <div className='plans-container'>
      <div className='plans-header' style={{ gap: '2rem' }}>
        <span className='stroke-text'>our</span>
        <span> Monthly </span>
        <span className='stroke-text'>Plans</span>
      </div>
      {/* plans card */}
      <div className='plans'>
        {plansData.map((plan, i) => (
          <div className='plan' key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>₹{plan.price}</span>
            {/* plans feature */}
            <div className='features'>
              {plan.features.map((features, i) => (
                <div className='feature'>
                  <img src={ whiteTick } alt="whiteTick"></img>
                  <span key={i}>{features}</span>
                </div>
              ))}
            </div>
            <div>
            <button className='btn' id='btn-join'>Join Now</button>
            </div>
          </div>

        ))}

      </div>

    </div>
  );
};

export default Plans