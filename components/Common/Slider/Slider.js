import React from 'react'
import styles from './slider.module.scss'
import Carousel from 'react-elastic-carousel'
import Arrow from "./Arrow";

const Slider = ({children, itemsToShow, ...rest}) => {
    return (
        <div className={styles.sliderContainer}>
            <Carousel itemPadding={[10, 10]} itemsToShow={itemsToShow} renderArrow={Arrow} breakPoints={[
                { width: 1, itemsToShow: 1 },
                { width: 550, itemsToShow: 1 },
                { width: 850, itemsToShow: 4 },
                { width: 1150, itemsToShow: 4, itemsToScroll: 3 },
                { width: 1450, itemsToShow: 4 },
                { width: 1750, itemsToShow: 4 },
            ]} renderPagination={({ pages, activePage, onClick }) =>  {
                return <div></div>
            }} {...rest}>
                {children}
            </Carousel>
        </div>
    )
}

export default Slider