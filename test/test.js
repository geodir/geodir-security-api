var utils = require('../src/lib/utils.js'),
assert = require('assert');
var expect = require('chai').expect;

describe('#utils', function() {
    it('admin - admin', function() {
        var result = utils.compare('admin', 'admin');
        expect(result).to.equal(true);
    });

    it('admin - [\'admin\']', function() {
        var result = utils.compare('admin', ['admin']);
        expect(result).to.equal(true);
    });
    it('[\'admin\'] - [\'admin\']', function() {
        var result = utils.compare(['admin'], ['admin']);
        expect(result).to.equal(true);
    });
    it('admin - [\'admin\', \'manager\']', function() {
        var result = utils.compare('admin', ['admin', 'manager']);
        expect(result).to.equal(true);
    });
    it('[\'admin\'] - [\'admin\', \'manager\']', function() {
        var result = utils.compare(['admin'], ['admin', 'manager']);
        expect(result).to.equal(true);
    });
    it('0 - 1', function() {
        var result = utils.compare('0', '1');
        expect(result).to.equal(false);
    });
    it('0 - [\'0\, \'1\']', function() {
        var result = utils.compare('0', ['0', '1']);
        expect(result).to.equal(true);
    });
    it('[\'0\'] - [\'0\, \'1\']', function() {
        var result = utils.compare(['0'], ['0', '1']);
        expect(result).to.equal(true);
    });
});
/*
try {
    
    // compare
    var result = utils.compare('admin', 'admin');
    expect(result).to.equal(true);
    strictEqual(utils.compare('0', '1'), false);
    strictEqual(utils.compare('0', ['0', '1']), true);
    strictEqual(utils.compare(['0'], ['0', '1']), true);
    strictEqual(utils.compare(['0', '1'], ['0', '1']), true);
    strictEqual(utils.compare(0, ['0', '1']), false);
    strictEqual(utils.compare(0, [0, '1']), true);
    strictEqual(utils.compare(1, [0, 1]), true);
    strictEqual(utils.compare([1], [0, 1]), true);
    strictEqual(utils.compare([0, 1], [0, 1]), true);
    strictEqual(utils.compare({some: 'field'}, [0, 1]), false);
    strictEqual(utils.compare({some: 'field'}, {some: 'object'}), false);
    strictEqual(utils.compare({some: 'field'}, {some: 'field'}), true);
    strictEqual(utils.compare({some: 'field'}, {some: 'field', another: 'one'}), true);
    strictEqual(utils.compare({some: 'field'}, {some: 'object', another: 'one'}), false);
}
catch (err) {
    // console.log('Error on line ' + i);
}

})();*/