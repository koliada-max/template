import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import Seo from '../components/seo';
import '../styles/styles.sass';
// import Responsive from '../components/Ui/Responsive/Responsive';
import HomeMain from '../components/Pages/Home/HomeMain/HomeMain';
import HomeOrderSection from '../components/Pages/Home/HomeOrderSection/HomeOrderSection';
import HomeBenefitsSection from '../components/Pages/Home/HomeBenefitsSection/HomeBenefitsSection';
import HomeCatalog from '../components/Pages/Home/HomeCatalog/HomeCatalog';
import HomeVideoSection from '../components/Pages/Home/HomeVideoSection/HomeVideoSection';
import HomeAbout from '../components/Pages/Home/HomeAbout/HomeAbout';
import HomePartners from '../components/Pages/Home/HomePartners/HomePartners';
import HomeSteps from '../components/Pages/Home/HomeSteps/HomeSteps';
import HomeGalery from '../components/Pages/Home/HomeGalery/HomeGalery';

import { homeData } from '../db/homeData';


const IndexPage = () => {
  
  return (
    <Layout>
    <Seo title={'home'} />
    <HomeMain mainData={homeData.home_main} />
    <HomeOrderSection orderData={homeData.home_order} />
    <HomeBenefitsSection benefitsData={homeData.home_benefits} />
    <HomeCatalog catalogData={homeData.home_catalog} />
    <HomeVideoSection videoData={homeData.home_video }/>
    <HomeAbout aboutData={homeData.home_about} />
    <HomePartners partnersData={homeData.home_partners} />
    <HomeSteps stepsData={homeData.home_steps} />
    <HomeGalery galeryData={homeData.home_galery} />
    {/* <Responsive /> */}
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
