import React from 'react'
import Layout from "../../components/Layout/Layout";
import ProductInDetail from "../../components/Products/ProductInDetail";
import {getProductInformation, getPossibleProductIds, withExtractedResponsiveImage} from '../../lib/product_data_helper'

export default ({product}) => {
    return (
        <Layout showCarousel={false} style={{backgroundColor: '#FFFFFF'}}>
            <ProductInDetail product={withExtractedResponsiveImage(product)}/>
        </Layout>
    )
}

export async function getStaticPaths() {
    const possibleProductIds = await getPossibleProductIds()
    const paths = possibleProductIds.map(({id}) => ({
        params: {
            id
        }
    }))
    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({params: {id}}) {
    const product = await getProductInformation(id)
    return {
        props: {
            product
        }
    }
}
