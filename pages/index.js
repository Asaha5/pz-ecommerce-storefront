import React from "react";
import styled from 'styled-components'
import Layout from "../components/Layout/Layout";
import ProductGrid from "../components/Products/ProductGrid";
import {Heading} from "evergreen-ui";
import {request} from "../lib/datocms";
import useSWR from 'swr'
import MainCarousel from "../components/Common/Carousel/MainCarousel";
import TopPicks from "../components/Products/TopPicks";

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
      responsiveImage(imgixParams: { fit: fill  , w: 350, h: 400, auto: format }) {
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
  allUploads(filter: {filename: {matches: {pattern: "carousel*"}}}) {
    responsiveImage(imgixParams: {fit: fill, w: 800, h: 300, auto: format}) {
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
export default function Home({data : {allProducts, allUploads}, isPreviewMode}) {
    let topPicks = []
    let carouselImages = []
    if(isPreviewMode) {
        const {data} = useSWR(isPreviewMode ? QUERY: null, request)
        topPicks = prepareRecommendedProducts(data ? data["allProducts"] : [])
        carouselImages = data && data["allUploads"] ? data["allUploads"] : []
    }
    else {
        topPicks = prepareRecommendedProducts(allProducts)
        carouselImages = allUploads
    }

    return (
        <Layout showCarousel={true} style={{backgroundColor: 'white'}}>
            <div className='d-flex flex-column px-5 py-2'>
                <MainCarousel images={carouselImages}/>
                <div className='d-flex flex-column p-3'>
                    <Heading size={700} marginTop="default" style={{textAlign: 'center', fontWeight: 'bold',
                        fontFamily: '"Montserrat", sans-serif'}}>OUR PICKS</Heading>

                    <ProductGrid products={topPicks}></ProductGrid>
                    {/*<TopPicks products={topPicks}/>*/}
                </div>
            </div>
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
