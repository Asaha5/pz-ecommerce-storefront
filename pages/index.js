import React from "react";
import styled from 'styled-components'
import Layout from "../components/Layout/Layout";
import ProductGrid from "../components/Products/ProductGrid";
import Product from "../components/Products/Product";
import {Button, Heading} from "evergreen-ui";
import {request} from "../lib/datocms";
import useSWR from 'swr'
import MainCarousel from "../components/Common/Carousel/MainCarousel";
import TopPicks from "../components/Products/TopPicks";
import Carousel from 'react-elastic-carousel'
import Slider from "../components/Common/Slider/Slider";

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
    actualImages: productImage {
      url
      responsiveImage(imgixParams: { fit: fill  , w: 350, h: 400, auto: format}) {
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
    thumbnails: productImage {
      url
      responsiveImage(imgixParams: {fit: fill, w: 50, h: 50, auto: format, bg: "EDF0F2"}) {
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

const ProductSliderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;
  background-image: url("https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80");
  background-color: #cccccc;
  height: 600px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: .5rem;
  margin-top: .5rem;
  @media only screen and (max-width : 768px) {
    flex-direction: column;
    height: 600px;
    padding: 0;
    margin-top: 1rem;
  }
`

const TextContainer = styled.div`
  text-align: left;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  @media only screen and (max-width : 768px) {
    display: none;
  }
`

const prepareRecommendedProducts = allProducts => {
    return allProducts.map(product => {
        const url = product && product["actualImages"] && product["actualImages"].length > 0 ? product["actualImages"][0].url : null
        const responsiveImage = product && product["actualImages"] && product["actualImages"].length > 0 ? product["actualImages"][0].responsiveImage : null
        return {
            ...product,
            url,
            responsiveImage
        }
    })
}

export default function Home({data: {allProducts, allUploads}, isPreviewMode}) {
    let topPicks = []
    let carouselImages = []
    if (isPreviewMode) {
        const {data} = useSWR(isPreviewMode ? QUERY : null, request)
        topPicks = prepareRecommendedProducts(data ? data["allProducts"] : [])
        carouselImages = data && data["allUploads"] ? data["allUploads"] : []
    } else {
        topPicks = prepareRecommendedProducts(allProducts)
        carouselImages = allUploads
    }
    return (
        <Layout showCarousel={true} style={{backgroundColor: 'white'}}>
            <div className='d-flex flex-column  py-2'>
                <MainCarousel images={carouselImages}/>
                <div className='d-flex flex-column py-5 align-content-between'>
                    <Heading size={700} marginTop="default" style={{
                        textAlign: 'center', fontWeight: 'bold',
                        fontFamily: '"Montserrat", sans-serif'
                    }}>
                        OUR PICKS
                    </Heading>
                    <ProductSliderContainer>
                        <div style={{width: '450px', position: 'relative'}}>
                            <TextContainer>
                                <h3>OUR BEST SELLING PRODUCTS</h3>
                                <Button height={50} iconAfter='circle-arrow-right'>View More</Button>
                            </TextContainer>

                        </div>
                        <div style={{width: '100%'}}>
                            <Slider itemsToShow={3} width={'100%'}>
                                {topPicks.map(({...productProps}, idx) => (
                                    <Product key={idx} {...productProps} ></Product>
                                ))}
                            </Slider>
                        </div>
                    </ProductSliderContainer>

                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps(context) {
    const isPreviewMode = process.env.NEXT_PUBLIC_PREVIEW_MODE_REQUIRED === 'TRUE'
    const data = !isPreviewMode ? await request(QUERY, {}, context?.preview) : {}
    return {
        props: {data, isPreviewMode}
    };
}
