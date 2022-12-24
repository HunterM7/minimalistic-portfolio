import React from 'react'

import styles from './Home.module.scss'

const Home = () => {
	return (
		<div className={styles.container}>
			<div className={styles.herobox}>
				<h2 className={styles.trans}>
					<span>Hello.</span>
				</h2>

				<h2 className={styles.trans}>
					<span>I am Anton</span>
				</h2>
			</div>
		</div>
	)
}

export default Home
