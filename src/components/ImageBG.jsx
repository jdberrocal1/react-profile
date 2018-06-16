import React, { Component } from 'react'
import BG from './../img/cr-background.jpg'

const ImageBG = ({heightStyle}) => {
  let style = {
    height: heightStyle
  };

  return (
    <div  className="bg-container">
      <img src={BG} alt="" style={style}/>
    </div>
  )
}

export default ImageBG;