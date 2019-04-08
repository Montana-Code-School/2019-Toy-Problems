const sumSquare = require('./sumSquare');
const chai = require('chai');
const expect = chai.expect;

it('should work', function(){
  expect(sumSquare()).to.eql('gimme dat square sum');
})

it('the sum square of 10 should equal 2640', function(){
  expect(sumSquare(10)).to.eql(2640);
})
it('the sum square of 100 should equal 25164150', function(){
  expect(sumSquare(100)).to.eql(25164150);
})