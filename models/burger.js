// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(burger_name, cb) {
    orm.create("burgers"[ burger_name, "devoured"], [burger_name, false],
      cb
    );
  },
  update: function(condition, cb) {
    orm.update("burgers", {
      devoured: true
    }, condition, cb);
  },
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
