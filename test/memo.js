const assert = require('assert');
const jsc = require('jsverify');
const memo = require('../src/memo');
const matrix = require('../src/matrix');

describe('memo vs matrix', function() {
	this.timeout(0);

	const tests = Array.from({ length: 100 }, (d, i) => i);

	tests.forEach((n) => {
		it(`memo(${n}) === matrix(${n})`, () => {
			assert.equal(memo(n), matrix(n));
		});
	});
	
	jsc.property('matrix(n) === recursive(n) with unit8', jsc.uint8, n => memo(n) === matrix(n));

});
