(function (global) {
  'use strict';

  var Task = function Task(description, dueDate) {
    this.description = description;
    if (arguments.length === 2 && !!dueDate && angular.isDate(dueDate)) {
      this.dateDue = dueDate;
    } else {
      this.dateDue = new Date();
    }

    this.complete = false;
  };

  Task.prototype.markComplete = function () {
    this.complete = true;
    this.dateCompleted = new Date();
  };

  Task.prototype.isComplete = function () {
    return this.complete;
  };

  global.Task = Task;

}(this));
