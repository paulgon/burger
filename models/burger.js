var orm = require('../config/orm.js');

var burger = {
    all: function (cb) {
        orm.selectAll('burgers', function (res) {
            cb(res);
        });
    },
    updateOne: function (condition, cb) {
        orm.updateOne('burgers', condition, function (res) {
            cb(res);
        });
    },
    insertOne: function (name, cb) {
        orm.insertOne('burgers', name, cb);
    }
};

module.exports = burger;