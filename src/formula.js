function formula(number) {
	const n = (number|0);
	if (number < 2) { return n }
	
	const SQRT_5 = Math.sqrt(5);
	const PHI = (1 + SQRT_5) / 2;
	// const ans = PHI ** n / (PHI + 2);
	
	const x = PHI ** n;
	const y = (1 - PHI) ** n;
	const ans = (x - y) / SQRT_5;
	return Math.round(ans);
}

module.exports = formula;
