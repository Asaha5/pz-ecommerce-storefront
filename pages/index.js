import React from "react";
import styles from './index.module.scss'
import Layout from "../components/Layout/Layout";
import {request} from "../lib/datocms";
import useSWR from 'swr'
import MainCarousel from "../components/Common/Carousel/MainCarousel";
import Image from "../components/Common/Image"
import {Button} from 'semantic-ui-react'
import Slider from "../components/Common/Slider/Slider";
import Placeholder from "semantic-ui-react/dist/commonjs/elements/Placeholder";

const QUERY = `query AllProducts {
  allCategories {
    id
    name
    description
    categoryimage {
      responsiveImage(imgixParams: { fit: crop, h: 380, w: 380, auto: enhance}) {
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
  allProducts(filter: {isRecommended: {eq: "true"}}) {
    id
    isRecommended
    name
    price
    productId
    productCategory {
      id
      name
      description
      categoryId
    }
    actualImages: productImage {
      url
      responsiveImage(imgixParams: { fit: clip, w: 350, h: 300, auto: format}) {
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
  allUploads(filter: {filename: {matches: {pattern: "topsellers*"}}}) {
    responsiveImage(imgixParams: {fit: fill, w: 200, h: 150, auto: format}) {
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
    let categoryDetails
    let carouselImages
    let topSellers = []
    if (isPreviewMode) {
        const {data} = useSWR(isPreviewMode ? QUERY : null, request)
        carouselImages = data && data["allUploads"] ? data["allUploads"] : []
        if (data) {
            const {allCategories, allProducts, allUploads} = data
            categoryDetails = allCategories.map(({name, categoryimage: {responsiveImage}}) => ({
                name,
                productImage: responsiveImage
            }))
            topSellers = allUploads.map(({responsiveImage}) => responsiveImage)
        }

    } else {
        prepareRecommendedProducts(allProducts)
        carouselImages = allUploads
    }
    return (
        <Layout showCarousel={true} style={{backgroundColor: 'white'}} quantityInCart={0}>
            <div className={`container pt-2 ${styles.storefront}`}>
                <div className='row'>
                    <div className='col-12'>
                        <MainCarousel images={carouselImages}/>
                    </div>
                </div>
                <div className='row' style={{marginTop: '70px'}}>
                    <div className='col-12 d-flex justify-content-center'>
                        <h2 className={styles.header}>Shop By Categories</h2>
                    </div>
                </div>
                <div className='row pt-5'>
                    <div className='col-12'>
                        <div className={styles.productCategories}>
                            {
                                categoryDetails ? categoryDetails.map(({name, productImage}, idx) => {
                                    const description = name !== "Pre - Orders" && name !== "New Arrivals" ? name : ''
                                    return (
                                        <div key={`${name}_${idx}`} className={styles.categoryTile}>
                                            <Image data={productImage}/>
                                            <div className={styles.hoverDetails}>
                                                <p>{description}</p>
                                                <div className={styles.shopNow}>
                                                    <Button>Shop Now</Button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }) : [...Array(12).keys()].map(_ => {
                                    return (
                                        <Placeholder key={_} className={`${styles.skeleton} ${styles.skeletonSpecific}`}>
                                            <Placeholder.Image square/>
                                        </Placeholder>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='row' style={{marginTop: '70px'}}>
                    <div className='col-12 d-flex justify-content-center'>
                        <h2 className={styles.header}>Top Sellers</h2>
                    </div>
                </div>
                <div className='row pt-5'>
                    <div className='col-12' style={{height: '70px'}}>
                        <Slider itemsToShow={4} width={'100%'}>
                            {
                                topSellers && topSellers.map((seller, idx) => {
                                    return (
                                        <Image key={`seller_${idx}`} data={seller}/>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
                <div className='row pt-5' style={{height: '50px'}}>
                    <div className='col-12 d-flex justify-content-center'>
                        <h2 className={styles.header}>Top Reviews</h2>
                    </div>
                </div>
                <div className='row pt-5' style={{height: '150px'}}>
                    <div className='col-12'>

                    </div>
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
