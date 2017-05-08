import React, { Component } from 'react'

import * as styles from './styles.css'

export default class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 16,
      increment: 1
    }
  }

  increment() {
    let count = this.state.count;
    let increment = this.state.increment;
    let newCount = count += increment;
    this.setState({ count: newCount });
    document.body.style.fontSize = newCount + 'px';
    console.log(newCount);
    console.log(document.body.style.fontSize);  
  }

  decrement() {
    let count = this.state.count;
    let increment = this.state.increment;
    let newCount = count -= increment;
    this.setState({ count: newCount });
    document.body.style.fontSize = newCount + 'px';
    console.log(newCount);
    console.log(document.body.style.fontSize);  
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