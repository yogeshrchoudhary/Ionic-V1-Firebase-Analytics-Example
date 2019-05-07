(function() {
  "use strict";

  var indexCtrl = function($scope, $ionicPopup) {
    var isCordova = function() {
      return (
        window.cordova &&
        window.cordova.plugins &&
        window.cordova.plugins.firebase &&
        window.cordova.plugins.firebase.analytics
      );
    };

    $scope.onClick = function() {
      var searchBox = $ionicPopup.show({
        title: "Firebase Analytics",
        subTitle: "Enter the text to search on",
        template: '<input type="text" ng-model="data.searchText"></input>',
        scope: $scope,
        buttons: [
          { text: "Cancel" },
          {
            text: "Search",
            type: "button-positive"
          }
        ]
      });

      searchBox.then(function(res) {
        console.log("Do the stuff here");
        if (isCordova()) {
          window.cordova.plugins.firebase.analytics.logEvent("custom_event", {
            currView: "search",
            searchOn: res
          });
        } else {
          console.error(
            "UNDEFINED!! window.cordova.plugins.firebase.analytics"
          );
        }
      });
    };
  };

  angular.module("starter").controller("indexCtrl", indexCtrl);
})();
