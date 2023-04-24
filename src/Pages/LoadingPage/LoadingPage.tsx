import React from 'react'

import styles from './LoadingPage.module.scss'
import LoadingHeading from './LoadingHeading/LoadingHeading'

interface ILoadingPage {
  title: string
}

const LoadingPage: React.FC<ILoadingPage> = ({ title }) => {
  return (
    <div className={styles.wrapper}>
      <LoadingHeading title={title} classNames={[styles['title--6']]} />
      <LoadingHeading title={title} classNames={[styles['title--5']]} />
      <LoadingHeading title={title} classNames={[styles['title--4']]} stroked />
      <LoadingHeading title={title} classNames={[styles['title--3']]} stroked />
      <LoadingHeading title={title} classNames={[styles['title--2']]} />
      <LoadingHeading title={title} classNames={[styles['title--1']]} />
      <LoadingHeading title={title} classNames={[styles['title--2']]} />
      <LoadingHeading title={title} classNames={[styles['title--3']]} stroked />
      <LoadingHeading title={title} classNames={[styles['title--4']]} stroked />
      <LoadingHeading title={title} classNames={[styles['title--5']]} />
      <LoadingHeading title={title} classNames={[styles['title--6']]} />
    </div>
  )
}

export default LoadingPage
