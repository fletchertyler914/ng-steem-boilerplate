(function () {
    'use strict';
    var module = angular.module('app')
        .component('appComponent', {
            templateUrl: 'app/app.html',
            controller: [controller],
            controllerAs: 'model'
        })

    function controller() {
        var model = this;

        // Function to get Account Data, Passing Data Back To The Callback
        function getAccountData(callback, username) {
            steem.api.getAccounts([username], function (err, result) {
                callback(err, result);
            });
        }

        // Our Callback Data Handler
        function dataHandler(err, result) {
            console.log(err, result);
            model.username = result[0].name;
            model.vesting_shares = result[0].vesting_shares;
        }

        // Function to get username input and get account data
        model.getAccount = function (username) {
            getAccountData(dataHandler, username);
        }
    }
}());
