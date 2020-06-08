
import React from 'react';
import { Link } from 'gatsby'

import Layout from '../components/layout';
import ServicesData from './quotes';
import AllServices from '../templates/all-services';
import SEO from "../components/seo";

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <AllServices />
    <Link to="/">Home Page</Link>
  </Layout>
);

export default ServicesPage;
