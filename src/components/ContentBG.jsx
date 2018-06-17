import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'

import facebook from './../img/facebook.png'
import github from './../img/github.png'
import instragram from './../img/instagram.png'
import linkedin from './../img/linkedin.png'
import twitter from './../img/twiter.png'
import skype from './../img/skype.png'
import scroll from './../img/scroll.png'

class ContentBG extends Component {
    constructor(props) {
      super(props);
      this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        window.scrollTo(0, this.props.heightStyle);
    }


    render(){
        let style = {
            top: this.props.heightStyle/3
        };
  
        return (
            <div className="home-info-container" style={style}>
                <h1>I'm Daniel Berrocal.</h1>
                <p>I'm a Costa Rica based <span>FullStack Developer.</span> Let's start scrolling and learn more <span>about me.</span></p>
                <hr/>
                <Grid container spacing={40} justify="center">
                    <Grid item xs={1}>
                        <a href="https://www.facebook.com/jdberrocal1"><img src={facebook} alt=""/></a>
                    </Grid>
                    <Grid item xs={1}>
                        <a href="https://www.github.com/jdberrocal1"><img src={github} alt=""/></a>
                    </Grid>
                    <Grid item xs={1}>
                        <a href="https://www.instagram.com/jdberrocal1"><img src={instragram} alt=""/></a>
                    </Grid>
                    <Grid item xs={1}>
                    <a href="https://www.linkedin.com/in/jdberrocal1/"><img src={linkedin} alt=""/></a>
                    </Grid>
                    <Grid item xs={1}>
                        <a href="https://www.twitter.com/jdberrocal1"><img src={twitter} alt=""/></a>
                    </Grid>
                    <Grid item xs={1}>
                        <a href="skype:jdberrocal11?userinfo"><img src={skype} alt=""/></a>
                    </Grid>
                </Grid>
                <a onClick={this.handleScroll}><img src={scroll} alt=""/></a>
            </div>
        )
    }
}

export default ContentBG;