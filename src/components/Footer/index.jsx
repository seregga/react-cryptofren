import { Social } from 'components/Social';
import { Container } from 'components/Container';
import { ButtonWithArrow } from 'components/Button/ButtonWithArrow';
import { Icon } from 'components/Icon';

import style from './styles.module.scss'

export const Footer = () => {
 
  const handleScrollToTop = () => {
      window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth'
  });
  }

  return (
    <footer >
      <Icon.TreesWithRiver className={style.image} />
      <div onClick={handleScrollToTop} className={style.footer}>
        <Container  className={style.container}>
          <Social/>
          <ButtonWithArrow  className={style.button} />
        </Container>
      </div>
    </footer>
  )
}