
import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const Service = ({ pageContext: { service } }) => (
  <Layout>
    <h1>{service.name}</h1>
    <h2>Abilities</h2>
    {/* <ul>
        {service.abilities.map(ability => (
          <li key={ability.name}>
            <Link to={`./service/${service.name}/ability/${ability.name}`}>
              {ability.name}
            </Link>
          </li>
        ))}
      </ul> */}
    <Link to="/services">Back to all Services</Link>
  </Layout>
);

export default Service;
