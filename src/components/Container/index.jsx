import clsx from 'clsx';

import style from './styles.module.scss'

export const Container = ({ className, children }) => {
  return (
    <div className={clsx(style.container, className)}>
      {children}
    </div>
  )
}