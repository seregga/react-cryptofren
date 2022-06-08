import { Container } from 'components/Container';
import { Button } from 'components/Button';
import { Social } from 'components/Social';

import style from './styles.module.scss'

export const Header = () => {

  return (
    <Container>
      <header className={style.header}>
        <Social withGradient/>
        <Button.Default className={style.button}>Connect wallet</Button.Default>
      </header>
    </Container>
  )
}