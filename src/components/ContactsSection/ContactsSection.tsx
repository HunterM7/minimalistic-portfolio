import React from 'react'

// Styles
import styles from './ContactsSection.module.scss'

interface IContactsSection {
  id: string
}

const ContactsSection: React.FC<IContactsSection> = ({ id }) => {
  return (
    <section id={id} className={styles.wrapper}>
      ContactsSection
    </section>
  )
}

export default ContactsSection
