import React from 'react'
import profile from "../../assets/home.jpg"
import { Link } from "react-router-dom"
import { FaArrowRight } from 'react-icons/fa'
import "./home.css"


const Home = () => {
  return (
    <section className='home section grid'>
      <img src={profile} alt="" className='home__img' />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title"><span> I'm Kareem Taiwo. </span>Sofware Developer </h1>
          <p className='home__description'>I'm a Nigerian based front-end developer passionate about builing
            excellent software that improves the lives of those arround me.</p>
          <Link to='/about' className='button'> More About Me {' '} <span  className='button__icon'> <FaArrowRight/></span>
          </Link>
        </div>
      </div>
      <div className="color__block"></div>

    </section>
  )
}

export default Home