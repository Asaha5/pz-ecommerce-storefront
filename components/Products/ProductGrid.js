import React from 'react';
import ProductsContainer from "./styles";
import Product from "./Product";

const ProductGrid = ({products}) => {
    return (
        <ProductsContainer>
            {products.map(({...productProps}) => (
                <Product {...productProps} ></Product>
            ))}
        </ProductsContainer>
    )
}

export default ProductGrid;