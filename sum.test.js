const sum = require('./sum');

test ('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// to test for exact value use: toBe
// to test for deeply equal use: toEqual *aka deeply equal for objects
// for numbers use toBe or toEqual
// toBeNull
// toBeUndefined
// toBeDefined
// toBeTruthy
// toBeFalsy

// toBeCloseTo for close to rounding

// toContain for arrays