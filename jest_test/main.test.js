const worstWayToMultiply = require('./main');

test('multiplies 3 and 4 to equal 12', () => {
	expect(worstWayToMultiply(3, 4)).toBe(12);
});