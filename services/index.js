service = function () { };

service.hello = function (req, res, next) {
    return 'Hello';
};

module.exports = service;