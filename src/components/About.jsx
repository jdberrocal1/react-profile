import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import profile from './../img/profile.png'

const About = () => {
  
  return (
    <div className="about" id="about">
      <Grid container spacing={40} justify="center">
        <Grid item xs={12} sm={3}>
            <div className="profile-img-container">
              <img src={profile}/>
            </div>
        </Grid>
        <Grid item xs={11} sm={8}>
          <h2>About Me</h2>

          <p>I am a developer passionate for software lifecycle, mostly for Frontend technologies, with the ability to learn and adapt to new technologies. With the faculty to work well, independently and comfortable in a distributed team and easily adaptable to different company cultures.</p>
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
            <br/>
            Skype: jdberrocal11
          </p>
          <p id="aboutEnd"></p>
        </Grid>
      </Grid>
    </div>
  )
}

export default About;