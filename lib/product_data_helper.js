import {request} from './datocms'

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
    const GET_PRODUCT_DETAILS_QUERY = `query Product($productId: ItemId) {
      product(filter: {id: {eq: $productId}}) {
        id
        description
        isRecommended
        name
        price
        size
        weight
        productImage {
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
      }
}
    `
    const {product = {}} = await request(GET_PRODUCT_DETAILS_QUERY, {
        productId
    })
    return product
}

export const withExtractedResponsiveImage = product => {
    const responsiveImage =  product && product["productImage"] && product["productImage"].length > 0 ? product["productImage"][0].responsiveImage : null
    return {
        ...product,
        responsiveImage
    }
}