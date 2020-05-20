import React, {useState} from 'react'
import styled from 'styled-components'
import {TextInputField, IconButton} from "evergreen-ui";

const QuantityInputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: center;
`

const QuantityInput = ({quantity, onQuantityChange}) => {
    const onHandleQuantityChange = (e) => {
        const value = e?.target?.value
        onQuantityChange(value || 0)
    }

    const handleClick = (step) => {
        onQuantityChange(quantity + step)
    }
    return (
        <QuantityInputContainer>
            <IconButton icon="minus" intent="none" appearance="minimal" iconSize={26} marginRight={5} marginTop={2}
                onClick = {e => {
                    handleClick(-1)
                }}/>
            <TextInputField
                label={''}
                placeholder="Quantity"
                type={'number'}
                min={1}
                value={quantity}
                onChange={onHandleQuantityChange}
            />
            <IconButton icon="plus" intent="none" appearance="minimal" iconSize={26} marginLeft={5} marginTop={2}
                onClick = {e => {
                    handleClick(1)
                }}/>
        </QuantityInputContainer>
    )
}

export default QuantityInput