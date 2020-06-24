import React, {useRef} from 'react'
import AliceCarousel from 'react-alice-carousel'
import styles from './main_carousel.module.scss'
import {Icon} from 'semantic-ui-react'

const images = [
    {
        src: "https://www.datocms-assets.com/28152/1592226245-carousel-4.png",
        // style: {'object-position': '0 80%'}
    },
    {
        src: "https://www.datocms-assets.com/28152/1592099498-carousel-2.png",
        // style: {'object-position': '0 35%'}
    },
    {
        src: "https://www.datocms-assets.com/28152/1592099822-carousel-3.jpg",
        style: {'object-position': '0 30%'}
    },
    {
        src: "https://www.datocms-assets.com/28152/1592226284-carousel-5.jpg",
        // style: {'object-position': '0 20%'}
    },
]

const MainCarousel = () => {
    const carouselRef = useRef(null)
    const handleOnDragStart = (e) => e.preventDefault()
    const items = images.map(
        ({src, style}) => <img className={styles.imgContainer} src={src} onDragStart={handleOnDragStart} style={style}/>
    )

    return (
        <div className='container'>
            <div className='row'>
                <div className='d-none d-sm-flex col-sm-2 align-items-center justify-content-end'>
                    <span className={styles.headerIconContainer} onClick={_ => {
                        carouselRef.current.slidePrev()
                    }}>
                       <Icon name='chevron circle left' size={'big'}></Icon>
                    </span>
                </div>
                <div className={`col-12 col-md-8 ${styles.mainCarouselContainer}`}>
                    <AliceCarousel
                        ref={carouselRef}
                        items={items}
                        mouseTrackingEnabled
                        buttonsDisabled={true}
                        autoPlayInterval={5000}
                        autoPlayDirection="rtl"
                        autoPlay={true}
                        disableAutoPlayOnAction={true}
                    >
                    </AliceCarousel>
                </div>
                <div className='d-none  d-sm-flex col-sm-2  align-items-center justify-content-start'>
                    <span className={styles.headerIconContainer} onClick={_ => {
                        carouselRef.current.slideNext()
                    }}>
                        <Icon name='chevron circle right' size={'big'}></Icon>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MainCarousel;