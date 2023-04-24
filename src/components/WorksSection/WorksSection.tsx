import React from 'react'

// Styles
import styles from './WorksSection.module.scss'

interface IWorksSection {
  id: string
}

const WorksSection: React.FC<IWorksSection> = ({ id }) => {
  return (
    <section id={id} className={styles.wrapper}>
      WorksSection
    </section>
  )
}

export default WorksSection
