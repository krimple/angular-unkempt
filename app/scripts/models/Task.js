(function(global) { 'use strict';

 global.Task = function Todo() {
   this.description = 'enter a task...';
   this.dateDue = new Date();
   this.complete = false;
 }

 Task.complete = function() {
   this.complete = true;
 };

 Task.isComplete = function() {
   return this.complete;
 };

}(this));
