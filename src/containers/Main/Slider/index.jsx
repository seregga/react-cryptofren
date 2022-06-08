import { useState } from 'react';

import { Container } from 'components/Container';
import { VideoModal } from 'components/VideoModal';
import { SliderWithCard } from './SliderWithCard';

import style from './styles.module.scss'

export const Slider = () => {
  const [openedVideo, setOpenedVideo] = useState(null)

  return (
    <section>
      <Container>
        {openedVideo !== null && <VideoModal id={openedVideo} setOpenedVideo={setOpenedVideo}/>}
        <div className={style.slider}>
          <SliderWithCard setOpenedVideo={setOpenedVideo}/>
          <div className={style.description}>
            <div className={style.title}>
              <span className={style.content}>Made with love</span>
              <span className={style.artist}>by jimipencils</span>
            </div>
            <div className={style.text}>
              <p>
                <img className={style.avatar} src="/assets/img/slider/avatar.png" alt="avatar"/>
                Im a visual artist, painter and parttime degen. My genuine love for cryptotwitter, stories and people
                that
                made it so legendary inspired me to do Cryptofrenz. I always was a collector, a gamer, raised on MTG
                Card
                games and building decks was my passion. I want to share with you all that happened to me and this
                blessed
                community on the way up only.
              </p>
              <img className={style.sign} src="/assets/img/slider/sign.png" alt="sign"/>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}