/* jshint esversion: 6 */

const chai = require('chai');

chai.should();

const bubbleSort = require('../bubble-sort.js');

describe('bubbleSort', () => {

	it('should return an array', () => {
		bubbleSort([5,2,9,1,3,6,10,8,7,4]).should.be.deep.equal([1,2,3,4,5,6,7,8,9,10]);
	});

	it('should be a function', () => {
		bubbleSort.should.be.a('function');
	});

	it('should not return a string', () => {
		bubbleSort.should.not.be.a('string');
	});


	it('should not equal null', () => {
		bubbleSort.should.not.equal('null');
	});

});

