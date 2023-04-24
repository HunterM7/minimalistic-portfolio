import React, { ReactElement } from 'react'

// Components
import LoadingHeading from './LoadingHeading/LoadingHeading'

// Styles
import styles from './LoadingPage.module.scss'

interface ILoadingPage {
  title: string
}

const LoadingPage: React.FC<ILoadingPage> = ({ title }) => {
  return (
    <section className={styles.wrapper}>
      <LoadingHeading title={title} classNames={[styles.text_6]} />
      <LoadingHeading title={title} classNames={[styles.text_5]} />
      <LoadingHeading title={title} classNames={[styles.text_4]} stroked />
      <LoadingHeading title={title} classNames={[styles.text_3]} stroked />
      <LoadingHeading title={title} classNames={[styles.text_2]} />
      <LoadingHeading title={title} classNames={[styles.text_1]} />
      <LoadingHeading title={title} classNames={[styles.text_2]} />
      <LoadingHeading title={title} classNames={[styles.text_3]} stroked />
      <LoadingHeading title={title} classNames={[styles.text_4]} stroked />
      <LoadingHeading title={title} classNames={[styles.text_5]} />
      <LoadingHeading title={title} classNames={[styles.text_6]} />
    </section>
  )
}

export default LoadingPage
