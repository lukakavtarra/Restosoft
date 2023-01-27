import React from 'react'
import './about.css'
// import ME from '../../assets/me-about.jpeg'
import RESTOSOFTLOGO from '../../assets/restosoftLogo.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {BiSupport} from 'react-icons/bi'

const About = () => {
  return (
    <section id='about'>
      <h5>გაიცანი</h5>
      <h2>ჩვენი კომპანია</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={RESTOSOFTLOGO} alt="Logo" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward  className='about__icon'/>
              <h5>გამოცდილება</h5>
              <small>1+ წლიანი გამოცდილება ბაზარზე</small>
            </article>
            <article className="about__card">
              <FiUsers  className='about__icon'/>
              <h5>კლიენტები</h5>
              <small>60+ კლიენტი საქართველოს მაშტაბით</small>
            </article>
            <article className="about__card">
              <BiSupport  className='about__icon'/>
              <h5>საფორთი</h5>
              <small>24 საათიანი ტექნიკური დახმარება</small>
            </article>
          </div>

          <p>

          </p>

          <a href="#contact" className='btn btn-primary'>მოგვწერეთ</a>
        </div>
      </div>
    </section>
  )
}

export default About