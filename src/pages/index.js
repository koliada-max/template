import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import Seo from '../components/seo';
import '../styles/styles.sass';
import Responsive from '../components/Ui/Responsive/Responsive';

const IndexPage = () => {
  return (
    <Layout>
      <Seo title={'home'} />
      <Responsive />
    </Layout>
  );
};

export default IndexPage;

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
