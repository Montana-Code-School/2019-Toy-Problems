const rnaTranscription = require('./rnaTranscription')
const chai = require('chai');
const expect = chai.expect;

it('should work', function(){
  expect(rnaTranscription()).to.eql('gimme dat DNA!');
})

it('should have letters G, C, T, A as input.', function(){
  expect(rnaTranscription('wxyz')).to.eql('bad input');
})

it('should transcribe input of G, C, T, A into C, G, A, U.', function(){
  expect(rnaTranscription('GCTA')).to.eql('CGAU');
})

it('should transcribe a very long input of G, C, T, A into C, G, A, U.', function(){
  expect(rnaTranscription('GCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTA')).to.eql('CGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAU');
})

it('should transcribe lowercase g, c, t, a into C, G, A, U.', function(){
  expect(rnaTranscription('gcta')).to.eql('CGAU');
})