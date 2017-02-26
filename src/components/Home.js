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
      <div className="home-body">
        <div className="row name around-xs">
          <div className="col-xs-12 col-md-6">
              <div className="box firstname dev-blue border">I<span className="dev-red">A</span>N</div>
          </div>
          <div className="col-xs-12 col-md-6">
              <div className="box lastname dev-gray">KHOR</div>
          </div>
        </div>

        <div className="row around-xs">
          <div className="col-xs-12">
              <div className="box in-transit dev-pink">... in transit ...</div>
          </div>
        </div>
      
      </div>

        
       
    )
  }
}

export default Home
