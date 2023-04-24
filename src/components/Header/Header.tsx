import React from 'react'

// Components
import { HeaderLink } from 'components'

// Styles
import styles from './Header.module.scss'

const Header = () => {
  const links = [
    { title: 'work', link: 'work' },
    { title: 'awards', link: 'awards' },
    { title: 'contact me', link: 'contact-me' },
  ]

  return (
    <header className="container">
      <ul className={`container ${styles.wrapper}`}>
        {links.map(item => {
          return (
            <HeaderLink
              title={item.title}
              link={item.link}
              key={`headerlink ${item.title}`}
            />
          )
        })}
      </ul>
    </header>
  )
}

export default Header
