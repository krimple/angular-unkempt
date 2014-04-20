(function(Task, Card) {
  'use strict';

  describe('Card model tests', function() {
    var card, uuid4;
    beforeEach(function() {
      module('unkemptApp');
    });

    beforeEach(inject(function(_uuid4_) {
      uuid4 = _uuid4_;
      card = new Card({
        title: 'Enter a title...',
        id: uuid4.generate(),
        tasks: []
      });
    }));

    it('should create a card with a defined title when passed a string', function() {
      var card2 = new Card('hi mom');
      expect(card2.title).toBe('hi mom');
      expect(card2.id).toBeUndefined();
    });

    it('should create the proper default data when constructing a card with JS Literal', function() {
      expect(card.title).toBe('Enter a title...');
      expect(card.id).toBeDefined();
      expect(card.tasks).toBeDefined();
      expect(typeof card.tasks).toBe('object');
      expect(card.tasks.length).toBe(0);
    });

    it('should add a todo', function() {
      card.addTask(new Task());
      expect(card.tasks.length).toBe(1);
    });

    it('should manage multiple todos', function() {
      for(var i = 0; i < 10; i++) {
        card.addTask(new Task());
      }
      var tasks = card.getAllTasks();
      expect(tasks.length).toBe(10);
    });

  });
}(this.Task, this.Card));

