
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