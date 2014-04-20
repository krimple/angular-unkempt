(function (Card) {
  'use strict';

  angular.module('unkemptApp')
    .service('cardManager', function cardManager($log, uuid4, _) {
      var service = {};
      var cardDatabase = {};

      service.saveCards = function () {
        if (localStorage !== undefined) {
          localStorage.cards = JSON.stringify(cards);
        } else {
          $log.error('no local storage provider, cards cannot be stored.');
        }
      };


      service.fetchCards = function () {
        if (localStorage !== undefined) {
          if (localStorage.cards !== undefined) {
            var cards = JSON.parse(localStorage.cards);
            return cards;
          } else {
            return [];
          }
        } else {
          $log.error('no local storage provider, cards cannot be loaded.');
          throw new Error('no storage provider');
        }
      };

      service.createCard = function (data) {
        data.id = uuid4.generate();
        var card = new Card(data);
        cardDatabase[data.id] = card;
        return new Card(data);
      };

      service.updateCard = function (card) {
        var cardObject = cardDatabase[card.id];
        // update
        if (cardObject) {
          angular.extend(cardObject, card);
        }
      };

      service.findCardById = function (id) {
        return angular.copy(cardDatabase[id]);
      };

      service.getAllCards = function () {
        return _.values(cardDatabase);
      };

      return service;

    });
}(this.Card));
