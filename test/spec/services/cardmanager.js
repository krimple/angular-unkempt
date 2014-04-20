(function(Card, Task) {

  'use strict';

  describe('Service: cardManager', function () {
    var uuid4;

    // load the service's module
    beforeEach(module('unkemptApp'));

    // instantiate service
    var cardManager;
    beforeEach(inject(function (_cardManager_, _uuid4_) {
      cardManager = _cardManager_;
      uuid4 = _uuid4_;
    }));

    it('should do something', function () {
      expect(!!cardManager).toBe(true);
    });

    it('should property create our card', function () {
      var card = cardManager.createCard({
        title: 'Chores'
      });
      expect(card.title).toBe('Chores');
      expect(card.id).toBeDefined();
      expect(card.tasks).toBeDefined();
      expect(card.tasks.length).toBe(0);

      var card2 = cardManager.findCardById(card.id);
      expect(card2.title).toEqual(card.title);
      expect(card2.id).toEqual(card.id);
      expect(card2.tasks).toEqual(card.tasks);
    });

    it("should create then find all cards", function() {
      for(var i = 0; i < 100; i++) {
        cardManager.createCard({
          title: 'card ' + i
        });
      }
      var cards = cardManager.getAllCards();
      expect(cards.length).toBe(100);
    });

    it('should create then update properly', function() {
      var card = cardManager.createCard({
        title: 'Chores',
        tasks: [
          new Task('Do the dishes'), new Task('Do the laundry')
        ]
      });

      var fetchedCard = cardManager.findCardById(card.id);
      fetchedCard.addTask(new Task('Do the floors'));
      cardManager.updateCard(fetchedCard);

      var finalCard = cardManager.findCardById(card.id);
      expect(finalCard.tasks.length).toBe(3);

    });
  });
}(this.Card, this.Task));

