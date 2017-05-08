import React, { Component } from 'react'

import { render } from 'react-dom'
import Resume from '../Resume'
import * as styles from './resume.css'
import Details from '../shared/Details'
import Modifier from '../shared/Modifier'

// const modifierWrap = () =>


export default class Container extends Component {
  render() {
    return (
      <div>
        <div className={styles.app}>
          <div className={styles.left__column}>
            <Details />
          </div>
          <div className={styles.right__column}>
            <Resume />
          </div>
          <span className={styles.clearfix}></span>

        </div>
        <div className={styles.modifier__wrap}>
          <Modifier/>        
        </div>
      </div>
    )
  }
}

render(
    <Container />
  , document.body.appendChild(document.createElement('div'))
  )