const chai = require('chai');

chai.should();

const quickSort = require('../quick-sort.js');

describe('quickSort', () => {

console.log(quickSort([5,10, 1]));

	it('should be a function', () => {
		quickSort.should.be.a('function');
	});

	it('should not return a string', () =>{
		quickSort.should.not.be.a('string');
	});

	it('should return an array', () => {
		quickSort([]).should.be.deep.equal([]);
	});

	it('array should not be empty', () => {
		quickSort.should.not.be.empty;
	});

	it('should not equal null', () => {
		quickSort.should.not.equal('null');
	});

});