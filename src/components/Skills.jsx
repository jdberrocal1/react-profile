import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Skill from './Skill.jsx'

const Skills = () => {
  
  return (
    <div className="skills" >
      <Grid container spacing={40} justify="center" >
        <Grid item xs={12} sm={3}>
            <h2 className="title-left"><span>Skills</span></h2>
        </Grid>
        <Grid item xs={11} sm={8}>
            <p className="subtitle">For more than 3 years, I have been working in different kind of projects with different kind of customers and technologies. Most of the experience have been in web development, working in the Frontend side and the Backend side as well.</p>
            <p className="subtitle">As part of my knowledge this are my technical skills</p>

            <Skill width="80%" skill="Javascript"/>
            <Skill width="75%" skill="Git"/>
            <Skill width="70%" skill="AngularJS"/>
            <Skill width="60%" skill="HTML"/>
            <Skill width="50%" skill="CSS"/>
            <Skill width="50%" skill="React"/>
            <Skill width="50%" skill="VueJS"/>
            <Skill width="30%" skill="EmberJS"/>
            <Skill width="60%" skill="C#"/>
            <Skill width="50%" skill="NodeJS"/>
            <Skill width="40%" skill="Ruby & Rails"/>
        </Grid>
      </Grid>
    </div>
  )
}

export default Skills;