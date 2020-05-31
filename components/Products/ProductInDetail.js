import React, {useState} from 'react'
import styled from "styled-components";
import Image from "../Common/Image";
import {Heading, Text, Strong, Paragraph} from 'evergreen-ui'
import QuantityInput from "../Common/QuantityInput";
import AppButton from "../Common/Button";
import {cart} from "../../lib/atoms";
import {useRecoilState} from 'recoil'
import useCartStatus from "../../lib/hooks/use_cart_status";

const PRODUCT_PROPERTIES = [
    {
        property: 'size',
        label: 'Size'
    },
    {
        property: 'weight',
        label: 'Weight'
    },
    {
        property: 'description',
        label: 'Description'
    }
]

const ThumbnailContainer = styled.div`
  cursor: pointer;
`

const ProductInDetail = ({product}) => {
    const [quantity, setQuantity] = useState(1)
    const [selectedImageIndex, setImageIndex] = useState(0)

    const {responsiveImage, name, price, thumbnails, allImages} = product
    const {responsiveImage: actualImage} = allImages ? allImages[selectedImageIndex] : {responsiveImage}

    const [cartState, setCart] = useCartStatus()

    const onAddToCart = () => {
        setCart(product, quantity)
    }

    return (
        <div className='container' style={{paddingTop: '2rem'}}>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <div className='d-flex flex-column align-content-between'>
                                    {
                                        thumbnails && thumbnails.map(({responsiveImage}, idx) => (
                                            <ThumbnailContainer onClick={e => {
                                                setImageIndex(idx)
                                            }} key={idx}>
                                                <Image data={responsiveImage} style={{padding: '.5rem 0'}}/>
                                            </ThumbnailContainer>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='col-md-9'>
                                {/*{responsiveImage && <Image data={responsiveImage}/>}*/}
                                {actualImage && <Image data={actualImage}/>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='container d-flex flex-column justify-content-around align-content-center'>
                        <div className='row'>
                            <div className='col align-self-center'>
                                <Heading size={700}>{name}</Heading>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col align-self-center mt-3'>
                                <Strong size={500}>{`$${price}`}</Strong>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col align-self-center mt-3'>
                                <QuantityInput quantity={quantity} onQuantityChange={setQuantity}/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col d-flex justify-content-start align-self-center mt-3'>
                                <AppButton title={"ADD TO CART"} iconRequired={true} icon={"add"} marginRight={10} onClick={onAddToCart}/>
                                <AppButton title={"BUY NOW"} iconRequired={false}/>
                            </div>
                        </div>
                        {
                            PRODUCT_PROPERTIES.map(({property, label}) => (
                                <div key={`${property}_key`} className='row'>
                                    <div className='col-md-3 mt-3'>
                                        <Strong size={400}>{`${label} :`}</Strong>
                                    </div>
                                    <div className='col-md-9 mt-3'>
                                        {
                                            property === 'description' ?
                                            <Paragraph size={400}>{product[property]}</Paragraph> :
                                            <Text size={400}>{product[property]}</Text>
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProductInDetail