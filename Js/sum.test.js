// import add from './sum.js';
const add = require('./sum.js');

test('Test Function add', () => {
    expect(add(1,2)).toBe(3);
})