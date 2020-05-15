import React from "react";
import styled from 'styled-components'
import Layout from "../components/Layout/Layout";
import ProductGrid from "../components/Products/ProductGrid";

const IndexContainer = styled.div`
  padding: 3rem;
`

const dummyProducts = [...Array(8).keys()].map(key => {});
export default function Home() {
    return (
        <Layout showCarousel={true}>
            <IndexContainer style={{padding: '2rem'}}>
                <ProductGrid products={dummyProducts}></ProductGrid>
            </IndexContainer>
        </Layout>
    )
}