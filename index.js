var sync = require('syncho');
var Promise = require('bluebird');

exports.task = function(fn, args) {
  var self = this;

  return new Promise(function(resolve) {
    sync(function() {
      return resolve(fn.apply(self, args));
    });
  });
}

exports.factory = function(fn) {
  var self = this;

  return function() {
    var args = arguments;

    return new Promise(function(resolve) {
      sync(function() {
        return resolve(fn.apply(self, args));
      });
    });
  };
}
