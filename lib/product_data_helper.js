import {request} from './datocms'

export const GET_PRODUCT_DETAILS_QUERY = `query Product($productId: ItemId) {
      product(filter: {id: {eq: $productId}}) {
        id
        description
        isRecommended
        name
        price
        size
        weight
        allImages: productImage {
          responsiveImage(imgixParams: { fit: fill  , w: 450, h: 450, auto: format }) {
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
          responsiveImage(imgixParams: {fit: max, w: 90, h: 70, auto: format}) {
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

export const getPossibleProductIds = async () => {
    const POSSIBLE_IDS_QUERY = `query AllProducts {
      allProducts {
        id
       }
    }
    `
    const {allProducts = []} = await request(POSSIBLE_IDS_QUERY)
    return allProducts
}

export const getProductInformation = async (productId) => {
    const {product = {}} = await request(GET_PRODUCT_DETAILS_QUERY, {
        productId
    })
    return product
}

export const withExtractedResponsiveImage = product => {
    const responsiveImage =  product && product["allImages"] && product["allImages"].length > 0 ? product["allImages"][0].responsiveImage : null
    return {
        ...product,
        responsiveImage
    }
}