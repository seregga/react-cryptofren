import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import { Button } from 'components/Button';

import 'swiper/css'
import style from './styles.module.scss'

import { SLIDER_CARDS } from 'constants/slider_cards';

export const SliderWithCard = ({ setOpenedVideo }) => {

  const pagination = {
    clickable: true,
    el: '.swiper-pagination',
    renderBullet: function (index, className) {
      return '<div class="' + className + '">' + '</div>'
    },
  }

  return (
    <div className={style.content}>
      <div className="swiper-button-prev">
        <Button.WithArrow className={style.prev}/>
      </div>
      <div className="swiper-button-next">
        <Button.WithArrow className={style.next}/>
      </div>
      <Swiper
        className="swiper-cards"
        spaceBetween={50}
        slidesPerView={1}
        pagination={pagination}
        modules={[Pagination, Navigation]}
        loop
        centeredSlides
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          1025: {
            width: 500,
            slidesPerView: 1,
          }
        }}
      >{SLIDER_CARDS.map(({ image, id }) => (
        <SwiperSlide key={id}>
          <img className={style.image} onClick={() => setOpenedVideo(id)} src={image} alt={id}/>
        </SwiperSlide>
      ))}
      </Swiper>
      <div className="swiper-pagination"/>
    </div>
  )
}
