import React from 'react'

import styles from './HeaderLink.module.scss'

const HeaderLink = ({ title, link }) => {
	return (
		<li className={styles.wrapper}>
			<a href={link} className={styles.link}>
				{title}
			</a>
		</li>
	)
}

export default HeaderLink
