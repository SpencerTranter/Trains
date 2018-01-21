const _        = require('lodash');
const inputObj = require('./input.js');

// Compute the number of different routes between two towns with various parameters
withMaxStops = (town1, town2, maxStops, count=0) => {

  if (maxStops === 0) return count;

  _.forEach(inputObj, (val, towns) => {
    if(towns[0] === town1) {

      if(towns[1] === town2) count += 1;
      count = withMaxStops(towns[1], town2, maxStops - 1, count);

    }

  });
  return count;

}

withNumberOfStops = (town1, town2, stops, curr=0, count=0) => {

  if (curr > stops) return count;

  _.forEach(inputObj, (val, towns) => {

    if(towns[0] === town1) {

      if(towns[1] === town2 && curr === 4) count += 1;
      else count = withNumberOfStops(towns[1], town2, stops, curr + 1, count);

    }

  });
  return count;

}

withMaxDistance = (town1, town2, maxDist, distance=0, count=0) => {

  if (distance > maxDist) return count;

  _.forEach(inputObj, (val, towns) => {

    if(towns[0] === town1) {

      if(towns[1] === town2) count += 1;
      count = withMaxDistance(towns[1], town2, maxDist, distance += val, count);

    }

  });
  return count;

}

module.exports = {

  withMaxStops,
  withNumberOfStops,
  withMaxDistance

};
