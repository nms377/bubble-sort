/* jshint esversion: 6 */

const chai = require('chai');

chai.should();

const BubbleSort = require('../bubble-sort.js');

describe('myArray', () => {

	let myArray = BubbleSort;

	it('should be an array', () => {
		myArray.should.be.an.array;
	});

	it('should be a number', () => {
		myArray.should.be.a.number;
	});

});

describe('sortMyArray', () => {

	let bubbleSort = BubbleSort;

	it('should be a function', () => {
		bubbleSort.should.be.a('function');
	});

});

