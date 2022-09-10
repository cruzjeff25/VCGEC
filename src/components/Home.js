import React from 'react'
import homeImage from '../img/savings.png'

function Home() {
  return (
    <>
      <div className="con-home" id='Home'>
        <div className='container'>
          <div className='con-text'>
            <h2 >Valenzuela City Government Employees Cooperative</h2>
            <p>"Stable and progressive life towards abundancy"</p>  
            <button><a href='#section2'>Join Now!</a></button>
          </div>
        </div>
        <div className='con-img'>
        
          <img src={homeImage} alt='savings'/>
          <br></br>
          <p>All <span>Valenzuela City Government Employees</span> are qualified to be members</p>
        
        </div>
      </div>


         
        <section id='section2'>
          section3
        </section>
    </>


  )
}

export default Home
