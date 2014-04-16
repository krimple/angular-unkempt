'use strict';

describe('Card model tests', function() {

  var card;
  beforeEach(function() {
    card = new Card();
  });
  it("should create the proper default data when constructing a card", function() {
    expect(card.title).toBe('Enter a title...');
    expect(card.todos).toBeDefined();
    expect(typeof card.todos).toBe('object');
    expect(card.todos.length).toBe(0);
  });

  it("should add a todo", function() {
    card.addTodo(new Task());
    expect(card.todos.length).toBe(1);
  });
});
