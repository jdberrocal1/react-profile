import React, { Component } from 'react'
import ContentBG from './ContentBG.jsx'
import About from './About.jsx'
import Info from './GeneralInfo.jsx'
import Skills from './Skills.jsx'

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    

      return (
          <div>
             <ContentBG/>
             <About/>
             <Info/>
             <Skills/>
          </div>
      )
  }
}

export default Home;