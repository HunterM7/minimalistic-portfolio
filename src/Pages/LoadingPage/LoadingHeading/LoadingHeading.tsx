import React from 'react'
import cn from 'classnames'

// Styles
import styles from './LoadingHeading.module.scss'

interface ILoadingHeading {
  title: string
  stroked?: boolean
  classNames: string[]
}

const LoadingHeading: React.FC<ILoadingHeading> = ({
  title,
  stroked = false,
  classNames,
}) => {
  return (
    <h2 className={cn(styles.title, stroked && styles.stroked, ...classNames)}>
      {title}
    </h2>
  )
}

export default LoadingHeading
