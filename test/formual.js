const assert = require('assert');
// const jsc = require('jsverify');
const matrix = require('../src/matrix');
const formula = require('../src/formula');

describe('formula', function() {
	this.timeout(0);

//	jsc.property('matrix(n) === recursive(n) Range 0 to 30', jsc.number(0, 30), n => matrix(n) === recursive(n));

	const tests = Array.from({ length: 100 }, (d, i) => i);

	tests.forEach((n) => {
		it(`formual(${n}) === matrix(${n})`, () => {
			assert.equal(formula(n), matrix(n));
		});
	});
});
