import React from 'react'

// Styles
import styles from './AwardsSection.module.scss'

interface IAwardsSection {
  id: string
}

const AwardsSection: React.FC<IAwardsSection> = ({ id }) => {
  return (
    <section id={id} className={styles.wrapper}>
      AwardsSection
    </section>
  )
}

export default AwardsSection
