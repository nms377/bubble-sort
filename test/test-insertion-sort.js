const chai = require('chai');

chai.should();

const insertionSort = require('../algorithms/insertion-sort');

describe('Insertion Sort', () =>{

	it('should be a function', () => {
		insertionSort.should.be.a('function');
	});

	it('should not return a string', () => {
		insertionSort.should.not.be.a('string');
	});

	it('should return an array', () => {
		insertionSort([]).should.be.deep.equal([]);
	});

	it('array should not be empty', () => {
		insertionSort.should.not.be.empty;
	});

	it('should not equal null', () => {
		insertionSort.should.not.equal('null');
	});

});