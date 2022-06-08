import { useState } from 'react';

import { Container } from 'components/Container';
import { Button } from 'components/Button';
import { SelectWithValue } from './SelectWithValue';
import { Icon } from 'components/Icon';
import logo from './logo.svg'
import bird from './bird.svg'

import birds_cloud from './birds_cloud.svg'
import style from './styles.module.scss'

export const MainScreen = () => {
    const [value, setValue] = useState(1)

    return (
        <section style={{ zIndex: 20 }}>
            <Container className={style.container}>
                {/* <div className={style.title}> */}
                {/* <img className={style.logo} src={logo} alt="logo" />
                    <img className={style.bird} src={bird} alt='bird' />
                    <img className={style.birds_cloud} src={birds_cloud} alt='bird' /> */}
                {/* <Icon.Bird className={style.bird}/> */}
                {/* </div> */}
                <div className={style.action}>
                    <SelectWithValue value={value} defaultValue={1} setValues={setValue} />
                    <Button.Default className={style.btn}>Mint</Button.Default>
                </div>
            </Container>
        </section>
    )
}