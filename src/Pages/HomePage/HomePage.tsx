import React from 'react'

// Assets 'n utils
import { homepageBlocks } from 'utils/constants'

// Components
import { HeroSection } from 'components'

// Styles
import styles from './HomePage.module.scss'

const HomePage: React.FC = () => {
  return (
    <main className={styles.main}>
      <HeroSection />

      <div id={homepageBlocks[0].link} className={styles.bigbox}>
        box1
      </div>
      <div id={homepageBlocks[1].link} className={styles.bigbox}>
        box2
      </div>
      <div id={homepageBlocks[2].link} className={styles.bigbox}>
        box3
      </div>
      <div id="box-4" className={styles.bigbox}>
        box4
      </div>
    </main>
  )
}

export default HomePage
