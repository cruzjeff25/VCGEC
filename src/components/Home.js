import React from 'react'
import homeImage from '../img/savings.png'
import section2 from '../components/Section2'

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
        
          <img src={homeImage} />
          <br></br>
          <p>All <span>Valenzuela City Employees</span> are qualified to be members</p>
        
        </div>
      </div>
      <div>
         {section2()}
      </div>
    </>


  )
}

export default Home
