function matrix(number) {
	const n = number|0;
	if (number < 2) { return n; }
	
	const mtx = [0, 1];

	for(let i = 0; i < n - 1; i += 1) {
		const [ a, b ] = mtx;
		mtx[0] = b;
		mtx[1] = a + b;
	}

	return mtx[1];
}

module.exports = matrix;
