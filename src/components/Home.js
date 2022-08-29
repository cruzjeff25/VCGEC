import React from 'react'
import homeImage from '../img/savings.png'
import homeIcon from '../img/home.png'

function Home() {
  return (
    <>
      <div className="con-home" id='Home'>
        <div className='container'>
          <div className='con-text'>
            <h2 className='title'>Valenzuela City Government Employees Cooperative</h2>
            <p>"Stable and progressive life towards abundancy"</p>  
            <button><a href='#section3'>Join Now!</a></button>
          </div>
        </div>
        <div className='con-img'>
        
          <img src={homeImage} alt='savings'/>
          <br></br>
          <p>All <span>Valenzuela City Employees</span> are qualified to be members</p>
        
        </div>
      </div>
      <a className='homeIcon' href='#Home'>
       <img src={homeIcon} width='50px' alt='HomeIcon'/>
      </a>

         
        <section id='section2'>
          section3
        </section>

        <section className='contact-sec'>
              <div className="contact-title">
                <h2>Contact <span>Us</span></h2>
                <p className="footerd-des">
                  Please get in touch and our contact support team will answer all your questions or suggestions.
                </p>
              </div>

              <form className="contact-form">
                <div className="contact-subcon">
                  <div className="con-input">
                    <input className="form-name" type="text" name="name" placeholder="Your Name*" />
                    <input  className="form-email" type="email" name="email" placeholder="Your Email*" />
                  </div>

                  <textarea placeholder="Your Message*"></textarea>
                </div>
                <div className="con-button">
                <button type="submit">Submit</button>
                </div>
              </form>
         </section>
    </>


  )
}

export default Home
