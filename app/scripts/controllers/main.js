'use strict';

angular.module('unkemptApp')
.controller('MainCtrl', function ($scope) {

  $scope.cards = [{
    title: 'getting things done',
    tasks: [{
      complete: false,
      description: "Laze around the house..."
    },
    {
      complete: false,
      description: "Go get some iced tea"
    },
    {
      complete: true,
      description: "Read the paper"
    }
    ]}
  ];

  $scope.deleteCard = function(card) {
    $scope.cards.splice(card);
  };
});
