const { describe, Try } = require('riteway');

describe('A passing test', async (assert) => {
    assert({
        given: 'sum',
        should: 'return the correct sum',
        actual: 1 + 1,
        expected: 2
    });
});