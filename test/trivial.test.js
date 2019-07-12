const test = require('tape');

console.log('trivial test');

test('A passing test', (assert) => {
    assert.pass('This test will pass');
    assert.end();
});

test('Assertions with tape', (assert) => {
    const expected = 'something to test';
    const actual = 'sonething to test';

    assert.equal(actual, expected, 'Given two mismatched values, .equal() should produce a nice bug report');
    assert.end();
});

test('Planned assertions', (assert) => {
    assert.plan(2);
    assert.equal(1 + 1, 2, '1 + 1 = 2');
    assert.equal(2 + 2, 4, '2 + 2 = 4');
    assert.end();
});

test('Deep equals', (assert) => {
    const expected = { name: 'Joan', age: 19 };
    assert.equal(expected, { name: 'Joan', age: 19 }, 'equal');
    assert.deepEqual(expected, { name: 'Joan', age: 19 }, 'deepEqual');
    assert.deepEqual(expected, { age: 19, name: 'Joan' }, 'deepEqual');
    assert.deepLooseEqual(expected, { age: '19', name: 'Joan' }, 'deepLooseEqual');
    assert.end();
});