import React from "react";
import styled from 'styled-components'
import Layout from "../components/Layout/Layout";
import ProductGrid from "../components/Products/ProductGrid";
import {Heading} from "evergreen-ui";
import {request} from "../lib/datocms";
import useSWR from 'swr'

const QUERY = `query AllProducts {
  allProducts(filter: {isRecommended: {eq: "true"}}) {
    id
    isRecommended
    name
    price
    productId
    productCategory {
      name
      description
      categoryId
    }
    productImage {
      url
      responsiveImage(imgixParams: { fit: fill  , w: 350, h: 320, auto: format }) {
        srcSet
        webpSrcSet
        sizes
        src
        width
        height
        aspectRatio
        alt
        title
        base64
      }
    }
  }
}
`

const IndexContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  @media only screen and (max-width : 768px) {
    padding: 3rem 0;
  }
`

const prepareRecommendedProducts = allProducts => {
    return allProducts.map(product => {
        const url = product && product["productImage"] && product["productImage"].length > 0 ? product["productImage"][0].url : null
        const responsiveImage = product && product["productImage"] && product["productImage"].length > 0 ? product["productImage"][0].responsiveImage : null
        return {
            ...product,
            url,
            responsiveImage
        }
    })
}

const dummyProducts = [...Array(8).keys()].map(key => {});
export default function Home({data : {allProducts}, isPreviewMode}) {
    let topPicks = []
    if(isPreviewMode) {
        const {data} = useSWR(isPreviewMode ? QUERY: null, request)
        topPicks = prepareRecommendedProducts(data ? data["allProducts"] : [])
    }
    else {
        topPicks = prepareRecommendedProducts(allProducts)
    }

    return (
        <Layout showCarousel={true}>
            <IndexContainer>
                <Heading size={700} marginTop="default" style={{textAlign: 'center', fontWeight: 'bold',
                    fontFamily: '"Montserrat", sans-serif'}}>OUR PICKS</Heading>
                <ProductGrid products={topPicks}></ProductGrid>
            </IndexContainer>
        </Layout>
    )
}

export async function getStaticProps(context) {
    const isPreviewMode = process.env.NEXT_PUBLIC_PREVIEW_MODE_REQUIRED === 'TRUE'
    const data = !isPreviewMode ? await request(QUERY, {}, context?.preview) : {}
    return {
        props: { data, isPreviewMode }
    };
}
