import React from 'react'
import {Pane, Text, Strong, Card} from 'evergreen-ui'
import Image from "../Common/Image"
import AppButton from "../Common/Button"

const Product = ({url, name, rating, price, responsiveImage}) => {
    return (
        <Card
            elevation={3}
            float="left"
            width={'auto'}
            height={500}
            margin={24}
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            flexDirection="column"
            paddingX={15}
            paddingY={10}
            style={{cursor: 'pointer'}}
            background={'tint1'}
            border
        >
            {/*<Image src={url ? url : "/dummy_product.jpg"} width={'90%'} height={"350px"}/>*/}
            <Image data={responsiveImage}/>
            <Text size={400}>{name ? name : "A beautiful toy"}</Text>
            <Strong size={500} color={"#084B8A"}>{price ? `AUD ${price}` : `AUD 50`}</Strong>
            <Pane display="flex" padding={1} justifyContent="space-around">
                <AppButton title={"ADD TO CART"} iconRequired={true} icon={"add"} marginRight={10}/>
                <AppButton title={"BUY NOW"} iconRequired={false} />
            </Pane>
        </Card>
    )
}

export default Product;