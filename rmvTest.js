const chai = require('chai');
const {rmvDuplicates, rmvDupsNewArr} = require('./rmv');

const expect = chai.expect;

it('if given an array of numbers should return an array', function(){
  expect(rmvDuplicates([1, 2, 3, 4, 5])).to.be.an('array')
})

it('if given an array of incorrect data type should throw an error', function(){
  expect(rmvDuplicates([1, 'cat', 3, true, 5])).to.equal('incorrect data type')
})

it('if given no array should return bad input', function(){
  expect(rmvDuplicates()).to.equal('bad input')
})
const duplicateArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
const expectedArray = [1, 2, 3, 4, 5];

it('if given array with duplicates, return array without duplicate', function(){
  expect(rmvDupsNewArr(duplicateArray)).to.eql(expectedArray)
})
