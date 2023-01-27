import React from 'react'
import './nav.css'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#') ;
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>Restosoft</a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>ჩვენს შესახებ</a>
      <a href="#system" onClick={() => setActiveNav('#system')} className={activeNav === '#system' ? 'active' : ''}>სისტემა</a>
      <a href="#chain" onClick={() => setActiveNav('#chain')} className={activeNav === '#chain' ? 'active' : ''}>კონცეფცია</a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>პაკეტები</a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>კონტაქტი</a>
    </nav>
  )
}

export default Nav