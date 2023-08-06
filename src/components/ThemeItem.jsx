import React from 'react'

const ThemeItem = ({ img, color, changeColor }) => {
  return (
    <img
      src={img}
      alt=""
      className='theme__img'
      onClick={() => { changeColor(color) }} />
  )
}

export default ThemeItem