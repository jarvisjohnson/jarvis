import React, { Component } from 'react'

import * as styles from './styles.css'
import resume from 'shared/content/resume.json'

const makeList = (m, i) => <li key={i}>{m}</li>

const mapTo = SomeComponent => (props, i) => 
  <SomeComponent key={i} {...props} />

const Site = ({title, link, stack}) =>
<div>
  
  <a href={link} target="_blank">
    {title}
  </a>
  <br/>
  Stack: {stack.map(t => t)
          .reduce((prev, curr) => [prev, ', ', curr])}
</div>


const Project = ({category, sites}) =>
<div>
  <h3>{category}</h3>
    {sites.map(mapTo(Site))}
</div>


const Projects = ({projects}) =>
  <div>
    {projects.map(mapTo(Project))}
  </div>

export default () => <Projects {...resume} />