const indexService = require('../services/index');

controller = function () { };

controller.hello = function (req, res, next) {
    const message = indexService.hello();
    res.json({
        message
    });
};

module.exports = controller;