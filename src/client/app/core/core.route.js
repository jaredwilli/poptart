(function() {
    'use strict';

    angular
        .module('app.core')
        .run(appRun)
        .run(appAuth);

    /* @ngInject */
    function appRun(routerHelper) {
        var otherwise = '/404';
        routerHelper.configureStates(getStates(), otherwise);
    }

    appAuth.$inject = ['$rootScope', 'Auth'];

    /* @ngInject */
    function appAuth($rootScope, Auth) {
        // track status of authentication
        Auth.$onAuth(function(user) {
            $rootScope.loggedIn = !!user;
        });
    }

    function getStates() {
        return [{
            state: 'login',
            config: {
                url: '/login',
                templateUrl: 'app/auth/login.html',
                controller: 'LoginController',
                controllerAs: 'vm',
                title: 'Login',
                settings: {
                    nav: 0,
                    content: '<i class="fa fa-lock"></i> Login'
                }
            }
        }, {
            state: 'register',
            config: {
                url: '/register',
                templateUrl: 'app/auth/register.html',
                controller: 'RegisterController',
                controllerAs: 'vm',
                title: 'Register',
                settings: {
                    nav: 0,
                    content: '<i class="fa fa-lock"></i> Register'
                }
            }
        }, {
            state: '404',
            config: {
                url: '/404',
                templateUrl: 'app/core/404.html',
                title: '404'
            }
        }];
    }
})();
