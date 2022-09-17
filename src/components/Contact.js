import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [message,setMessage] = useState();
  const [error,setError] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();

    if(name == null || name.length == 0 || email == null || email.length == 0 ||  message == null || message.length == 0 ){
      setError(true)
    }else{
    emailjs.sendForm('gml', 'templara', form.current, 'wPACs5b')
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
    <div className="contact">
      <section className='contact-sec'>
      <div className="contact-title">
        <h2>Contact <span>Us</span></h2>
        <p>
          Please get in touch and our contact support team will answer all your questions or suggestions.
        </p>
      </div>

      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="contact-subcon">

          <div className="con-input">
            <input onChange={e=>setName(e.target.value)} className="form-name" type="text" name="name"  />
    
            <input onChange={e=>setEmail(e.target.value)} className="form-email" type="email" name="email" />
          </div>

          <textarea onChange={e=>setMessage(e.target.value)} name="message" placeholder="Your Message*"></textarea>
          {error ? <label>*Inputs can't be Empty*</label> : " " }
        </div>
        <div className="con-button">
        <button type="submit">Submit</button>
        </div>
      </form>
  </section>
      
    </div>
  )
}

export default Contact;