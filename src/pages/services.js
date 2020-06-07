
import React from 'react';
import { Link } from 'gatsby'

import Layout from '../components/layout';
import SEO from "../components/seo";

const ServicesPage = () => {
  return (
    <Layout>
      <SEO title="Page Services" />
      <h1>Services</h1>
      <p>
        Services. Candid conversations with the most interesting and inspirational people that you’ve never heard of. 
      </p>
      <Link to="/">Home Page</Link>
    </Layout>
  )
}

export default ServicesPage;
