import React, {useState} from 'react'
import Image from "../Common/Image";
import {Heading, Text, Strong, Paragraph} from 'evergreen-ui'
import QuantityInput from "../Common/QuantityInput";
import AppButton from "../Common/Button";

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

const ProductInDetail = ({product}) => {
    const [quantity, setQuantity] = useState(1)

    const {responsiveImage, name, price, size, weight, description} = product
    return (
        <div className='container' style={{paddingTop: '2rem'}}>
            <div className='row'>
                <div className='col-md-5'>
                    {responsiveImage && <Image data={responsiveImage}/>}
                </div>
                <div className='col-md-7'>
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
                                <AppButton title={"ADD TO CART"} iconRequired={true} icon={"add"} marginRight={10}/>
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