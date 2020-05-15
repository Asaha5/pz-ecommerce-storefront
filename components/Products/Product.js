import React from 'react'
import {Pane, Text, Strong} from 'evergreen-ui'
import Image from "../Common/Image"
import AppButton from "../Common/Button"

const Product = ({imgSrc, description, rating, price}) => {
    return (
        <Pane
            elevation={2}
            hoverElevation={3}
            float="left"
            width={400}
            height={500}
            margin={24}
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            flexDirection="column"
            padding={3}
            style={{cursor: 'pointer'}}
        >
            <Image src={imgSrc ? imgSrc : "/dummy_product.jpg"} width={'350px'} height={"350px"}/>
            <Text size={400}>{description ? description : "A beautiful toy"}</Text>
            <Strong size={500} color={"#084B8A"}>{price ? `₹${price}` : `₹3500`}</Strong>
            <Pane display="flex" padding={1} justifyContent="space-around">
                <AppButton title={"ADD TO CART"} iconRequired={true} icon={"add"} marginRight={10}/>
                <AppButton title={"BUY NOW"} iconRequired={false} />
            </Pane>
        </Pane>
    )
}

export default Product;