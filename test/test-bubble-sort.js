const chai = require('chai');

chai.should();

const bubbleSort = require('../bubble-sort.js');

describe('bubbleSort', () => {

	it('should return an array', () => {
		bubbleSort([]).should.be.deep.equal([]);
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

