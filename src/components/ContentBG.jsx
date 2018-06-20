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
      this.state = { windowHeight: window.innerHeight };
    }

    handleScroll() {
        window.scrollTo(0, this.state.windowHeight);
    }

    render(){  
        return (
            <div className="home-info-container">
                <div className="content">
                    <h1>I'm Daniel Berrocal.</h1>
                    <p>I'm a Costa Rica based <span>FullStack Developer.</span> Let's start scrolling and learn more <span>about me.</span></p>
                    <hr/>
                    <Grid container spacing={0} justify="center">
                        <Grid item xs={2} sm={1}>
                            <a href="https://www.facebook.com/jdberrocal1"><img src={facebook}/></a>
                        </Grid>
                        <Grid item xs={2} sm={1}>
                            <a href="https://www.github.com/jdberrocal1"><img src={github}/></a>
                        </Grid>
                        <Grid item xs={2} sm={1}>
                            <a href="https://www.instagram.com/jdberrocal1"><img src={instragram}/></a>
                        </Grid>
                        <Grid item xs={2} sm={1}>
                        <a href="https://www.linkedin.com/in/jdberrocal1/"><img src={linkedin}/></a>
                        </Grid>
                        <Grid item xs={2} sm={1}>
                            <a href="https://www.twitter.com/jdberrocal1"><img src={twitter}/></a>
                        </Grid>
                    </Grid>
                    <a onClick={this.handleScroll} style={{top: this.state.windowHeight-400}} className="scroll-link"><img src={scroll}/></a>
                </div>
            </div>
        )
    }
}

export default ContentBG;