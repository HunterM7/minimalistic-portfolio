import React from 'react'

// Assets
import { arrowBig } from 'assets/icons'

// Styles
import styles from './HeroSection.module.scss'

const HeroSection: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>
        <span>Hello.</span>
      </h2>

      <h2 className={styles.title}>
        <span>I am Anton</span>
      </h2>

      <div className={styles.professions}>
        <div className={styles.professions__svg}>{arrowBig}</div>
        <div className={styles.professions__list}>
          <p className={styles.professions__item}>Frontend Developer</p>
          <p className={styles.professions__item}>UI/UX Designer</p>
          <p className={styles.professions__item}>Freelancer</p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
