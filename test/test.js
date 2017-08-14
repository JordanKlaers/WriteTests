var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();

var vowel = require('../index.js')


describe('vowel', function() {
  describe('is function', function() {
    it('should be a function', function() {
      expect(vowel).to.be.a('function');
    });
  });
  describe('takes a string', function() {
    it('should only take a string as an argument', function() {
      expect(vowel({})).to.equal(-1);
      expect(vowel([])).to.equal(-1);
      expect(vowel(1)).to.equal(-1);
      expect(vowel(undefined)).to.equal(-1);
      expect(vowel(null)).to.equal(-1);
      expect(vowel(true)).to.equal(-1);
      expect(vowel(false)).to.equal(-1);
    });
  });
  describe('Count vowels', function() {
    it('should count the number of vowels in the string', function() {
      expect(vowel("hello")).to.equal(2);
      expect(vowel("why")).to.equal(0);
      expect(vowel("why can't you wear deoderant")).to.equal(9);
      expect(vowel("cats", "apples")).to.equal(1);
    });
  });
});
