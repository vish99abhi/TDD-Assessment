describe('escapeRegExp', () => {
    const escapeRegExp = require('./helper.js');
    test('should escape special characters in a regular expression pattern', () => {
        const input = "[-/\\^$*+?.()|[]{}]";
        const actualOutput = escapeRegExp(input);
        expect(escapeRegExp(input)).toBe(actualOutput);
      });
    test('should escape special characters without modifying normal characters', () => {
        const input = "hello.world";
        const expectedOutput = "hello\\.world";
        expect(escapeRegExp(input)).toBe(expectedOutput);
    });
  });