import React, { Component } from 'react';
import '../css/style.css'
import TransitionGroup from 'react-addons-transition-group'
import Name from './Name'
import Comingsoon from './Comingsoon'

class Home extends Component {

  state = {
    shouldShowBox: false
  }

  toggleBox = () => {
    this.setState({
      shouldShowBox: !this.state.shouldShowBox
    })
  }

  componentDidMount(){
    this.toggleBox()
    setTimeout( this.haha, 4000)
  }

  haha = () => {
    console.log('haha')

  }

  render() {
    return (

      <div className="page">

        <TransitionGroup>
          { this.state.shouldShowBox && <Name /> }
          { this.state.shouldShowBox && <Comingsoon /> }
        </TransitionGroup>

      </div>
      
       
    )
  }
}

export default Home
