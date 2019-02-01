function fibonacci(number, memo = {}) {
	const n = number|0;
	
	if (memo[n]) return memo[n];
	
	if (n < 2) return n;
	
	memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);

	return memo[n];
}

module.exports = fibonacci
