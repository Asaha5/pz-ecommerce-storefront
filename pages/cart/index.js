import React from 'react'
import {useRecoilState} from 'recoil'
import {cart} from "../../lib/atoms";
import Image from "../../components/Common/Image";
import {Pane, Text, Strong} from "evergreen-ui";
import Layout from "../../components/Layout/Layout";
import QuantityInput from "../../components/Common/QuantityInput";
import useCartStatus from "../../lib/hooks/use_cart_status";

const Cart = () => {
    const [cartState, setCart] = useCartStatus()

    const onQuantityChange = (product, oldQuantity) => (quantity) => {
        setCart(product, quantity - oldQuantity)
    }

    return (
        <Layout style={{backgroundColor: '#FFFFFF'}}>
            <div className='container py-4'>
                {
                    cartState.map(product => {
                        const {name, price, quantity, thumbnails} = product
                        const {responsiveImage} = thumbnails && thumbnails.length > 0 && thumbnails[0]
                        return (
                            <Pane
                                elevation={1}
                                hoverElevation={2}
                                float="left"
                                width={'100%'}
                                height={'auto'}
                                display="flex"
                                justifyContent="space-around"
                                padding={15}
                                style={{cursor: 'pointer'}}
                                marginTop={10}
                            >
                            <div className='row w-100'>
                                <div className='col-sx-12 col-sm-12 col-md-3 col-lg-3 d-flex justify-content-between align-content-center align-items-center'>
                                    <Image data={responsiveImage} />
                                </div>
                                <div className='col-sx-12 col-sm-12 col-md-3 col-lg-3 d-flex justify-content-between align-content-center align-items-center'>
                                    <Text size={500}>{name}</Text>
                                </div>
                                <div className='col-sx-12 col-sm-12 col-md-2 col-lg-2 d-flex justify-content-between align-content-center align-items-center'>
                                    <Strong size={400}>{`$${price}`}</Strong>
                                </div>
                                <div className='col-sx-12 col-sm-12 col-md-2 col-lg-2 d-flex justify-content-end align-content-center align-items-center mt-4'>
                                    {/*<Text size={400}>{quantity}</Text>*/}
                                    <QuantityInput quantity={quantity} onQuantityChange={onQuantityChange(product, quantity)}/>
                                </div>
                            </div>
                            </Pane>
                        )
                    })
                }
            </div>
        </Layout>
    )
}

export default Cart