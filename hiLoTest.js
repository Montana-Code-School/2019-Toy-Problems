const chai = require('chai');
const {checkMe, getHiLoFrmArray} = require('./hiLoArr');

const expect = chai.expect;


it('should work', function(){
  expect(checkMe()).to.eql(true);
})

it('should return an object', function(){
  expect(getHiLoFrmArray()).to.be.an('object');
})

it('if input is not array should return an object {error: "bad input"}', function(){
  expect(getHiLoFrmArray()).to.eql({error: "bad input"});
})

it('should have keys high and low', function(){
  expect(getHiLoFrmArray([])).to.haveOwnProperty('high');
  expect(getHiLoFrmArray([])).to.haveOwnProperty('low');
})

it('if given an empty array should return null', function(){
  expect(getHiLoFrmArray([]).high).to.equal(null);
  expect(getHiLoFrmArray([]).low).to.equal(null);
})

const numberArray = [1, 2, 3, 4, 5];
const complexNegArray = [-7, -4, -32, -51, -2]
it('should have numbers for values at keys high and low', function(){
  expect(getHiLoFrmArray(numberArray).high).to.be.a('number');
  expect(getHiLoFrmArray(numberArray).low).to.be.a('number');
})

it('at key high, value should highest number in array', function(){
  expect(getHiLoFrmArray(numberArray).high).to.eql(5);
})

it('at key low, value should be lowest number in array', function(){
  expect(getHiLoFrmArray(numberArray).low).to.eql(1);
})
