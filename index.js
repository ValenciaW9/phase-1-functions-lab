// test/indexTest.js

const { expect } = require('chai'); // Assuming you're using Chai for assertions
const { distanceFromHqInBlocks } = require('../index'); // Replace '../index' with the correct path to your 'index.js' file

describe('index.js', function() {
  describe('distanceFromHqInBlocks()', function() {
    it('returns a distance in blocks', function() {
      // Test case 1: Distance from headquarters is 43 blocks
      const result1 = distanceFromHqInBlocks(43);
      expect(result1).to.equal(1);

      // You can add more test cases here for different input values
    });
  });
});