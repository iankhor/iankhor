import React , { Component } from 'react'
import TweenMax  from 'gsap'

class Name extends Component {
  componentWillEnter (callback) {
    const el = this.container;
    TweenMax.fromTo(el, 2.5, {y: 300, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
  }

  componentWillLeave (callback) {
    const el = this.container;
    TweenMax.fromTo(el, 0.3, {y: 0, opacity: 1}, {y: -100, opacity: 0, onComplete: callback});
  }

  render () {
    return <div className="name" ref={c => this.container = c}>I<div className="red-text">A</div>N KHOR</div>
  }
}

export default Name