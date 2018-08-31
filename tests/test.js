var assert = require('assert');

describe('String', function () {
    describe('#indexOf', function () {
        it('should return -1 when the substring is not present', function () {
            var myString = 'test';

            assert.equal(-1, myString.indexOf('x'));
            assert.equal(-1, myString.indexOf('y'));
        });
    });
});

describe('Math', function () {
    describe('#floor', function () {
        it('basic', function () {
            var myNumber = 5.7;

            assert.equal(5, Math.floor(myNumber));
        });
    });
    
    describe('#ceiling', function () {
        it('basic', function () {
            var myNumber = 5.7;

            assert.equal(5, Math.ceiling(myNumber));
        });
    });
});
