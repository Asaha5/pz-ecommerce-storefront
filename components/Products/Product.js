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
            <Pane
                elevation={2}
                float="left"
                width={350}
                height={500}
                margin={24}
                display="flex"
                justifyContent="space-evenly"
                alignItems="center"
                flexDirection="column"
                paddingX={10}
                style={{cursor: 'pointer'}}
                background={'#F9F9FB'}
            >
                <Image data={responsiveImage}/>
                <Text size={400} color={'#234361'} style={{textAlign: 'center'}}>{name}</Text>
                <Strong size={500} color={"#234361"}>{price ? `$${price}` : `$ 50`}</Strong>
                <Pane display="flex" padding={1} justifyContent="space-around">
                    <AppButton title={"ADD TO CART"} iconRequired={true} icon={"add"} marginRight={10}/>
                    <AppButton title={"BUY NOW"} iconRequired={false} />
                </Pane>
            </Pane>
        </Link>
    )
}

export default Product;