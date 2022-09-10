
const Contact = () => {
  return (
    <div className="contact">
      <section className='contact-sec'>
      <div className="contact-title">
        <h2>Contact <span>Us</span></h2>
        <p>
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
      
    </div>
  )
}

export default Contact