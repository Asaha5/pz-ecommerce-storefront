import React from 'react'
import {useRouter} from "next/router";
import Image from "../../components/Common/Image";
import {Pane, Text, Strong, Heading, Button} from "evergreen-ui";
import Layout from "../../components/Layout/Layout";
import QuantityInput from "../../components/Common/QuantityInput";
import useCartStatus from "../../lib/hooks/use_cart_status";

const Cart = () => {
    const router = useRouter()
    const [cartState, setCart] = useCartStatus()

    const onQuantityChange = (product, oldQuantity) => (quantity) => {
        setCart(product, quantity - oldQuantity)
    }

    const totalItems = cartState && cartState.reduce((acc, {quantity}) => {
        return acc + quantity
    }, 0)

    const totalPrice = Math.round(cartState && cartState.reduce((acc, {price, quantity}) => {
        return acc + (price * quantity)
    }, 0))

    const deliveryFee = 0

    return (
        <Layout style={{backgroundColor: '#FFFFFF'}}>
            {
                cartState && cartState.length > 0 ?
                    <div className='container'>
                        <div className='row justify-content-start no-gutters'>
                            <div className='col-xs-12 col-sm-12 col-md-8 col-lg-8'>
                                <div className='container-fluid'>
                                    {
                                        cartState.map(product => {
                                            const {name, price, quantity, thumbnails} = product
                                            const {responsiveImage} = thumbnails && thumbnails.length > 0 && thumbnails[0]
                                            return (
                                                <Pane
                                                    elevation={1}
                                                    hoverElevation={3}
                                                    float="left"
                                                    width={'100%'}
                                                    height={'auto'}
                                                    display="flex"
                                                    justifyContent="space-around"
                                                    padding={15}
                                                    style={{cursor: 'pointer'}}
                                                    marginTop={10}
                                                    background={'blueTint'}
                                                >
                                                    <div className='row w-100'>
                                                        <div
                                                            className='col-xs-12 col-sm-12 col-md-3 col-lg-2 d-flex justify-content-between align-content-center align-items-center p-1'>
                                                            <Image data={responsiveImage}/>
                                                        </div>
                                                        <div
                                                            className='col-xs-12 col-sm-12 col-md-4 col-lg-4 d-flex justify-content-between align-content-center align-items-center p-1'>
                                                            <Text size={400}>{name}</Text>
                                                        </div>
                                                        <div
                                                            className='col-sx-12 col-sm-12 col-md-2 col-lg-2 d-flex justify-content-between align-content-center align-items-center p-1'>
                                                            <Strong size={400}>{`$${price}`}</Strong>
                                                        </div>
                                                        <div
                                                            className='col-xs-12 col-sm-12 col-md-4 col-lg-4 d-flex justify-content-between align-content-center align-items-center mt-4 p-1'>
                                                            <QuantityInput quantity={quantity}
                                                                           onQuantityChange={onQuantityChange(product, quantity)}/>
                                                        </div>
                                                    </div>
                                                </Pane>
                                            )
                                        })
                                    }
                                    <div className='row'>
                                        <div className='col-12 p-3 d-flex justify-content-end'>
                                            <Button height={38} marginRight={10} appearance="primary" onClick={() => {
                                                router.push('/checkout').then(r => r)
                                            }}>
                                                PLACE ORDER
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4'>
                                <Pane elevation={1}
                                      hoverElevation={3}
                                      float="left"
                                      width={'100%'}
                                      height={'auto'}
                                      display="flex"
                                      flexDirection={'column'}
                                      justifyContent="space-around"
                                      padding={15}
                                      style={{cursor: 'pointer'}}
                                      marginTop={10}
                                      background={'blueTint'}
                                >
                                    <Heading size={500} style={{borderBottom: '1px solid #3c4257', padding: '.5rem 0'}}>Price Details</Heading>
                                    <div className='container-fluid p-2'>
                                        <div className='row p-2 justify-content-around'>
                                            <div className='col-6'>
                                                <Strong size={400}>{`Price(Total ${totalItems})`}</Strong>
                                            </div>
                                            <div className='col-6'>
                                                <Text size={500}>{`$${totalPrice}`}</Text>
                                            </div>
                                        </div>
                                        <div className='row p-2 justify-content-around'>
                                            <div className='col-6'>
                                                <Strong size={400}>Delivery Fee</Strong>
                                            </div>
                                            <div className='col-6'>
                                                <Text size={500}>{deliveryFee === 0 ? 'FREE' : deliveryFee}</Text>
                                            </div>
                                        </div>
                                        <div className='row p-2 justify-content-around'>
                                            <div className='col-6'>
                                                <Strong size={400}>Total Amount</Strong>
                                            </div>
                                            <div className='col-6'>
                                                <Text size={500}>{`$${deliveryFee + totalPrice}`}</Text>
                                            </div>
                                        </div>
                                    </div>
                                </Pane>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 p-5' style={{position: 'relative'}}>
                                <div style={{position: 'absolute', top: '40%', left: '40%'}}>
                                    <Heading size={700}>Your Cart Is Empty</Heading>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </Layout>
    )
}

export default Cart