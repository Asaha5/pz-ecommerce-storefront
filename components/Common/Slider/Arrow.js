import React from 'react'
import styled from 'styled-components'
import {consts} from 'react-elastic-carousel'
import {ArrowRightIcon, ArrowLeftIcon} from "evergreen-ui";

const ArrowContainer = styled.div`
  display: flex;
  position: absolute;
  top: 40%;
  ${({direction}) => (direction === consts.NEXT) && `right: 3px`};
  ${({direction}) => (direction === consts.PREV) && `left: 3px`};
  height: 50px;
  width: 50px;
  padding: .5rem;
  justify-content: center;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.1s;
  &:hover {
    transform: scale(1.1);
  }
  z-index: 100;
`

const Arrow = ({ type, onClick, isEdge}) => {
    const icon = type === consts.PREV ? <ArrowLeftIcon/> : <ArrowRightIcon/>
    return (
        <ArrowContainer direction={type} onClick={onClick}>
            {icon}
        </ArrowContainer>
    )
}

export default Arrow