import React from "react";
import styled from 'styled-components'
import Layout from "../components/Layout/Layout";
import ProductGrid from "../components/Products/ProductGrid";

const IndexContainer = styled.div`
  padding: 3rem;
  @media only screen and (max-width : 768px) {
    padding: 3rem 0;
  }
`

const dummyProducts = [...Array(8).keys()].map(key => {});
export default function Home() {
    return (
        <Layout showCarousel={true}>
            <IndexContainer>
                <ProductGrid products={dummyProducts}></ProductGrid>
            </IndexContainer>
        </Layout>
    )
}