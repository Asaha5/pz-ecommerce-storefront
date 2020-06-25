import React from 'react'
import {TextInputField, IconButton} from "evergreen-ui";

const QuantityInput = ({quantity, onQuantityChange}) => {
    const onHandleQuantityChange = (e) => {
        const value = e?.target?.value
        onQuantityChange(value || 0)
    }

    const handleClick = (step) => {
        onQuantityChange(quantity + step)
    }
    return (
        <div style={{display: "flex", justifyContent: "flex-start", alignContent: "flex-start"}}>
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
        </div>
    )
}

export default QuantityInput