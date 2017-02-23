import React , { Component } from 'react'
import TweenMax  from 'gsap'

class Comingsoon extends Component {
  componentWillEnter (callback) {
    const el = this.container;
    TweenMax.fromTo(el, 3, {y: 0, opacity: 0}, {y: -400, opacity: 1, onComplete: callback});
  }

  componentWillLeave (callback) {
    const el = this.container;
    TweenMax.fromTo(el, 0.3, {y: 0, opacity: 1}, {y: -100, opacity: 0, onComplete: callback});
  }

  render () {
    return <div className="comingsoon" ref={c => this.container = c}>...on my way...</div>
  }
}

export default Comingsoon