import React, { Component } from 'react'

class Skill extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    let barStyle = {
        width: this.props.width
    }

    return (
        <div className="skill-container">
            <h3>{this.props.skill}</h3>
            <div className="skill-bar">
                <div style={barStyle}></div>
            </div>
        </div>
    )
  }
}

export default Skill;