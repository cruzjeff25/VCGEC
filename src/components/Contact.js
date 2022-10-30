import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaFacebookSquare, FaEnvelope, FaPhoneAlt, FaSearchLocation } from "react-icons/fa";


const Contact = () => {
  const form = useRef();

  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [message,setMessage] = useState();
  const [error,setError] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();

    if(name == null || name.length === 0 || email === null || email.length === 0 ||  message === null || message.length === 0 ){
      setError(true)
    }else{
    emailjs.sendForm('gmail', 'template_1rzzzra', form.current, 'wPYiuptMZmAPACs5b')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert('Message Sent');
      e.target.reset();
    }
  };

  return (
    <div className='contact'>
      <div className='con-left'>
        <h2>Get in Touch</h2>
        <p>Visit or Contact Us</p>
        <ul>
          <li><FaSearchLocation color='#0272ce' size="1.2rem"/>A. Pablo St. Malinta, District I Valenzuela City</li>
          <li><FaPhoneAlt color='#0272ce' size="1.2rem"/>700-22919 | 352-1000 1815</li>
          <li><FaEnvelope color='#0272ce' size="1.2rem"/><a href = "mailto: vcgec@yahoo.com" target="_blank" rel="noreferrer noopener" >vcgec@yahoo.com</a></li>
          <li><FaFacebookSquare color='#0272ce' size="1.2rem"/><a href='https://www.facebook.com/vcge.coop' target="_blank" rel="noreferrer noopener">facebook.com/vcge.coop</a></li>
        </ul>
      </div>
      <div className='con-right'>
        <section className='contact-sec'>
          <div className="contact-title">
            <h2>Comments & Suggestions</h2>
          </div>
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="contact-subcon">
              <div className="con-input">
                <input onChange={e=>setName(e.target.value)} className="form-name" type="text" name="name" placeholder="Name" />
        
                <input onChange={e=>setEmail(e.target.value)} className="form-email" type="email" name="email" placeholder="Email"/>
              </div>
              <textarea onChange={e=>setMessage(e.target.value)} name="message" placeholder="Your Message"></textarea>
              {error ? <label>Inputs can't be Empty.</label> : " " }
            </div>
            <div className="con-button">
            <button type="submit">Submit</button>
            </div>
          </form>   
        </section>  
      </div>
    </div>
  )
}

export default Contact;