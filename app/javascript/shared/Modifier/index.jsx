import React, { Component } from 'react'

import * as styles from './styles.css'
import Counter from 'shared/Counter'

export default class Modifier extends Component {
  render() {
    return (
      <div className={styles.modifier}>
        <Counter/>
      </div>
    )
  }
}
