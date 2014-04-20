(function (global) {
  'use strict';

  var Card = function Card() {
    if (arguments.length === 1) {
      var arg = arguments[0];
      if (angular.isObject(arg) && !angular.isArray(arg)) {
        angular.extend(this, arg);
        if (this.tasks === undefined) {
          this.tasks = [];
        }
      } else if (angular.isString(arg)) {
        this.title = arg;
        this.tasks = [];
      }
    } else {
      throw "Invalid configuration. Pass either an object with data or a title as a single string.";
    }
  };

  Card.prototype.addTask = function (task) {
    this.tasks.push(task);
  };

  Card.prototype.getAllTasks = function() {
    return global._.values(this.tasks);
  };

  Card.addProperty = function(name, value) {
    this[name] = value;
  };

  Card.getProperty = function(name) {
    return this[name];
  };

  Card.prototype.completeTodo = function (task) {
    this.tasks[task].complete = true;
  };

  Card.prototype.isComplete = function (task) {
    return this.tasks[task].complete;
  };

  global.Card = Card;
}(this));
