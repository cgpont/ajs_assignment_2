(function() {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {

  var toBuyItems = this;

  toBuyItems.items = ShoppingListCheckOffService.getToBuyItems();

  toBuyItems.moveItemToBoughtList = function (itemIndex) {
    ShoppingListCheckOffService.moveItemToBoughtList(itemIndex);
  }

}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {

  var alreadyBoughtItems = this;

  alreadyBoughtItems.items = ShoppingListCheckOffService.getAlreadyBoughtItems();

}

function ShoppingListCheckOffService() {

  var service = this;
  var toBuyItemsList = [
    {
      name: "Bottles of Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolates",
      quantity: "5"
    },
    {
      name: "Sodas",
      quantity: "2"
    },
    {
      name: "Bottles of wine",
      quantity: "200"
    },
    {
      name: "Beers",
      quantity: "300"
    },
    {
      name: "Apples",
      quantity: "5"
    }
  ];
  var alreadyBoughtItemsList = [];

  service.getToBuyItems = function () {
    return toBuyItemsList;
  };

  service.getAlreadyBoughtItems = function () {
    return alreadyBoughtItemsList;
  };

  service.moveItemToBoughtList = function (itemIndex) {
    alreadyBoughtItemsList.push(toBuyItemsList[itemIndex])
    toBuyItemsList.splice(itemIndex, 1);
  };

}

})();
