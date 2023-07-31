import React from 'react'
import {portfolio} from "../../data"
import PortfolioItem from '../../components/PortfolioItem'

const Portfolio = () => {
  return (
    <section className="portfolio section">
      <h1 className="section__title">My <span>Portfolio</span></h1>
<div className="portfolio__container container grid">
{portfolio.map((item)=>{
  return 
})}

</div>
       
    </section>
  )
}

export default Portfolio