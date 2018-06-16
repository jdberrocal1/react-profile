import React, { Component } from 'react'

const ContentBG = ({heightStyle}) => {
  let style = {
    top: heightStyle/3
  };
  
  return (
    <div className="home-info-container" style={style}>
        <h1>I'm Daniel Berrocal.</h1>
        <p>I'm a Costa Rica based <span>FullStack Developer.</span> Let's start scrolling and learn more <span>about me.</span></p>
    </div>
  )
}

export default ContentBG;