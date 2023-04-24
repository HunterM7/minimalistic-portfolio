import React from 'react'

// Utils
import { homepageBlocks } from 'utils/constants'

// Components
import { HeaderLink } from 'components'

// Styles
import styles from './Header.module.scss'

const Header = () => {
  const headerLinks = homepageBlocks.map(item => (
    <HeaderLink title={item.title} link={item.link} key={item.link} />
  ))

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>{headerLinks}</nav>
    </header>
  )
}

export default Header
