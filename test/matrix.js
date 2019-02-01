const assert = require('assert');
// const jsc = require('jsverify');
const recursive = require('../src/recursive');
const matrix = require('../src/matrix');

describe('matrix', function() {
	this.timeout(0);

	// jsc.property('matrix(n) === recursive(n) Range 0 to 30', jsc.number(0, 30), n => matrix(n) === recursive(n));

	const tests = Array.from({ length: 40 }, (d, i) => i);

	tests.forEach((n) => {
		it(`matrix(${n}) === recursive(${n})`, () => {
			assert.equal(matrix(n), recursive(n));
		});
	});
});
