import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import SyrveLogo from '../../assets/syrve logo.jpg'
const Header = () => {
  return (
    
    <header>
    <div className="me">
      <img src={SyrveLogo} alt="me" />
    </div>
      <div className='header__container'>
      <h1>RESTOSOFT</h1>
      <h5 className='text-light'>Restaurant Software</h5>
      <CTA />


      </div>
    </header>
  )
}

export default Header