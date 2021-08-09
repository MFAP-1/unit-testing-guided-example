// Unit test-code developed by MFAP-1

const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
    test("should mutiply two positive integers correctly", () => {
        const result = multiply(1, 2);
        expect(result).toBe(2.0);
      });
    test("should mutiply  'posite * negative' values correctly", () => {
    const result = multiply(1, -2);
    expect(result).toBe(-2.0);
    });
    test("should return/result in 0 if one of the values isn't provided", () => {
        const result = multiply(2);
        expect(result).toBe(0);
        });
  });
  