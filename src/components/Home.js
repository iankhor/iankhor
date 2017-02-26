import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../css/style.css'

class Home extends Component {

  render() {
    return (
      <div className="home-body">
        <div className="row name around-xs">
        <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={2000}
            transitionEnter={false}
            transitionLeave={false}
            className="border">
          <div className="col-xs-12 col-md-4">
              <div className="box firstname">I<span className="dev-red">A</span>N</div>
          </div>
      </ReactCSSTransitionGroup>
          
          <div className="col-xs-12 col-md-4">
              <div className="box lastname ">KHOR</div>
          </div>
        </div>

        <div className="row around-xs">
          <div className="col-xs-12">

            

              <div className="box in-transit">... <span className="dev-red">i</span>n tran<span className="dev-red">s</span>it ...</div>
          </div>
        </div>
      
      </div>

      

        
       
    )
  }
}

export default Home
