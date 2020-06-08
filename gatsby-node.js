
const servicesData = [
  { name: 'Branding' }, 
  { name: 'Design' }, 
  { name: 'Website' }
];

exports.createPages = ({ actions: { createPage }}) => {
  const allServices = servicesData;

  createPage({
    path: '/services',
    component: require.resolve("./src/templates/all-services.js"),
    context: { allServices }
  });

  allServices.forEach(service => {
    createPage({
      path: `/service/${service.name}`,
      component: require.resolve("./src/templates/service.js"),
      context: { service }
    });
  });
}


/**
 * Implement Gatsby's Node APIs in this file.
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
