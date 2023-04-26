import React, { useRef } from 'react'
import "./Join.css"
import emailjs from "@emailjs/browser"

const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_rd9div5', 'template_x9lq73e', form.current, 'MUkqvpNOfir6M45pA')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <div className='join' id='Join'>
            <div className='join-l'>
            <hr />
            <div>
                <span className='stroke-text'>start your</span>
                <span> journey</span>
            </div>
            <div>
                <span className='stroke-text' > with US</span>
                <span> Now!</span>
            </div>
            </div>
            <div className='join-r'>
            <form ref={form} className='email-container' onSubmit={sendEmail}>
                <input type="email" name="user-email" placeholder='Enter your Email here'></input>
                <button className='btn btn-join'>Join Now</button>
            </form>

            </div>
        </div>
    )
}

export default Join