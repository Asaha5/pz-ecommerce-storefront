import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import styled from 'styled-components'

const images = [
    {
        src: "/carousel_img_one.jpg",
        style: {'object-position': '0 80%'}
    },
    {
        src: "/carousel_img_two.jpg",
        style: {'object-position': '0 35%'}
    },
    {
        src: "/carousel_img_three.jpg",
        style: {'object-position': '0 20%'}
    },
]

const CarouselContainer = styled.div`
  display: flex;
  height: 450px;
  background-color: #F7D154;
  @media only screen and (max-width : 768px) {
    padding: 1rem 0;
    height: 200px;
  }
`

const ImageContainer = styled.img`
  height: 450px;
  width: 100%;
  object-fit: cover;
  @media only screen and (max-width : 768px) {
    height: 200px;
  }
`

const MainCarousel = () => {
    const handleOnDragStart = (e) => e.preventDefault()
    const items = images.map(
        ({src, style}) => <ImageContainer src={src} onDragStart={handleOnDragStart} style={style}/>
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