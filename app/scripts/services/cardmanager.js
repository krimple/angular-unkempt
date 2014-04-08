'use strict';

angular.module('unkemptApp')
.service('cardManager', function cardManager($log) {
  var service = {};

  service.saveCards = function(cards) {
    if (localStorage !== undefined) {
      localStorage.cards = JSON.stringify(cards);
    } else {
      $log.error('no local storage provider, cards cannot be stored.');
    }
  };


  service.fetchCards = function() {
    if (localStorage !== undefined) {
      if (localStorage.cards !== undefined) {
        var cards = JSON.parse(localStorage.cards);
        return cards;
      } else {
        return [];
      }
    } else {
      $log.error('no local storage provider, cards cannot be loaded.');
    }
  };

  return service;
});
