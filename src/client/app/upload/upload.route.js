(function() {
    'use strict';

    angular
        .module('app.upload')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'upload',
            config: {
                url: '/upload',
                templateUrl: 'app/upload/upload.html',
                controller: 'UploadController',
                controllerAs: 'vm',
                title: 'Upload',
                settings: {
                    nav: 2,
                    content: '<i class="fa fa-lock"></i> Upload'
                }
            }
        }];
    }
})();
