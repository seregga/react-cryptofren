import style from './styles.module.scss'
import useWindowSize from '../../hooks/useWindowSize'

export const AnimationFrameBottom = () => {
    const { width } = useWindowSize()
    return (
        <>
            <div className={style.container}>
                <div className={style.wrapper}>
                    {width >= 575 ?
                        <>
                            <img src='assets/img/cloud_bottom_top.png' alt='clouds_bottom' />
                            <img src='assets/img/cloud_bottom_top.png' alt='clouds_bottom' />
                        </> : <>
                            <img src='assets/img/cloud_mobile.png' alt='clouds_bottom' />
                            <img src='assets/img/cloud_mobile.png' alt='clouds_bottom' />
                        </>}
                </div>
            </div>
        </>
    )
}