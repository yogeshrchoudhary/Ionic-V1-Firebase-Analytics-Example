(function () {
    'use strict';

    var indexCtrl = function ($scope, $ionicPopup) {
        $scope.onClick = function () {
            var okPopup = $ionicPopup.alert({
                title: 'Firebase Analytics',
                template: 'Log a custom event in Firebase Analytics'
            });

            okPopup.then(function (res) {
                console.log("Do the stuff here");
                if (window.cordova 
                    && window.cordova.plugins
                    && window.cordova.plugins.firebase 
                    && window.cordova.plugins.firebase.analytics) {
                        window.cordova.plugins.firebase.analytics.logEvent("custom_event", { currView: 'search' });
                } else {
                    console.error("UNDEFINED!! window.cordova.plugins.firebase.analytics");
                }
            });
        };
    };

    angular
        .module('starter')
        .controller('indexCtrl', indexCtrl);
})();
