function worstWayToMultiply(a, b) {
	let x = a, y = b, z = 0;
	while(x > 0){
		z = z + y;
		x = x - 1;
	}
	return z;
}

module.exports = worstWayToMultiply;