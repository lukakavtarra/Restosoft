import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
    <h5>რას გთავაზობთ</h5>
    <h2>ჩვენი მომსახურეობის პაკეტები</h2>
    <div className="container services__container">
    <article className="service">
        <div className="service__head">
          <h3>Basic</h3>
        </div>

        <ul className='service__list'>
        <li>
          <BiCheck  className='service__list-icon'/>
          <p>Fast Learner</p>
          </li>
          <li>
          <BiCheck  className='service__list-icon'/>
          <p>Communication Skills</p>
          </li>
          <li>
          <BiCheck  className='service__list-icon'/>
          <p>Critical thinking</p>
          </li>
                    <li>
          <BiCheck  className='service__list-icon'/>
          <p>Problem solving</p>
          </li>
          <li>
          <BiCheck  className='service__list-icon'/>
          <p>Team-worker</p>
          </li>
        </ul>
      </article>
      {/* END OF PERSONAL SKILLS */}
      <article className="service">
        <div className="service__head">
          <h3>Standard</h3>
        </div>

        <ul className='service__list'>
        <li>
          <BiCheck  className='service__list-icon'/>
          <p>Knowledge of HTML5 modern features</p>
          </li>
          <li>
          <BiCheck  className='service__list-icon'/>
          <p>Knowledge of CSS3 modern features</p>
          </li>
          <li>
          <BiCheck  className='service__list-icon'/>
          <p>Proficient with SCSS</p>
          </li>
          <li>
          <BiCheck  className='service__list-icon'/>
          <p>Cross-browser and responsive layout experience</p>
          </li>
          <li>
          <BiCheck  className='service__list-icon'/>
          <p>Figma knowledge</p>
          </li>
        </ul>
        <ul className='service__list'>
        <li>
          <BiCheck  className='service__list-icon'/>
          <p>Fast Learner</p>
          </li>
          <li>
          <BiCheck  className='service__list-icon'/>
          <p>Communication Skills</p>
          </li>
          <li>
          <BiCheck  className='service__list-icon'/>
          <p>Critical thinking</p>
          </li>
                    <li>
          <BiCheck  className='service__list-icon'/>
          <p>Problem solving</p>
          </li>
          <li>
          <BiCheck  className='service__list-icon'/>
          <p>Team-worker</p>
          </li>
        </ul>
        
      </article>
      {/* END OF MARKUP */}
      <article className="service">
        <div className="service__head">
          <h3>Pro</h3>
        </div>

        <ul className='service__list'>
        <li>
          <BiCheck  className='service__list-icon'/>
          <p>Knowledge of JavaScript modern features</p>
          </li>
          <li>
          <BiCheck  className='service__list-icon'/>
          <p>Focus on code quality, reusability and testability</p>
          </li>
          <li>
          <BiCheck  className='service__list-icon'/>
          <p>The ability to learn quickly and get to know new tools</p>
          </li>
          <li>
          <BiCheck  className='service__list-icon'/>
          <p>Proficiency with git</p>
          </li>
          <li>
          <BiCheck  className='service__list-icon'/>
          <p>Knowledge of Postman API testing</p>
          </li>
    
        </ul>
      </article>
      <article className="service">
      <div className="service__head">
        <h3>Premium</h3>
      </div>

      <ul className='service__list'>
      <li>
        <BiCheck  className='service__list-icon'/>
        <p>Knowledge of JavaScript modern features</p>
        </li>
        <li>
        <BiCheck  className='service__list-icon'/>
        <p>Focus on code quality, reusability and testability</p>
        </li>
        <li>
        <BiCheck  className='service__list-icon'/>
        <p>The ability to learn quickly and get to know new tools</p>
        </li>
        <li>
        <BiCheck  className='service__list-icon'/>
        <p>Proficiency with git</p>
        </li>
        <li>
        <BiCheck  className='service__list-icon'/>
        <p>Knowledge of Postman API testing</p>
        </li>
  
      </ul>
    </article>
    <article className="service">
    <div className="service__head">
      <h3>Super</h3>
    </div>

    <ul className='service__list'>
    <li>
      <BiCheck  className='service__list-icon'/>
      <p>Knowledge of JavaScript modern features</p>
      </li>
      <li>
      <BiCheck  className='service__list-icon'/>
      <p>Focus on code quality, reusability and testability</p>
      </li>
      <li>
      <BiCheck  className='service__list-icon'/>
      <p>The ability to learn quickly and get to know new tools</p>
      </li>
      <li>
      <BiCheck  className='service__list-icon'/>
      <p>Proficiency with git</p>
      </li>
      <li>
      <BiCheck  className='service__list-icon'/>
      <p>Knowledge of Postman API testing</p>
      </li>

    </ul>
  </article>
      {/* END OF WEB DEV */}
      
    </div>
    </section>
  )
}

export default Services