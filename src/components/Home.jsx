import React, { Component } from 'react'
import BG from './ImageBG.jsx'
import ContentBG from './ContentBG.jsx'
import About from './About.jsx'
import Info from './GeneralInfo.jsx'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
    
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ height: window.innerHeight });
  }
  
  render(){
    

      return (
          <div>
             <BG heightStyle={this.state.height}/>
             <ContentBG heightStyle={this.state.height}/>
             <About heightStyle={this.state.height}/>
             <Info heightStyle={this.state.height*2}/>
             
          </div>
      )
  }
}

export default Home;