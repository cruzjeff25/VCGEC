import React from 'react'
import homeImage from '../img/savings.png'

function Home() {
  return (
    <>
      <div className="con-home" id='Home'>

          <div className='container'>
            <div className='col1'>
              <h2 >Valenzuela City Government Employees Cooperative</h2>
              <p>"Stable and progressive life towards abundance"</p>  
              <button><a href='#section3'>Join Now!</a></button>
            </div>

          </div>

          <div className='container'>
            <div className='col2'>
              <img src={homeImage} alt='savings'/>
              <br></br>
              <p>All <span>Valenzuela City Government Employees</span> are qualified to be members</p>
            </div>
          </div>

          <div className='sec2-nav'><a href='#section2'>&darr; Services Offered &darr;</a></div>

      </div>

      <section id='section2'>
          <h3 className='section2-title'>Services Offered</h3>
          <div>
            <h4>Regular Loans</h4>
            <ul>
              <li>Productivity Loan</li>
              <li>Educational Loan</li>
              <li>Travel Loan</li>
              <li>MIGS</li>
              <li>1 COOP</li>
              <li>Commodity Loan</li>
              <li>Emergency/Calamity Loan</li>
              <li>Rediscounting</li>
              <li>Promo</li>
              <li>Motorcycle</li>
            </ul>
          </div>

          
        </section>
         
      <section id='section3'>
        <h3>VCGEC Membership</h3>
        <h4>Be a member now for as low as <span>&#8369;850</span></h4>

      </section>
    </>


  )
}

export default Home
