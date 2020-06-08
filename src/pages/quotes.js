
import React from "react";
import { Link } from "gatsby";
import JSONData from "../data/quotes.json";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Quotes = () => (
  <Layout>
    <SEO title="Quotes" />
    <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
      <ul>
        {JSONData.quotes.map(
          (quote, index) => <li key={`content_item_${index}`}>{quote.text}</li>
        )}
      </ul>
    </div>
    <Link to="/">Home Page</Link>
  </Layout>
);

export default Quotes;
