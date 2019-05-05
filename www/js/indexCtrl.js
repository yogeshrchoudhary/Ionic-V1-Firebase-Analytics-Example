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
                if (window.cordova) {
                    console.error("OK!! window.cordova");
                    if (window.cordova.plugins) {
                        console.error("OK!! window.cordova.plugins");
                        if (window.cordova.plugins.firebase.analytics) {
                            console.error("OK!! window.cordova.plugins.firebase.analytics");
                            if (window.cordova.plugins.firebase.analytics) {
                                console.error("OK!! window.cordova.plugins.firebase.analytics");
                                window.cordova.plugins.firebase.analytics.logEvent("custom_event", { currView: 'search' });
                            } else {
                                console.error("UNDEFINED!! window.cordova.plugins.firebase.analytics");
                            }
                        } else {
                            console.error("UNDEFINED!! window.cordova.plugins.firebase");
                        }
                    } else {
                        console.error("UNDEFINED!! window.cordova.plugins");
                    }
                } else {
                    console.error("UNDEFINED!! window.cordova");
                }
            });
        };
    };

    angular
        .module('starter')
        .controller('indexCtrl', indexCtrl);
})();
