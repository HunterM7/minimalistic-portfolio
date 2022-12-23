import React from 'react'

import styles from './LoadingPage.module.scss'

const LoadingPage = ({ title }) => {
	React.useEffect(() => {
		return () => {
			console.log('unmount')
		}
	}, [])

	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title_6}>{title}</h2>
			<h2 className={styles.title_5}>{title}</h2>
			<h2 className={styles.title_4}>{title}</h2>
			<h2 className={styles.title_3}>{title}</h2>
			<h2 className={styles.title_2}>{title}</h2>
			<h2 className={styles.title_1}>{title}</h2>
			<h2 className={styles.title_2}>{title}</h2>
			<h2 className={styles.title_3}>{title}</h2>
			<h2 className={styles.title_4}>{title}</h2>
			<h2 className={styles.title_5}>{title}</h2>
			<h2 className={styles.title_6}>{title}</h2>
		</div>
	)
}

export default LoadingPage

{
	/* <div className={styles.wrapper}>
			<h2 className={styles.title_6}>{title}</h2>
			<h2 className={styles.title_5}>{title}</h2>
			<h2 className={styles.title_4}>{title}</h2>
			<h2 className={styles.title_3}>{title}</h2>
			<h2 className={styles.title_2}>{title}</h2>
			<h2 className={styles.title_1}>{title}</h2>
			<h2 className={styles.title_2}>{title}</h2>
			<h2 className={styles.title_3}>{title}</h2>
			<h2 className={styles.title_4}>{title}</h2>
			<h2 className={styles.title_5}>{title}</h2>
			<h2 className={styles.title_6}>{title}</h2>
		</div> */
}
