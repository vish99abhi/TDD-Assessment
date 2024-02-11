
describe("to check string calculator import", ()=> {
    let stringCalFn;
    beforeEach(() => {
        try {
            stringCalFn = require('./stringCalculator');
        } catch (error) {
            throw new Error('Failed to import')
        }
    });

    it('should import fuction successfully',()=> {
        expect(stringCalFn).toBeInstanceOf(Function);
    });
})


describe('string calculator', () => {
  const add = require('./stringCalculator');

  test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  test('should return the number itself for a single number string', () => {
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
  });

  test('should return the sum of comma-separated numbers', () => {
    expect(add("1,2,3")).toBe(6);
    expect(add("5,10,15,20")).toBe(50);
  });

  test('should support new lines between numbers and return their sum', () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("5,10\n15,20")).toBe(50);
  });

  test('should support different delimiters and return the sum accordingly', () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//|\n5|10|15")).toBe(30);
  });

  test('should ignore numbers larger than 1000', () => {
    expect(add("1000,2000,3000")).toBe(1000);
  });

  test('should handle multiple delimiters of any length and return the sum accordingly', () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
    expect(add("//[---]\n5---10---15---20")).toBe(50);
  });
});