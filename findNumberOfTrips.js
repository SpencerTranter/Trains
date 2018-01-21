const _        = require('lodash');
const inputObj = require('./input.js');

// Compute the number of different routes between two towns with various parameters

withMaxStops = (town1, town2, maxStops, count=[]) => {

  if (maxStops === 0) return;

  _.forEach(inputObj, (val, key) => {
    if(key[0] === town1) {

      if(key[1] === town2) count.push(1);
      withMaxStops(key[1], town2, maxStops - 1, count);

    }

  });
  return count.length;

}

withNumberOfStops = (town1, town2, stops, curr=0, count=[]) => {

  if (curr > stops) return;

  _.forEach(inputObj, (val, key) => {

    if(key[0] === town1) {

      if(key[1] === town2 && curr === 4) count.push(1);
      else return withNumberOfStops(key[1], town2, stops, curr + 1, count);

    }

  });
  return count.length;

}

withMaxDistance = (town1, town2, maxDist, distance=0, count=[]) => {

  if (distance > maxDist) return;

  _.forEach(inputObj, (val, key) => {

    if(key[0] === town1) {

      if(key[1] === town2) count.push(1);
      return withMaxDistance(key[1], town2, maxDist, distance += val, count);

    }

  });
  return count.length;

}

module.exports = {

  withMaxStops,
  withNumberOfStops,
  withMaxDistance

};
