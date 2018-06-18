import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'

const Info = ({heightStyle}) => {
  let style = {
    top: heightStyle
  }
  
  return (
    <div className="general-info" style={style}>
      <Grid container spacing={40} justify="center">
        <Grid item xs={1}></Grid>
        <Grid item xs={11} sm={2}>
            <h2 className="title-left"><span>Education</span></h2>
        </Grid>
        <Grid item xs={10} sm={5}>
            <h2 className="title-right">Tecnológico de Costa Rica</h2>

            <p className="subtitle">Computer Engineering Degree <span>•</span> <em className="date">2015</em></p>
        </Grid>
      </Grid>
      <hr/>
      <Grid container spacing={40} justify="center">
        <Grid item xs={1}></Grid>
        <Grid item xs={11} sm={2}>
            <h2 className="title-left"><span>Work</span></h2>
        </Grid>
        <Grid item xs={10} sm={5}>
            <h2 className="title-right">BeenVerified</h2>
            <p className="subtitle">FullStack Developer <span>•</span> <em className="date">May 2018 - Present</em></p>
            <p>New York based company, founded in 2007, BeenVerified is a background check company that provides consumer initiated criminal background and people search services through its website for profit.</p>

            <br/>
            <h2 className="title-right">Avantica Tehcnologies</h2>
            <p className="subtitle">Software Engineer<span>•</span> <em className="date">February 2015 - April 2018</em></p>
            <p>Avantica is software development company, with more than 20 years operating and 7 diferent locations, incluiding Silicon Valey and New York in United States, San Carlos, San Jose, Liberia and Cartago in Costa Rica, Peru and Bolivia.</p>

        </Grid>
      </Grid>
    </div>
  )
}

export default Info;