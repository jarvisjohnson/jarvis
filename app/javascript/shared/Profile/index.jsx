import React, { Component } from 'react'

import * as styles from './styles.css'
import resume from 'shared/content/resume.json'
import myImage from '../../images/jarvis-johnson-profile.jpg'

const makeList = (m, i) => <li key={i}>{m}</li>

const mapTo = SomeComponent => (props, i) => 
  <SomeComponent key={i} {...props} />

const Social = ({network, username, url}) =>
<div>
	{network}:
	<a href={url} target="_blank">
		{username}
	</a>
</div>

// Date.prototype.addDays = function(days) {
//   var dat = new Date(this.valueOf());
//   dat.setDate(dat.getDate() + days);
//   return dat;
// }

// var dat = new Date(2014, 6, 1);

				// {dat.addDays(70).toString()}

const getLocationString = ({city, region, postalCode}) =>
	`${city}, ${region} ${postalCode}`

const Profile = ({name, label, email, phone, website, summary, location, picture, socials}) =>
	<div className={styles.profile}>
		<img src={myImage} className={styles.profile_image}/>
		<h1>{name}</h1>
		<h3>{label}</h3>
		<ul className={styles.contact}>
			<li>
				{email}
			</li>
			<li>
				{phone}

			</li>
			<li>
				{getLocationString(location)}
			</li>
		</ul>
		{socials.map(mapTo(Social))}
	</div>

export default () => <Profile {...resume.basics} />