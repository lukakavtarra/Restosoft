import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {FaCertificate} from 'react-icons/fa'
import {BsArrowRight, BsArrowReturnLeft, BsArrowLeft} from 'react-icons/bs'
import IMG1 from '../../assets/avatar1.jpg'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
<div className="flexbox upperFlex">
      <div className=" experience__container">
      {/* TEST */}
      <div className="flexbox">
        <div className="experience__frontend">
            <img src={IMG1} alt="" />
          </div>
          <BsArrowRight className='' size={40}/>
        </div>
        <div className="flexbox">
          <div className="experience__frontend">
              <img src={IMG1} alt="" />
          </div>
          <BsArrowRight className='' size={40}/>
        </div>
        <div className="flexbox">
        <div className="experience__frontend">
            <img src={IMG1} alt="" />
          </div>
          <BsArrowRight className='' size={40}/>
        </div>
        <div className="flexbox">
          <div className="experience__frontend">
              <img src={IMG1} alt="" />
          </div>
          <BsArrowRight className='' size={40}/>
        </div>
        <div className="flexbox">
        <div className="experience__frontend">
            <img src={IMG1} alt="" />
          </div>
        </div>
        <div className="flexbox">
          <div className="experience__frontend">
              <img src={IMG1} alt="" />
          </div>
          <BsArrowLeft className='' size={40}/>
        </div>
        <div className="flexbox">
        <div className="experience__frontend">
            <img src={IMG1} alt="" />
          </div>
          <BsArrowLeft className='' size={40}/>
        </div>
        <div className="flexbox">
          <div className="experience__frontend">
              <img src={IMG1} alt="" />
          </div>
          <BsArrowLeft className='' size={40}/>
        </div>
        <div className="flexbox">
        <div className="experience__frontend">
            <img src={IMG1} alt="" />
          </div>
          <BsArrowLeft className='' size={40}/>
        </div>
        <div className="flexbox">
          <div className="experience__frontend">
              <img src={IMG1} alt="" />
          </div>
        </div>
        
        
        
        
        
        
        </div>
        <div className="arrowGrid">
        <BsArrowReturnLeft className=' rotateArrow1' size={100}/>
        <BsArrowReturnLeft className=' rotateArrow2' size={100}/>

        </div>
        </div>
    </section>
  )
}

export default Experience