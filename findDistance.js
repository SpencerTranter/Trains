const inputObj = require('./input.js');

// Compute the distance along a certain route.
module.exports = (route) => {

  const routesSplit = route.split('-');
  const townRoutes  = [];

  routesSplit.forEach((route, key) => {

    if(routesSplit[key + 1]) townRoutes.push(route + routesSplit[key + 1]);

  });

  const routeLength = townRoutes.reduce((sum, route) => sum + inputObj[route], 0);
  return (routeLength) ? routeLength : 'NO SUCH ROUTE';

};
