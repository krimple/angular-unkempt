(function(global) { 'use strict';

 global.Card = function Card() {
   this.title = 'Enter a title...';
   this.todos = [];
 }

 Card.prototype.addTodo = function(todo) {
   this.todos.push(todo);
 };

 Card.prototype.completeTodo = function(todo) {
   this.todos[todo].complete = true;
 };

 Card.prototype.isComplete = function(todo) {
   return this.todos[todo].complete;
 };

}(this));
