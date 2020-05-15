import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import styled from 'styled-components'

const CarouselContainer = styled.div`
  display: flex;
  height: 600px;
  @media only screen and (max-width : 768px) {
    padding: 1rem 0;
    height: 200px;
  }
`

const ImageContainer = styled.img`
  height: 600px;
  width: 100%;
  @media only screen and (max-width : 768px) {
    height: 200px;
  }
`

const MainCarousel = () => {
    const handleOnDragStart = (e) => e.preventDefault()
    const items = ["/carousel_img_one.png", "carousel_img_two.jpg", "carousel_img_three.jpg"].map(
        item => <ImageContainer src={item} onDragStart={handleOnDragStart}/>
    )
    const responsive = {
        0: {items: 1},
        1024: {items: 2},
    }
    return (
        <CarouselContainer>
            <AliceCarousel
                items={items}
                mouseTrackingEnabled
                buttonsDisabled={true}
                autoPlayInterval={2000}
                autoPlayDirection="rtl"
                autoPlay={true}
            >
            </AliceCarousel>
        </CarouselContainer>
    )
}

export default MainCarousel;