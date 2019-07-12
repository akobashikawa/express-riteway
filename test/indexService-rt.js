const { describe, Try } = require('riteway');

const indexService = require('../services/index');

describe('indexService', async (assert) => {
    assert({
        given: 'hello',
        should: 'return hello message',
        actual: indexService.hello(),
        expected: 'Hello'
    });
});