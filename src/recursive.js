function recursive(number) {
	const n = number|0;
	
	if (number < 2) { return n; }	
	
	return recursive(n - 1) + recursive(n - 2);
};

module.exports = recursive;
