import React from 'react'

// Assets
import { arrowBig } from 'assets/icons'

// Styles
import styles from './HeroSection.module.scss'

const HeroSection: React.FC = () => {
  return (
    <section className={styles.herobox}>
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
    </section>
  )
}

export default HeroSection
