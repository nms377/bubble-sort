const chai = require('chai');

chai.should();

const mergeSort = require('../algorithms/merge-sort');

describe('mergeSort', () => {

	it('should be a function', () => {
		mergeSort.should.be.a('function');
	});

	it('should not return a string', () =>{
		mergeSort.should.not.be.a('string');
	});

	it('should return an array', () => {
		mergeSort([]).should.be.deep.equal([]);
	});

	it('array should not be empty', () => {
		mergeSort.should.not.be.empty;
	});

	it('should not equal null', () => {
		mergeSort.should.not.equal('null');
	});

});