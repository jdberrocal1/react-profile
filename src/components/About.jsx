import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'

const About = ({heightStyle}) => {
  let style = {
    top: heightStyle
  }
  
  return (
    <div className="about" style={style}>
      <Grid container spacing={40}>
        <Grid item xs={3}>
            1
        </Grid>
        <Grid item xs={5} sm={5}>
          <h2>About Me</h2>

          <p>I am a developer passionate for software development, mostly for Frontend technologies, with the ability to learn and adapt to new technologies. With the faculty to work well, independently and comfortable in a distributed team and easily adaptable to different company cultures.</p>
          <p>I'm currently working as FullStack developer with technologies like: Ruby on Rails, Sinatra, Resque, NodeJS, ReactJS, Bootstrap, for a New York based company.</p>

          <h2>Contact Details</h2>
          <p>
            Jose Daniel Berrocal Ramirez
            <br/>
            San Jose, Costa Rica
            <br/>
            (506) 86899169
            <br/>
            jdanielb1992@gmail.com
          </p>
        </Grid>
      </Grid>
    </div>
  )
}

export default About;