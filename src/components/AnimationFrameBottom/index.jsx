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
                            <div className={style.cloud_bottom_top}></div>
                        </> : <>
                            <div className={style.clouds_static_background_bottom_white}></div>
                        </>}
                </div>
            </div>
        </>
    )
}