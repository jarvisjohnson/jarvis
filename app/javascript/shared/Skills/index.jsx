import React, { Component } from 'react'

import * as styles from './styles.css'
import resume from 'shared/content/resume.json'

const makeList = (m, i) => <li key={i}>{m}</li>

const mapTo = SomeComponent => (props, i) => 
  <SomeComponent key={i} {...props} />

const Skill = ({category, keywords}) =>
<div>
  <h3>{category}</h3>
  <ul className={styles.gridList}>
    {keywords.reduce((list, next, i, original) => {
      var halfway = Math.round(original.length / 2)

      if (i < halfway)
        list.push([next])
      else
        list[i - halfway].push(next)

      return list
    }, []).map((arr, i) =>
      <div key={i} className={styles.gridListColumn}>
        {arr.map(makeList)}
      </div>
    )}
  </ul>
</div>


const Skills = ({talents}) =>
  <div>
    {talents.map(mapTo(Skill))}
  </div>

export default () => <Skills {...resume} />