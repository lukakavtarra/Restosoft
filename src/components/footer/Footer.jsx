import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/restosoft.ge" target="_blank">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/restosoft.ge/" target="_blank">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/company/restosoft/" target="_blank">
          <BsLinkedin />
        </a>
      </div>
      <a href="#" className='footer__logo'>Restosoft</a>

      <div className="footer__copyright">
      
        <small>&copy; All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer