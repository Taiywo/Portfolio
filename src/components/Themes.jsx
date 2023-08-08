import React, { useState, useEffect } from 'react'
import ThemeItem from './ThemeItem'
import { themes } from '../data'
import { FaCog } from 'react-icons/fa'
import { BsSun, BsMoon } from 'react-icons/bs'
import './theme.css'



const getLocalStorage = () => {
    let color = "hsl(252,35%,51%"
    if (localStorage.getItem('color')) {
        color = localStorage.getItem('color')
    }
    return color
}
const getLocalModeStorage = () => {
    let theme = "light-mode"
    if (localStorage.getItem('mode')) {
       theme = localStorage.getItem('mode')
    }
    return  theme
}


const Themes = () => {
    const [showSwitcher, setShowSwitcher] = useState(false)

    const [color, setColor] = useState(getLocalStorage())
    const [mode, setMode] = useState(getLocalModeStorage ())

    const changeColor = (color) => {
        setColor(color)
    }
    const changeMode = () => {
        if (mode === 'light-mode') {
            setMode('dark-mode')
        }
        else setMode('light-mode')
    }


    useEffect(() => {
        document.documentElement.style.setProperty('--first-color', color)
        localStorage.setItem('color', color)

    }, [color])

    useEffect(() => {
        document.documentElement.className = mode
        localStorage.setItem('mode', mode)

    }, [mode])




    return (

        <div>
            <div className={`${showSwitcher ? "show-switcher" : " "} style__switcher`}>
                <div className="style__switcher-toggler" onClick={(() => setShowSwitcher(!showSwitcher))}  >
                    <FaCog />
                </div>
                <div className="theme__toggle" onClick={ changeMode}>
                    {mode === 'light-mode'? <BsMoon /> : <BsSun />}
                </div>
                <h3 className="style__switcher-title">Style Switcher</h3>
                <div className="style__switcher-items">
                    {themes.map((theme, index) => {
                        return <ThemeItem key={index} {...theme} changeColor={changeColor} />
                    })}
                </div>
                <div className="style__switcher-close" onClick={(() => setShowSwitcher(!showSwitcher))}>
                    &times;
                </div>
            </div>
        </div>
    )
}

export default Themes