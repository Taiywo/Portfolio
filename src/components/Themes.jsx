import React from 'react'
import ThemeItem from './ThemeItem'
import { themes } from '../data'
import { FaCog } from 'react-icons/fa'
import {BsSun, BsMoon} from 'react-icons/bs'
import './theme.css'



const Themes = () => {
  return (

    <div>
        <div className="style__switcher">
            <div className="style__switcher-toggler">
                <FaCog/>
            </div>
            <div className="theme__toggle">
                <BsMoon/>
            </div>
            <h3 className="style__switcher-title">Style Switcher</h3>
            <div className="style__switcher-item">
                {themes.map((theme,index)=>{
                    return<ThemeItem key={index} {...theme}/>
                })}
            </div>
            <div className="style__switcher-close">
                &times;
            </div>
        </div>
    </div>
  )
}

export default Themes