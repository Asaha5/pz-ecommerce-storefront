import React from 'react'
import styled from "styled-components";
import Carousel from 'react-elastic-carousel'
import Arrow from "./Arrow";

const SliderContainer = styled.div`
  width: ${(props) => props.width ? props.width : '100%'};
  height: ${(props) => props.height ? props.height : '100%'};
  position: relative;
`

const Slider = ({children, itemsToShow, ...rest}) => {
    return (
        <SliderContainer>
            <Carousel itemPadding={[10, 10]} itemsToShow={itemsToShow} renderArrow={Arrow} breakPoints={[
                { width: 1, itemsToShow: 1 },
                { width: 550, itemsToShow: 1 },
                { width: 850, itemsToShow: 1 },
                { width: 1150, itemsToShow: 3, itemsToScroll: 2 },
                { width: 1450, itemsToShow: 3 },
                { width: 1750, itemsToShow: 4 },
            ]} renderPagination={({ pages, activePage, onClick }) =>  {
                return <div></div>
            }} {...rest}>
                {children}
            </Carousel>
        </SliderContainer>
    )
}

export default Slider