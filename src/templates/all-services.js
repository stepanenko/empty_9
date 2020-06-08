
import React from 'react';
import { Link } from 'gatsby';
// import PropTypes from "prop-types";

const data = [
  { name: 'Branding' }, 
  { name: 'Design' }, 
  { name: 'Website' }
];

const AllServices = () => (
  <div>
    <h1>Choose a service</h1>
    <ul style={{ padding: 0 }}>
      {data.map(service => (
        <li
          key={service.id}
          style={{
            textAlign: 'center',
            listStyle: 'none',
            display: 'inline-block'
          }}>
          <Link to={`/service/${service.name}`}>
            <p>{service.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

// AllServices.propTypes = {
//   data: PropTypes.array,
// };

// AllServices.defaultProps = {
//   allServices: ``,
// };

export default AllServices;
