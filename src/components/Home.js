import React from 'react'
import { Link } from 'react-router-dom'
import homeImage from '../img/savings.png'
import member from '../img/member.png'
import membership from '../documents/membership.pdf'

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
            
            <div className='col2'>
              <img src={homeImage} alt='savings'/>
              <br></br>
              <p>All <span>Valenzuela City Government Employees</span> are qualified to be members</p>
            </div>
          </div>

          <div className='sec2-nav'><a href='#section2'>&darr; Services Offered &darr;</a></div>

      </div>

      <section id='section2'>
          <h3 className='section2-title'>Services</h3>
          <p>VCGEC Offered Regular Loans, Special Loans, Mutual Benefit Assistance, Member Incentive, Scholarship Program and Livelihood Programs</p>
          <div className='container'>
            <div className='row1'>
              <ul>
                <h4>Regular Loans</h4>
                <li>Productivity Loan</li>
                <li>Educational Loan</li>
                <li>Travel Loan</li>
                <li>MIGS</li>
                <li>1 COOP</li>
                <li>Commodity Loan</li>
                <li>Emergency/Calamity Loan</li>
                <li>Promo</li>
                <li>Motorcycle</li>
              </ul>
              <ul>
                <h4>Special Loans</h4>
                <li>Clothing Allowance</li>
                <li>Mid Year</li>
                <li>Year End</li>
                <li>Cash Gift / P.E.I.</li>
                <li>Dividend</li>  
              </ul>
            </div>
            <div className='row2'>
              <ul>       
                <h4>Loan Proceeds Thru</h4>
                <li>Cheque</li>
                <li>ATM</li>
              </ul>
              <ul>       
                <h4>High Interest Rates On</h4>
                <li>Savings Deposit</li>
                <li>Time Deposit</li>
                <li>Interest on Share Capital</li>
                <li>Patronage Refund</li>
              </ul>

            </div>
          </div>

          
        </section>
         
      <section id='section3'>
        <h3>New Membership<span> Promo!</span></h3>

        <div className='container'>

          <div className='col'>
           <img src={member} alt='members' width="450px"/>
           <h4>For inquiries visit or<Link className='link' to="/Contact">Contact Us</Link></h4>
           <a href={membership} target='_blank' rel="noreferrer noopener" className="download" download>Download Membership Application Form</a>
          </div>

          <div className='col-1'>
            <h4>Be a member now for as low as <span>&#8369;850</span></h4>
            <p className='sub'>Provided that new member will avail Productivity Loan</p>
            <div className='computation'>
              <div className='left'>
                <p>Share Capital</p>
                <p>Savings Deposit</p>
                <p>Membership Fee</p>
                <p>Seminar's Fee</p>
                <p>Total</p>
              </div>
              <div className='right'>
                <p>&#8369;500</p>
                <p>&#8369;200</p>
                <p>&#8369;100</p>
                <pre><u>&#8369;50   </u></pre>
                <span>&#8369;850</span>
              </div>
            </div>
            <p className='sub'>An incentives of &#8369;100 for every recruited new member</p>
          </div>

        </div>

      </section>
    </>


  )
}

export default Home
