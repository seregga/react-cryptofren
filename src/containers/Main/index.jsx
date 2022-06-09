import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { MainScreen } from 'containers/Main/MainScreen';
import { About } from 'containers/Main/About';
import { Slider } from 'containers/Main/Slider';

import { AnimationFrameTop } from 'components/AnimationFrameTop';
import { AnimationFrameBottom } from 'components/AnimationFrameBottom';
import { AnimationFrameBottomSecond } from 'components/AnimationFrameBottomSecond';

import style from './styles.module.scss'
import { Quote } from './About/Quote/index';
import Light from '../../components/Light'
function Main() {
    return (
        <div className={style.background}>
            <AnimationFrameBottom />
            <Header />

            <MainScreen />
            <Quote />
            <About />
            <Slider />
            <Light />
            <Footer />
            <AnimationFrameTop />

            <AnimationFrameBottomSecond />
        </div>
    )
}

export default Main;