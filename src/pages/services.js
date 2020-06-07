
import React from 'react';
import { Link } from 'gatsby'

import Layout from '../components/layout';
import SEO from "../components/seo";

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <h1>Services</h1>
    <p>
      Services. Candid conversations with the most interesting and inspirational people that you’ve never heard of.
      </p>
    <Link to="/">Home Page</Link>
  </Layout>
);

export default ServicesPage;
