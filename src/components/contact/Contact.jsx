import React from 'react';
import './contact.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

import {MdOutlineEmail} from 'react-icons/md';
import {BsTelephone} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mb7edvw', 'template_i8qjwb7', form.current, 'z25wWsHDBD9nfkFed')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id='contact'>
    <h5>შევსეთ განაცხადი</h5>
    <h2>ჩვენ უმოკლედ დროში დაგიკავშირდებით</h2>

      <div className="container contact__container">
        <div className="contact__options">
            <article className='contact__option'>
              <MdOutlineEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>contact@restosoft.ge</h5>
              <a href="mailto:contact@restosoft.ge" target="_blank">Send a message</a>
            </article>
            <article className='contact__option'>
              <BsTelephone className='contact__option-icon'/>
              <h4>Telephone</h4>
              <h5>+995 555 40 89 41</h5>
              <a href="tel:+995555408941" target="_blank">Make a call</a>
            </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <div className="fullName">
            <input type="text" name='name' placeholder='სახელი' required />
            <input type="text" name='surname' placeholder='გვარი' required />
          </div>
          <input type="text" name='companyname' placeholder='ობიექტის სახელი' required />
          <input type="tel" pattern="[5]{1}[0-9]{8}" name='telno' placeholder='ტელეფონის ნომერი მაგ:(555 40 89 41)'  required />
          
         {/* <select name="restaurant" id="restaurant" required>
          <option value="">ობიექტის ტიპი</option>
          <option value="test1">რესტორანი</option>
          <option value="saab">სწრაფი კვება</option>
          <option value="mercedes">Mercedestest3</option>
          <option value="audi">Auditest1</option>
          </select>
  */}
          <input type="email" name='email' placeholder='მეილი' required />
          <textarea name="message" rows="7" placeholder='Your Message' ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact