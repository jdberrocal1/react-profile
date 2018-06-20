import React, { Component } from 'react'
import ContentBG from './ContentBG.jsx'
import About from './About.jsx'
import Info from './GeneralInfo.jsx'

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
          </div>
      )
  }
}

export default Home;