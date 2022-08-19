import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import logo from '../img/VCGEC.png'


function Layout (){
  const [active, setActive] = useState(false);


  return (
    <>
      <nav className={active ? "nav_active" : "nav"}>
        <Link to='/'><div className='logo'></div></Link>
        <ul className='nav_menu' onClick={() => setActive(false)}>
          <li>
            <Link className='link' to="/">Home</Link>
          </li>
          <li>
            <Link className='link' to="/Forms">Forms</Link>
          </li>
          <li>
            <Link className='link' to="/About">About Us</Link>
          </li>
          <li>
            <Link className='link' to="/Contact">Contact Us</Link>
          </li>
        </ul>
        
        <div className='burger' onClick={() => setActive(true) } >

          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>

        <div className='close' onClick={() => setActive(false) } >
          <span className='barClose'></span>
          <span className='barClose'></span>
        </div>

      </nav>
      <Outlet />

      <footer>
        <p>© 2022 Valenzuela City Government Employees Cooperative</p>
        <img src={logo} className='footerLogo' width='60px' alt='logo'/>

      </footer>
    </>
  )
}

export default Layout