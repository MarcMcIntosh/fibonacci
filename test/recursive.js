const assert = require('assert');
const recursive = require('../src/recursive');

describe('recursive', () => {

	it('when given 0 it should return 0', () => {
		const value = recursive(0);
		const expect = 0;
		assert.equal(value, expect);
	});

	it('when given 1 it should return 1', () => {
		const value = recursive(1);
		const expect = 1;
		assert.equal(value, expect);
	});

	it('when given 2 it should return 1', () => {
		const value = recursive(2);
		const expect = 1;
		assert.equal(value, expect);
	});

	it('when given 3 it should return 2', () => {
		const value = recursive(3);
		const expect = 2;
		assert.equal(value, expect);

	});

	it('when given 4 it should return 3', () => {
		const value = recursive(4);
		const expect = 3;
		assert.equal(value, expect);

	});

	it('when given 5 it should return 5', () => {
		const value = recursive(5);
		const expect = 5;
		assert.equal(value, expect);
	});

	it('when given 6 it should return 8', () => {
		const value = recursive(6);
		const expect = 8;
		assert.equal(value, expect);
	});

	it('when given 7 it should return 13', () => {
		const value = recursive(7);
		const expect = 13;
		assert.equal(value, expect);

	});


	it('when given 8 it should return 21', () => {
		const value = recursive(8);
		const expect = 21;
		assert.equal(value, expect);

	});

	it('when given 9 it should return 34', () => {
		const value = recursive(9);
		const expect = 34;
		assert.equal(value, expect);
	});

});
