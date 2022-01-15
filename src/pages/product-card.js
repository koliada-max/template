import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import Seo from '../components/seo';
import '../styles/styles.sass';
import Responsive from '../components/Ui/Responsive/Responsive';
import ProductCardMain from '../components/Pages/ProductCard/ProductCardMain/ProductCardMain';
import { productData } from '../db/productData';

const ProductPage = () => {
  console.log(productData);
  return (
    <Layout>
      <Seo title={'product-card'} />
      <ProductCardMain productData={productData.main} />
      <Responsive />
    </Layout>
  );
};

export default ProductPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
