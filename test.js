const findDistance = require('./findDistance.js');
const findTrips    = require('./findNumberOfTrips.js')
const findRoute    = require('./findShortestRoute.js');

// TETS
const output1 = findDistance('A-B-C');
const output2 = findDistance('A-D');
const output3 = findDistance('A-D-C');
const output4 = findDistance('A-E-B-C-D');
const output5 = findDistance('A-E-D');
const output6 = findTrips.withMaxStops('C', 'C', 3);
const output7 = findTrips.withNumberOfStops('A', 'C', 4);
const output8 = findRoute.shortest('A', 'C');
const output9 = findRoute.shortest('B', 'B');
const output10 = findTrips.withMaxDistance('C', 'C', 30);

// OUTPUT
console.log('Test 1:', output1, output1 === 9);
console.log('Test 2:', output2, output2 === 5);
console.log('Test 3:', output3, output3 === 13);
console.log('Test 4:', output4, output4 === 22);
console.log('Test 5:', output5, output5 === 'NO SUCH ROUTE');
console.log('Test 6:', output6, output6 === 2);
console.log('Test 7:', output7, output7 === 3);
console.log('Test 8:', output8, output8 === 9);
console.log('Test 9:', output9, output9 === 9);
console.log('Test 10:', output10, output10 === 7);
