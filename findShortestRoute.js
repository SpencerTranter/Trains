const _        = require('lodash');
const inputObj = require('./input.js');

// Compute the shortest route between two towns. Had to set a preliminary minimum distance, chose 20 for this data set but can be increased with more complicated routes
const shortest = (town1, town2, distance=0, minDist=20) => {

  if (distance > minDist) return minDist;

  _.forEach(inputObj, (val, towns) => {

    if(towns[0] === town1) {

      let newDist = distance + val

      if(towns[1] === town2 && newDist < minDist) minDist = newDist;
      else minDist = shortest(towns[1], town2, newDist, minDist);

    }

  });
  return minDist;

  };

module.exports = { shortest };
