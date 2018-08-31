describe('Math', function () {
    describe('#floor', function () {
        it('basic', function () {
            var myNumber = 5.7;

            assert.equal(6, Math.floor(myNumber));
        });
    });
});
