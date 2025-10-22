const { add } = require('./index');

describe('testing', () => {
    it('should add two numbers', () => {
        expect(add(2,3)).toEqual(5);
    })
});