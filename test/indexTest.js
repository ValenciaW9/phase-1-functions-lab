const { distanceFromHqInBlocks, distanceFromHqInFeet, distanceTravelledInFeet, calculatesFarePrice } = require('./helpers.js');

function distanceFromHqInBlocks(street) {
  // Your code to calculate the distance in blocks goes here
}

it('returns a distance in blocks', function() {
  expect(distanceFromHqInBlocks(43)).to.equal(1);
});

module.exports = {
  distanceFromHqInBlocks,
  distanceFromHqInFeet,
  distanceTravelledInFeet,
  calculatesFarePrice
};