(function () {
  'use strict';
  angular.module('unkemptApp')
    .controller('MainCtrl', function ($scope, cardManager) {

      $scope.cards = cardManager.fetchCards() || [
        {
          title: 'getting things done',
          tasks: [
            {
              complete: false,
              description: 'Laze around the house...'
            },
            {
              complete: false,
              description: 'Go get some iced tea'
            },
            {
              complete: true,
              description: 'Read the paper'
            }
          ]
        }
      ];


      $scope.addCard = function () {
        $scope.cards.push({
          editing: false,
          title: 'Change title...',
          tasks: [
            {
              description: 'enter a description',
              complete: false
            }
          ]
        });
      };

      $scope.deleteCard = function (card) {
        $scope.cards.splice(card);
      };

      $scope.addTask = function (card) {
        card.tasks.push({
          description: 'enter a description',
          complete: false
        });
      };
    });
}());

