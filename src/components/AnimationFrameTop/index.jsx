import React from 'react'
import style from './styles.module.scss'

export const AnimationFrameTop = () => {
    return (
        <>
            <div className={style.container}>
                <div class={style.clouds_group_background}></div>
                <div class={style.logo_group}></div>
                <div class={style.clouds_group_background_mobile}></div>
            </div>
        </>
    )
}