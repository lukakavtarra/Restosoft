import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiFrontendmentor} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
    <a href="https://www.linkedin.com/in/luka-kavtaradze-6b3b261a1/" target="_blank"><BsLinkedin /></a>
    <a href="https://github.com/lukakavtarra" target="_blank"><BsGithub /></a>
    <a href="https://www.frontendmentor.io/profile/lukakavtarra" target="_blank"><SiFrontendmentor /></a>

    </div>
  )
}

export default HeaderSocials