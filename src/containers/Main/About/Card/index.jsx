import style from './styles.module.scss'

export const Card = ({ title, text }) => {

  return (
    <div className={style.card}>
      <div className={style.title}>
        <p>
          {title}
        </p>
      </div>
      <div className={style.text}>
        <p>
          {text}
        </p>
      </div>
    </div>
  )
}