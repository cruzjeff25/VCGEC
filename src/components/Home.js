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

      <div>
         <section id='section2'>
          section2
         </section>
         <section id='section3'>
          section3
         </section>
      </div>
    </>


  )
}

export default Home
