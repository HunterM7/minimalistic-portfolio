import React from 'react'

// Assets 'n utils
import { homepageBlocks } from 'utils/constants'

// Components
import {
  HeroSection,
  WorksSection,
  AwardsSection,
  ContactsSection,
} from 'components'

// Styles
import styles from './HomePage.module.scss'

const HomePage: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <HeroSection />

        <WorksSection id={homepageBlocks[0].link} />

        <AwardsSection id={homepageBlocks[1].link} />

        <ContactsSection id={homepageBlocks[2].link} />
      </div>

      <div className={styles.noiseBG}></div>
    </main>
  )
}

export default HomePage
