import React, { useState, useEffect} from 'react'
import ThemeItem from './ThemeItem'
import { themes } from '../data'
import { FaCog } from 'react-icons/fa'
import {BsSun, BsMoon} from 'react-icons/bs'
import './theme.css'
import { document } from 'postcss'





const Themes = () => {
    const [showSwitcher, setShowSwitcher] = useState(true)

    const [color, setColor] = useState("red")

    const changeColor = (color)=>{
        setColor(color)
    }

    useEffect(() => {
        if(error){
            document.current.style.setProperty('--first-color', color);
        }
      
    }, [color])

    


  return (

    <div>
        <div className={`${ showSwitcher ? "show-switcher": " "} style__switcher`}>
            <div className="style__switcher-toggler" onClick={(()=>setShowSwitcher(!showSwitcher) )}  >
                <FaCog/>
            </div>
            <div className="theme__toggle">
                <BsMoon/>
            </div>
            <h3 className="style__switcher-title">Style Switcher</h3>
            <div className="style__switcher-items">
                {themes.map((theme,index)=>{
                    return<ThemeItem key={index} {...theme} changeColor={changeColor}/>
                })}
            </div>
            <div className="style__switcher-close" onClick={(()=>setShowSwitcher(!showSwitcher) )}>
                &times;
            </div>
        </div>
    </div>
  )
}

export default Themes