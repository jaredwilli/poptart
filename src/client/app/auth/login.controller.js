(function() {
    'use strict';

    angular
        .module('app.auth')
        .controller('LoginController', LoginController);

    LoginController.$inject = [
        '$q', '$rootScope', '$location', 'Auth', 'logger'
    ];

    /* @ngInject */
    function LoginController(
        $q, $rootScope, $location, Auth, logger
    ) {
        var vm = this;
        vm.title = 'Login';
        $q = $q;
        $rootScope.auth = Auth;

        vm.user = {};
        vm.loginWith = loginWith;
        vm.authWithPassword = authWithPassword;
        vm.authAnonymously = authAnonymously;
        vm.thirdPartyLogin = thirdPartyLogin;
        vm.createUser = createUser;
        vm.handleAuthResponse = handleAuthResponse;

        activate();

        function activate() {
            logger.info('Activated Login View');
        }

        function loginWith(type, provider) {
            var promise;
            if (!type) return;

            if (type === 'password') {
                promise = vm.authWithPassword();
            } else if (type === 'other' && provider) {
                promise = vm.thirdPartyLogin(provider);
            } else if (type === 'anon') {
                promise = vm.authAnonymously();
            }

            vm.handleAuthResponse(promise, '/admin');
        }

        // Handle Email/Password login
        // returns a promise
        function authWithPassword() {
            var deferred = $q.defer();
            $rootScope.auth.$authWithPassword(vm.user, function onAuth(err, user) {
                if (err) {
                    deferred.reject(err);
                }
                if (user) {
                    deferred.resolve(user);
                }
            });
            return deferred.promise;
        }

        // authenticate anonymously
        // returns a promise
        function authAnonymously() {
            var deferred = $q.defer();
            $rootScope.auth.$authAnonymously(function(err, authData) {
                if (authData) {
                    deferred.resolve(authData);
                }
                if (err) {
                    deferred.reject(err);
                }
            });
            return deferred.promise;
        }

        // authenticate with third-party
        // returns a promise
        function thirdPartyLogin(provider) {
            var deferred = $q.defer();
            $rootScope.auth.$authWithOAuthPopup(provider, function(err, user) {
                if (err) {
                    deferred.reject(err);
                }
                if (user) {
                    deferred.resolve(user);
                }
            });
            return deferred.promise;
        };

        // create a user but not login
        // returns a promsie
        function createUser(userObj) {
            var deferred = $q.defer();
            $rootScope.auth.$createUser(userObj, function(err) {
                if (!err) {
                    deferred.resolve();
                } else {
                    deferred.reject(err);
                }
            });
            return deferred.promise;
        }

        // route to the specified route if sucessful
        // if there is an error, show notification
        function handleAuthResponse(promise, route) {
            $q.when(promise).then(function(authData) {
                debugger;
                $location.path(route);
            }, function (err) {
                debugger;
                logger.error(err);
            }).catch(function(result) {
                debugger;
            });
        }
    }
})();
