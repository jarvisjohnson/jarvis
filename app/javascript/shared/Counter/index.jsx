import React, { Component } from 'react'

import * as styles from './styles.css'

export default class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 16,
      increment: 1,
      max: 24,
      min: 12
    }
  }

  increment() {
    let count = this.state.count;
    let increment = this.state.increment;
    let max = this.state.max;
    let newCount = count += increment;
    if (newCount <= max){
      this.setState({ count: newCount });
      document.body.style.fontSize = newCount + 'px';
    }
  }

  decrement() {
    let count = this.state.count;
    let increment = this.state.increment;
    let min = this.state.min;
    let newCount = count -= increment;
    if (newCount >= min){
      this.setState({ count: newCount });
      document.body.style.fontSize = newCount + 'px';
    }
  }

  updateIncrement(e) {
    let newIncrement = parseInt(e.target.value, 10);
    this.setState({ increment: newIncrement });

  }

  render() {

    return (
      <div className={styles.counter}>
        <h3>Font Size</h3>
        <div>
          <span>{this.state.count} px</span>
        </div>
        <button onClick={this.increment.bind(this)}>+</button>
        <button onClick={this.decrement.bind(this)}>-</button>
      </div>
    );
  }
}