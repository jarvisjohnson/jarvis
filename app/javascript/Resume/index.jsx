import React, { Component } from 'react'

import * as styles from './styles.css'
import resume from '../shared/content/resume.json'
import { abbreviations as monthAbbrs } from 'shared/months'

const formatDateRange = ({startDate, endDate}) => {
	var start = new Date(startDate)
	var end = new Date(endDate)

	var formatDate = date => `${monthAbbrs[date.getUTCMonth()]} ${date.getUTCFullYear()}`
	return `${formatDate(start)} - ${formatDate(end)}`
}

const makeList = (m, i) => <li key={i}>{m}</li>

const majorList = (m, i) => <span key={i}>{m} </span>

const School = ({institution, area, studyType, startDate, endDate, gpa, majors}) =>
	<div className={styles.sectionItem}>
		<p className={styles.date}>{formatDateRange({startDate, endDate})}</p>
		<div className={styles.sectionContent}>
			<h3>{institution}</h3>
			<div>{area}, {studyType}, Majors: {majors.map(majorList)}</div>
		</div>
	</div>

const Job = ({
	company, 
	position, 
	website, 
	startDate, 
	endDate, 
	summary, 
	highlights
}) =>
	<div className={styles.sectionItem}>
		<p className={styles.date}>{formatDateRange({startDate, endDate})}</p>
		<div className={styles.sectionContent}>
			<h3>{position} <span className={styles.headerDetail}>{company}</span></h3>
			<ul className={styles.jobList}>
				{highlights.map(makeList)}
			</ul>
		</div>
	</div>

const mapTo = SomeComponent => (props, i) => 
	<SomeComponent key={i} {...props} />

const ResumeBody = ({formalEducation, continuingEducation, work, volunteer, skills}) =>
	<div className={styles.container} >

		<div className={styles.section} >
			<h2 className={styles.break}>Formal Education</h2>
			{formalEducation.map(mapTo(School))}
		</div>

		<div className={styles.section} >
			<h2 className={styles.break}>Ongoing Education</h2>
			{continuingEducation.map(mapTo(School))}
		</div>		

		<div >
			<h2 className={styles.break}>Professional Experience</h2>
			{work.map(mapTo(Job))}
		</div>


	</div>

export default class Resume extends Component {
  render() {
    return <ResumeBody {...resume} />
  }
}