import React from 'react'

import styles from './HomePage.module.scss'
import { arrowBig } from '../../assets/icons'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.herobox}>
        <h2 className={styles.herobox__title}>
          <span>Hello.</span>
        </h2>

        <h2 className={styles.herobox__title}>
          <span>I am Anton</span>
        </h2>

        <div className={styles.professions}>
          <div className={styles.professions__svg}>{arrowBig}</div>
          <div className={styles.professions__list}>
            <p className={styles.professions__item}>Developer</p>
            <p className={styles.professions__item}>UI/UX Designer</p>
            <p className={styles.professions__item}>Freelancer</p>
          </div>
        </div>
      </div>

      <div id="work" className={styles.bigbox}>
        box1
      </div>
      <div id="awards" className={styles.bigbox}>
        box2
      </div>
      <div id="contact-me" className={styles.bigbox}>
        box3
      </div>
      <div id="box4" className={styles.bigbox}>
        box4
      </div>
    </div>
  )
}

export default HomePage
