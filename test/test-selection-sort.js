const chai = require('chai');

chai.should();

const selectionSort = require('../selection-sort');

describe('selectionSorte', () => {

	it('should be a function', () => {
		selectionSort.should.be.a('function');
	});

	it('should not return a string', () =>{
		selectionSort.should.not.be.a('string');
	});

	it('should return an array', () => {
		selectionSort([]).should.be.deep.equal([]);
	});

	it('array should not be empty', () => {
		selectionSort.should.not.be.empty;
	});

	it('should not equal null', () => {
		selectionSort.should.not.equal('null');
	});

});