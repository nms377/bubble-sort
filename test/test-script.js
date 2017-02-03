/* jshint esversion: 6 */

const chai = require('chai');

chai.should();

const BubbleSort = require('../bubble-sort.js');

describe('bubbleSort', () => {

	let bubbleSort = BubbleSort;

	it('should be a function', () => {
		bubbleSort.should.be.a('function');
	});

});

