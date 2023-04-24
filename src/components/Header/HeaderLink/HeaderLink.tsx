import React from 'react'
import { Link } from 'react-scroll'

import styles from './HeaderLink.module.scss'

interface IHeaderLink {
  title: string
  link: string
}

const HeaderLink: React.FC<IHeaderLink> = ({ title, link }) => {
  return (
    <li className={styles.wrapper}>
      <Link
        to={link}
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        className={styles.link}
        activeClass={styles.active}
        // onSetActive={this.handleSetActive}
      >
        {title}
      </Link>
    </li>
  )
}

export default HeaderLink
