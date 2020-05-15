import React from 'react';
import ProductsContainer from "./styles";
import Product from "./Product";

const ProductGrid = ({products}) => {
    return (
        <ProductsContainer>
            {products.map(({...productProps}, idx) => (
                <Product key={idx} {...productProps} ></Product>
            ))}
        </ProductsContainer>
    )
}

export default ProductGrid;