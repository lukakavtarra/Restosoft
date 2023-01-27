import React from 'react'
import './portfolio.css'
import {BiCheck} from 'react-icons/bi'
import CTA from '../header/CTA'
import {BsArrowRight} from 'react-icons/bs'
import testPhoto from '../../assets/avatar1.jpg'
const Chain = () => {
  return (
    <section id='chain'>
    <h5>რაში გამოიყენოთ ჩვენი პროგრამა?</h5>
    <h2>ჩვენი პროგრამა გამოგადგებათ შემდეგი სახის ობიექტებზე</h2>
    <div className="container chain__container">
    <div className="arrowflex">
    <article className="chain">
        <div className="chain__head">
          <h3>რესტორანი</h3>
        </div>

        <div className='chain__list'>
       <img src={testPhoto} alt="" />
        </div>
        
      </article>
      <BsArrowRight className='arrowReact' size={40}/>
      </div>

      {/* რესტორნის დასასრული */}
      <div className="arrowflex">
      <article className="chain">
        <div className="chain__head">
          <h3>სწრაფი კვება</h3>
        </div>

        <div className='chain__list'>
       <img src={testPhoto} alt="" />
        </div>
        
      </article>
            <BsArrowRight className='arrowReact' size={40}/>
      </div>
      {/* სწრაფი კვების დასასრული */}
      <div className="arrowflex">
      <article className="chain">
        <div className="chain__head">
          <h3>მიწოდება</h3>
        </div>

        <div className='chain__list'>
        
       <img src={testPhoto} alt="" />
        
    
        </div>
      </article>
      <BsArrowRight className='arrowReact' size={40}/>
      </div>
      {/*მიწოდების დასასრული*/ }
      <div className="arrowflex">
      <article className="chain">
      <div className="chain__head">
        <h3>ბარი/კლუბი</h3>
      </div>

      <div className='chain__list'>
      <img src={testPhoto} alt="" />
      </div>
    </article>
    <BsArrowRight className='arrowReact' size={40}/>
    </div>
    {/*ბარ-კლუბის დასასრული*/ }
    <div className="arrowflex">
    <article className="chain">
    <div className="chain__head">
      <h3>მაღაზია</h3>
    </div>

    <div className='chain__list'>
    <img src={testPhoto} alt="" />
    </div>
  </article>
  </div>
      {/* END OF WEB DEV */}
      
    </div>
    <CTA  />
    </section>
  )
}

export default Chain;