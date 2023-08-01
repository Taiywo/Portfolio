import React from 'react'
import {FaGithub, FaEnvelopeOpen, FaPhoneSquareAlt,FaTwitter, FaLinkedinIn} from "react-icons/fa"
import {FiSend} from 'react-icons/fi'
const Contact = () => {
  return (
   <section className="contact section">
    <h2 className="section__title">Get In <span>Toch</span></h2>
    <div className="contact__container container grid">
      <div className="contact__data">
        <h3 className="contact__title">Don't be shy</h3>
        <p className="contact__description">
          Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or
          opportunities to be part of your vision.
        </p>
        <div className="contact__info">
          <div className="info__item">
            <FaEnvelopeOpen className='info__icon'/>
            <div>
              <span className="info__title">Mail me </span>
              <span className="info__desc">Kareemtaiywo@gmail.com</span>

            </div>
          </div>
        </div>
        <div className="contact__info">
          <div className="info__item">
            <FaPhoneSquareAlt className='info__icon'/>
            <div>
              <span className="info__title">Call me </span>
              <span className="info__desc">+234 803 9197 950</span>
              
            </div>
          </div>
        </div>
        <div className="contact__socials">
          <a href="https://twitter.com/tsnypes" className="contact__social-link">
            <FaTwitter/>
          </a>
          <a href="https://github.com/Taiywo" className="contact__social-link">
            <FaGithub/>
          </a>
          <a href="https://www.linkedin.com/kareem-taiwo" className="contact__social-link">
            <FaLinkedinIn/>
          </a>
        </div>
      </div>
      <form action="" className="contact__form">
        <div className="form__input-group">
          <div className="form__input-div">
            <input type="text" placeholder='Your Name' className='form__control' />
          </div>
          <div className="form__input-div">
            <input type="email" placeholder='Your Email' className='form__control' />
          </div>
          <div className="form__input-div">
            <input type="text" placeholder='' className='form__control' />
          </div>
          <div className="form__input-div">
           <textarea name="" id="" cols="60" rows="10" className="form__control textarea"></textarea>
          </div>
        </div>
      </form>
    </div>
   </section>
  )
}

export default Contact