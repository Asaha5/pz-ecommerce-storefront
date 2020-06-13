import React, {useState} from 'react'
// import {loadStripe} from "@stripe/stripe-js";
// import {Elements} from "@stripe/react-stripe-js";
// import CheckoutForm from "../../components/Checkout/Checkout";
import Layout from "../../components/Layout/Layout";
import useCartStatus from "../../lib/hooks/use_cart_status";
import {Button, Heading, Pane, SelectField, Strong, Text, TextInputField} from "evergreen-ui";
import Image from "../../components/Common/Image";
import PaypalPanel from "../../components/Checkout/Payment";

const STATES = ['Australian Capital Territory', 'New South Wales', 'Northern Territory',
    'Queensland', 'South Australia', 'Tasmania', 'Victoria', 'Western Australia']

const Checkout = ({apiKey, paypalClientId}) => {
    const [cartState] = useCartStatus()
    const [deliveryDetails, setDeliveryDetails] = useState({
        firstName: {
            value: '',
            invalid: false
        },
        lastName: {
            value: '',
            invalid: false
        },
        email: {
            value: '',
            invalid: false
        },
        phone: {
            value: '',
            invalid: false
        },
        street: {
            value: '',
            invalid: false
        },
        street2: {
            value: '',
            invalid: false
        },
        city: {
            value: '',
            invalid: false
        },
        state: {
            value: '',
            invalid: false
        },
        postcode: {
            value: '',
            invalid: false
        }
    })

    const totalItems = cartState && cartState.reduce((acc, {quantity}) => {
        return acc + quantity
    }, 0)

    const totalPrice = Math.round(cartState && cartState.reduce((acc, {price, quantity}) => {
        return acc + (price * quantity)
    }, 0))

    const deliveryFee = 0

    const totalAmount = deliveryFee + totalPrice

    const onChange = ({target: {name, value}}) => {
        setDeliveryDetails(deliveryDetails => ({
            ...deliveryDetails,
            [name]: {
                value,
                invalid: !value || value === ''
            }
        }))
    }

    return (
        <Layout style={{backgroundColor: '#FFFFFF'}}>
            <>
                <div className='container-fluid px-5'>
                    <div className='row justify-content-start'>
                        <div className='col-xs-12 col-sm-12 col-md-7 col-lg-7'>
                            <Pane elevation={1}
                                  hoverElevation={2}
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
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <Heading size={500} style={{borderBottom: '1px solid #3c4257', padding: '.5rem 0'}}>Delivery Details</Heading>
                                        </div>
                                    </div>
                                    <div className='row mt-2 p-2'>
                                        <div className='col-6'>
                                            <TextInputField
                                                label="First Name"
                                                placeholder="Please enter your first name"
                                                required
                                                name='firstName'
                                                onChange={onChange}
                                                value={deliveryDetails['firstName'].value}
                                                isInvalid={deliveryDetails['firstName'].invalid}
                                            />
                                        </div>
                                        <div className='col-6'>
                                            <TextInputField
                                                label="Last Name"
                                                placeholder="Please enter your last name"
                                                required
                                                name='lastName'
                                                onChange={onChange}
                                                value={deliveryDetails['lastName'].value}
                                                isInvalid={deliveryDetails['lastName'].invalid}
                                            />
                                        </div>
                                        <div className='col-6'>
                                            <TextInputField
                                                label="Email Address"
                                                placeholder="email@address.com"
                                                required
                                                name='email'
                                                onChange={onChange}
                                                value={deliveryDetails['email'].value}
                                                isInvalid={deliveryDetails['email'].invalid}
                                            />
                                        </div>
                                        <div className='col-6'>
                                            <TextInputField
                                                label="Phone number"
                                                placeholder="04XX XXX XXX"
                                                required
                                                name='phone'
                                                onChange={onChange}
                                                value={deliveryDetails['phone'].value}
                                                isInvalid={deliveryDetails['phone'].invalid}
                                            />
                                        </div>
                                        <div className='col-12'>
                                            <TextInputField
                                                label="Street Address"
                                                placeholder="Street"
                                                required
                                                name={'street'}
                                                onChange={onChange}
                                                value={deliveryDetails['street'].value}
                                                isInvalid={deliveryDetails['street'].invalid}
                                            />
                                        </div>
                                        <div className='col-12'>
                                            <TextInputField
                                                label="Address 2"
                                                placeholder="A second line if you need it"
                                                required
                                                name={'street2'}
                                                onChange={onChange}
                                                value={deliveryDetails['street2'].value}
                                                isInvalid={deliveryDetails['street2'].invalid}
                                            />
                                        </div>
                                        <div className='col-12'>
                                            <TextInputField
                                                label="Suburb/City"
                                                placeholder="Enter your suburb or city"
                                                required
                                                name={'city'}
                                                onChange={onChange}
                                                value={deliveryDetails['city'].value}
                                                isInvalid={deliveryDetails['city'].invalid}
                                            />
                                        </div>
                                        <div className='col-6'>
                                            <SelectField width={'100%'} label='State' hint="Please select your state" name={'state'}
                                                         onChange={onChange} value={deliveryDetails['state'].value} isInvalid={deliveryDetails['state'].invalid}>
                                                {
                                                    STATES.map((state, idx) => {
                                                        return (
                                                            <option key={`${state}_${idx}`} value={state}>{state}</option>
                                                        )
                                                    })
                                                }
                                            </SelectField>
                                        </div>
                                        <div className='col-6'>
                                            <TextInputField
                                                type={'number'}
                                                label="Postcode"
                                                placeholder="Postcode"
                                                required
                                                name={'postcode'}
                                                onChange={onChange}
                                                value={deliveryDetails['postcode'].value}
                                                isInvalid={deliveryDetails['postcode'].invalid}
                                            />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-12 p-3 d-flex justify-content-center'>
                                            {/*<Button height={38} marginRight={10} appearance="primary" onClick={onProceedToPayment}>*/}
                                            {/*    PROCEED TO PAYMENT*/}
                                            {/*</Button>*/}
                                            <PaypalPanel value={totalAmount} paypalClientId={paypalClientId}/>
                                        </div>
                                    </div>
                                </div>
                            </Pane>
                        </div>
                        <div className='col-xs-12 col-sm-12 col-md-5 col-lg-5'>
                            <Pane elevation={1}
                                  hoverElevation={2}
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
                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <Heading size={500} style={{borderBottom: '1px solid #3c4257', padding: '.5rem 0'}}>Order Summary</Heading>
                                        </div>
                                    </div>
                                    {
                                        cartState.map(product => {
                                            const {name, price, quantity, thumbnails} = product
                                            const {responsiveImage} = thumbnails && thumbnails.length > 0 && thumbnails[0]

                                            return (
                                                <div className='row p-2 d-flex align-items-center'>
                                                    <div className='col-2'>
                                                        <Image data={responsiveImage}/>
                                                    </div>
                                                    <div className='col-6'>
                                                        <Text size={500}>{name}</Text>
                                                    </div>
                                                    <div className='col-3'>
                                                        <Text size={500}>{`${quantity} x $${price}`}</Text>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                    <div className='row mt-2'>
                                        <div className='col-12'>
                                            <Heading size={500} style={{borderBottom: '1px solid #3c4257', padding: '.5rem 0'}}>Price Details</Heading>
                                        </div>
                                    </div>
                                    <div className='row mt-1 p-2 justify-content-around'>
                                        <div className='col-7'>
                                            <Strong size={400}>{`Price(Total ${totalItems})`}</Strong>
                                        </div>
                                        <div className='col-3'>
                                            <Text size={500}>{`$${totalPrice}`}</Text>
                                        </div>
                                    </div>
                                    <div className='row p-2 justify-content-around'>
                                        <div className='col-7'>
                                            <Strong size={400}>Delivery Fee</Strong>
                                        </div>
                                        <div className='col-3'>
                                            <Text size={500}>{deliveryFee === 0 ? 'FREE' : deliveryFee}</Text>
                                        </div>
                                    </div>
                                    <div className='row p-2 justify-content-around'>
                                        <div className='col-7'>
                                            <Strong size={400}>Total Amount</Strong>
                                        </div>
                                        <div className='col-3'>
                                            <Text size={500}>{`$${totalAmount}`}</Text>
                                        </div>
                                    </div>
                                </div>
                            </Pane>
                        </div>
                    </div>
                </div>
            </>
        </Layout>
    )
}

export async function getStaticProps() {
    return {
        props: {
            apiKey: process.env.STRIPE_API_KEY,
            paypalClientId: process.env.PAYPAL_CLIENT_ID
        }
    }
}

export default Checkout