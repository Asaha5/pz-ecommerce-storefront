import React from 'react'
import {Pane, Text, Strong, Card} from 'evergreen-ui'
import Image from "../Common/Image"
import AppButton from "../Common/Button"
import {useRouter} from 'next/router'
import Link from 'next/link'

const Product = ({id, url, name, rating, price, responsiveImage}) => {
    const router = useRouter()
    return (
        <Link href='/product/[id]' as={`/product/${id}`} passHref={true}>
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
                <Image data={responsiveImage}/>
                <Text size={400}>{name ? name : "A beautiful toy"}</Text>
                <Strong size={500} color={"#084B8A"}>{price ? `AUD ${price}` : `AUD 50`}</Strong>
                <Pane display="flex" padding={1} justifyContent="space-around">
                    <AppButton title={"ADD TO CART"} iconRequired={true} icon={"add"} marginRight={10}/>
                    <AppButton title={"BUY NOW"} iconRequired={false} />
                </Pane>
            </Card>
        </Link>
    )
}

export default Product;