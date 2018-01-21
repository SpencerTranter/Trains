// Turn input into object keyed on both city names and a value of distance between
const input    = ['AB5', 'BC4', 'CD8', 'DC8', 'DE6', 'AD5', 'CE2', 'EB3', 'AE7'];
const inputObj = input.reduce((result, route) => {

  result[route.substring(0, 2)] = parseInt(route[2])
  return result;

}, {});

module.exports = inputObj;
