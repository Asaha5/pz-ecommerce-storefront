import React from 'react'
import { useRouter } from 'next/router'
import Layout from "../../components/Layout/Layout";
import ProductInDetail from "../../components/Products/ProductInDetail";
import {
    getProductInformation,
    getPossibleProductIds,
    withExtractedResponsiveImage,
    GET_PRODUCT_DETAILS_QUERY
} from '../../lib/product_data_helper'
import useSWR from "swr";
import {request} from "../../lib/datocms";

const memo = new Map()
const creatVariable = productId => {
    if(memo.has(productId)){
        return memo.get(productId)
    }
    const variable = {
        productId
    }
    memo.set(productId, variable)
    return variable
}

export default ({product, isPreviewMode}) => {
    let productToProcess = product
    const {query: {id}} = useRouter()
    if (isPreviewMode) {
        const variable = creatVariable(id)
        const {data} = useSWR([GET_PRODUCT_DETAILS_QUERY, variable], request)
        if(data){
            const {product: latestProduct} = data
            productToProcess = latestProduct
        }
    }
    return (
        <Layout showCarousel={false} style={{backgroundColor: '#FFFFFF'}}>
            <ProductInDetail product={withExtractedResponsiveImage(productToProcess)}/>
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
    const isPreviewMode = process.env.NEXT_PUBLIC_PREVIEW_MODE_REQUIRED === 'TRUE'
    const product = await getProductInformation(id)
    return {
        props: {
            product,
            isPreviewMode
        }
    }
}
