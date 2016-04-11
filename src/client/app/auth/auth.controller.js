(function() {
    'use strict';

    angular
        .module('app.auth')
        .controller('AuthController', AuthController);

    AuthController.$inject = [
        '$rootScope', 'Auth', 'logger'
    ];

    /* @ngInject */
    function AuthController(
        $rootScope, Auth, logger
    ) {
        var vm = this;
        vm.title = 'Auth';

        debugger;

        var ref = new Firebase(FIREBASE_URL);
        $rootScope.auth = $firebaseAuth(ref);

        vm.login = function() {
            debugger;
            $rootScope.auth.$login('password', {
                email: vm.email,
                password: vm.password
            }).then(function(user) {
                $rootScope.alert.message = '';
            }, function(error) {
                if (error = 'INVALID_EMAIL') {
                    console.log('email invalid or not signed up — trying to sign you up!');
                    vm.register();

                } else if (error = 'INVALID_PASSWORD') {
                    console.log('wrong password!');
                } else {
                    console.log(error);
                }
            });
        }

        vm.register = function() {
            debugger;
            $rootScope.auth.$createUser(vm.email, vm.password, function(error, user) {
                if (!error) {
                    $rootScope.alert.message = '';
                } else {
                    $rootScope.alert.class = 'danger';
                    $rootScope.alert.message = 'The username and password combination you entered is invalid.';
                }
            });
        }

        activate();

        function activate() {
            logger.info('Activated Auth View');
        }
    }
})();
