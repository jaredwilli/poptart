(function() {
    'use strict';

    angular
        .module('app.components')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'components',
            config: {
                url: '/components',
                templateUrl: 'app/components/components.html',
                controller: 'ComponentsController',
                controllerAs: 'vm',
                title: 'Components',
                settings: {
                    nav: 2,
                    content: '<i class="fa fa-lock"></i> Components'
                }
            }
        }];
    }
})();
