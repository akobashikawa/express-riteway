const { describe, Try } = require('riteway');

describe('A passing test', async (assert) => {
    assert({
        given: 'sum',
        should: 'return the correct sum',
        actual: 1 + 1,
        expected: 2
    });
});

describe('Equals test', async (assert) => {
    const target = { name: 'Joan', age: 19 };
    assert({
        given: 'objects',
        should: 'return the correct comparison',
        actual: { name: 'Joan', age: 19 },
        expected: target
    });
    assert({
        given: 'objects',
        should: 'return the correct comparison',
        actual: { age: 19, name: 'Joan' },
        expected: target
    });
    assert({
        given: 'objects',
        should: 'return the correct comparison',
        actual: { name: 'Joan', age: '19' },
        expected: target
    });
});